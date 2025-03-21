import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  newPost = {
    title: 'New Post',
    body: 'This is a new post.',
    userId: 1
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Fetch posts when the component loads
    this.getPosts();
  }

  getPosts() {
    this.apiService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  addPost() {
    this.apiService.createPost(this.newPost).subscribe(
      data => {
        this.posts.push(data);
        console.log('Post added:', data);
      },
      error => {
        console.error('Error adding post:', error);
      }
    );
  }

  deletePost(id: number) {
    this.apiService.deletePost(id).subscribe(
      () => {
        this.posts = this.posts.filter(post => post.id !== id);
        console.log('Post deleted');
      },
      error => {
        console.error('Error deleting post:', error);
      }
    );
  }
}
