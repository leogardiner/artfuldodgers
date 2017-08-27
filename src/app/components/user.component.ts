import { Component } from '@angular/core';
import { MoltinService } from '../services/moltin.service';

@Component({
  selector: 'user',
  templateUrl: `app/views/user.component.html`,
  providers: [MoltinService]
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  hobby: string;
  posts: Post;

  addHobby(val: string) {
      this.hobbies.push(val)
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1)
  }

  toggleHobbies() {
      this.showHobbies = !this.showHobbies;
  }

  constructor(private postService: MoltinService) {
      this.name = 'Sassy the sasquatch'; 
      this.email = 'gwabwan@jah.rastafari.com';
      this.address = {
          street: 'Gasqcoigne',
          city: 'Blenheim',
          state: 'TY'
      };
      this.hobbies = ['Whatareyatalkinabeet', 'volcano', 'lemon flavoured pods'];
      this.showHobbies = false;

      this.postService.getPosts();
      //this.posts = {'id':'asd', 'title':'asd', 'body':'asdasd'}
    //   this.postService.getPosts().subscribe(posts => {
    //     this.posts = posts;
    //   });
  }
}

interface Post {
    id: number;
    title: string;
    body: string;
}

interface address {
    street: string;
    city: string;
    state: string;
}