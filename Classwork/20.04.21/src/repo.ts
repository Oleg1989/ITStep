export interface Post {
    id: string;
    title: string;
    body: string;
}
export interface RepositoryInterface {
    posts: Post[];
    getPosts: () => Post[];
    addPost: (params: Post) => void;
    removePost: (params: Post) => void;
    updatePost: (params: Post) => void;
}

export class Repository implements RepositoryInterface {
    posts: Post[];
    constructor(){
        this.posts = [];
    }
    addPost(newPost: Post): void {
        this.posts.push(newPost);
      }
    getPosts(): Array<Post> {
        return this.posts;
    }
    removePost(id: Post): void {
        return 
    }
    updatePost(newPost: Post): void {

    }
}