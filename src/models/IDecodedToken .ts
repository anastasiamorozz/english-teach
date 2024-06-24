export interface IDecodedToken {
    id: number;
    email: string;
    isActivated: boolean;
    iat: number;
    exp: number;
}