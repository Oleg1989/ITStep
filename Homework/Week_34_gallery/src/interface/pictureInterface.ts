import { ViewHandler } from "..//type/viewHandler";

export interface PictureInterface {
    id: string;
    author: string;
    url: string;
    download_url: string
    view: ViewHandler;
    viewPicture: ViewHandler;
}