import { gql } from '@apollo/client';

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`
// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
        username: $username
        email: $email
        password: $password
        ) {
        token
        user {
            _id
        }
        }
    }
`;

// SAVE_BOOK will execute the saveBook mutation.
export const SAVE_BOOK = gql`
    mutation saveBook(
        $authors: String
        $description: String!
        $bookId: String!
        $image: String
        $link: String
        $title: String!
    ) {
        saveBook(
            authors: $authors
            description: $description
            bookId: $bookId
            image: $image
            link: $link
            title: $title
        )
    }
`
// REMOVE_BOOK will execute the removeBook mutation.
export const REMOVE_BOOK = gql`
    mutation removeBook(
        $bookId: String!
    ) {
        removeBook(
            bookId: $bookId
        )
    }
`
