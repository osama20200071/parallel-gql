import { gql, useMutation } from '@urql/next'
import { useQuery } from 'urql'

export const SignupMutation = gql`
  mutation Mutation($input: AuthInput!) {
    createUser(input: $input) {
      token
    }
  }
`
// for renaming

export const SigninMutation = gql`
  mutation Signin($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`

// Query to get the current user (me)
const CurrentUserQuery = gql`
  query Me {
    me {
      id
      email
      createdAt
    }
  }
`

export const useCurrentUserQuery = () =>
  useQuery<CurrentUserQueryResponse>({ query: CurrentUserQuery })

export const useSignupMutation = () =>
  useMutation<SignupResponse, AuthVariables>(SignupMutation)
export const useSigninMutation = () =>
  useMutation<SigninResponse, AuthVariables>(SigninMutation)
