import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title: string = '';
  state: boolean = false;
  constructor(private service: PostsService) { }

  ngOnInit(): void {
  }
  addPost() {
    this.service.add({
      id: this.service.ID(),
      title: this.title,
      state: this.state,
    });
    this.title = '';
  }
}
