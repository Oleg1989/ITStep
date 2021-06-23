import { PictureInterface } from "./pictureInterface";
import { ViewHandler } from "..//type/viewHandler";

export interface GalleryInterface {
    routes: { [key: string]: PictureInterface };
    addRoutes: (path: string, title: string, view: ViewHandler) => void;
    navigate: (path: string, push: boolean) => void;
}