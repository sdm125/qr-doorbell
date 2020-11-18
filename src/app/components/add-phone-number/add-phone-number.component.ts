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
    if (this.currentUser) {
      this.userService
        .getDecryptedPhoneNumber(
          netlifyIdentity.currentUser().user_metadata.phone_number
        )
        .subscribe((data) => {
          this.savedUserPhoneNumber = data.decrypted_number;
        });
    }
  }

  savePhoneNumber() {
    this.userService
      .updateUserPhoneNumber(this.newUserPhoneNumber)
      .then((user) => {
        this.savedUserPhoneNumber = user.user_metadata.phone_number;

        this.userService
          .getDecryptedPhoneNumber(
            netlifyIdentity.currentUser().user_metadata.phone_number
          )
          .subscribe((data) => {
            this.savedUserPhoneNumber = data.decrypted_number;
          });
      });
  }
}
