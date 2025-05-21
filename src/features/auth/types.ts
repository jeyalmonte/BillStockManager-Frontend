

export interface LoginInput {
    username: string,
    password: string
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string
}


export interface RegisterInput {
    name: string,
    username: string,
    email: string,
    password: string
}