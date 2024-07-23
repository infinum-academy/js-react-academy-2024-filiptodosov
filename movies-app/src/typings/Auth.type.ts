export interface IUser{
    id: string,
    email: string,
    image_url: string
}


export interface IAuthData{
    "access-token": string,
    client: string,
    "token-type": string,
    uid: string
}