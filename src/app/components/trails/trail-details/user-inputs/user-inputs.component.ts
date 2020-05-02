import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent implements OnInit {
  @Output() addFavorite: EventEmitter<any> = new EventEmitter();
  @Output() addComplete: EventEmitter<any> = new EventEmitter();
  @Input() currentTrail: Trail;

  favorited: boolean = false;
  completed: boolean = false;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  handleFavorites() {
    this.favorited = !this.favorited;
    this.addFavorite.emit(this.favorited);
    // this.userService.handleFavorites(this.currentTrail, this.favorited);
    console.log(this.currentTrail)
  }

  handleCompleted() {
    this.completed = !this.completed;
    this.addComplete.emit(this.completed);
  }

}
