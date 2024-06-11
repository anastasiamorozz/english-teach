export interface IUser{
    id: number;
    email: string;
    isActivated: boolean;
    firstName?: string;
    lastName?: string;
    photo?: string;
    isAdmin?:boolean;
    wordsCount?:number;
}