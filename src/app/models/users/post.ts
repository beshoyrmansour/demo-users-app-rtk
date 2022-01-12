import { AxiosResponse } from "axios";
import { User } from "./user";

export interface Post {
    id: string;
    image: string;
    likes: number;
    tags: Array<string>;
    text: string;
    publishDate: string;
    owner: User;
}

export interface GetUserPostsResponse {
    data: Array<Post>;
    limit: number;
    page: number;
    total: number;
}
export interface GetPostsResponse {
    data: Array<Post>;
    limit: number;
    total: number;
}
export interface AxiosGetPostsResponse extends AxiosResponse<GetPostsResponse> {
}
