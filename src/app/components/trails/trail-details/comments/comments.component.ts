import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentCollection: string[] = [];
  comment: string;

  constructor() { }

  ngOnInit(): void {
  }

  post() {
    if (this.comment != undefined) {
      this.commentCollection.push(this.comment);
      this.comment = '';
    }
  }

}
