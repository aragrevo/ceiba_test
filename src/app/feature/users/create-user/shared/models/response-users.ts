import { User } from './user';

export interface ResponseGetUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}


export interface ResponseCreateUser {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}