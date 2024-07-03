import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  users : any=[];

  constructor() {
    this.getData();
  }

  async getData(){
    const _users = await fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((json) => {
        return json;
      });

      this.users = _users;
      console.log(this.users);
  }

}
