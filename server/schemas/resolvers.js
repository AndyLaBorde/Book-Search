const { User, Book } = require("../models");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError("You need to be logged in!");
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        return { token, user };
        },
        login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError("No user with this email found!");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError("Incorrect password!");
        }

        const token = signToken(user);
        return { token, user };
        },
        saveBook: async (parent, { Book }) => {
        return User.findOneAndUpdate({
            $addToSet: { savedBooks: Book },
        });
        },
        removeBook: async (parent, { bookId }) => {
        return User.findOneAndUpdate({
            $pull: { savedBooks: Book },
        });
        },
    },
};

module.exports = resolvers;