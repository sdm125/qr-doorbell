import { Component, OnInit } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-phone-number',
  templateUrl: './add-phone-number.component.html',
  styleUrls: ['./add-phone-number.component.scss'],
})
export class AddPhoneNumberComponent implements OnInit {
  currentUser: Object;
  savedUserPhoneNumber: number;
  newUserPhoneNumber: number;
  edit: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = netlifyIdentity.currentUser();
    this.savedUserPhoneNumber = this.currentUser
      ? netlifyIdentity.currentUser().user_metadata.phone_number
      : 0;
  }

  savePhoneNumber() {
    this.userService
      .updateUserPhoneNumber(this.newUserPhoneNumber)
      .then((user) => {
        this.savedUserPhoneNumber = user.user_metadata.phone_number;
      });
  }
}
