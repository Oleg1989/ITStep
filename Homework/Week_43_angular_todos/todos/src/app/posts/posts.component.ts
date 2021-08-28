import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = this.service.getAll();
  constructor(private service: PostsService) { }
  changeState(event: Event) {
    this.service.changeState((event.target as HTMLElement).id);
  }
  ngOnInit(): void {
  }
}
