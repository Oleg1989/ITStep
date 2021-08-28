import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  constructor() { }
  ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  add(post: Post) {
    this.posts.push(post);
  }
  getAll() {
    return this.posts;
  }
  changeState(id: string) {
    this.posts.forEach((post) => {
      if (id === post.id) {
        post.state = !post.state;
      }
    });
  }
}
