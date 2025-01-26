type AuthInput = {
  email: string
  password: string
}

type SigninResponse = {
  signin: {
    token: string
  }
}
type SignupResponse = {
  createUser: {
    token: string
  }
}

type CurrentUserQueryResponse = {
  me: {
    id: string
    email: string
    createdAt: Date
  }
}

type AuthVariables = {
  input: AuthInput
}

type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>
