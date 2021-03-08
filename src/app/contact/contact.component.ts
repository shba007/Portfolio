import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment } from '../../environments/environment';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  visible = false;

  constructor() {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    form.reset();
    // Send to Dev email
    emailjs
      .send(
        environment.SERVICE_ID,
        environment.TEMPLATE_ID.dev,
        value,
        environment.USER_ID
      )
      .then((result) => {
        console.log(
          result.text === 'OK' ? 'The Dev email Send Successfully' : result.text
        );
        // Send to User email
        emailjs
          .send(
            environment.SERVICE_ID,
            environment.TEMPLATE_ID.user,
            value,
            environment.USER_ID
          )
          .then((result) => {
            console.log(
              result.text === 'OK'
                ? 'The User email Send Successfully'
                : result.text
            );
            this.changeStatus();
          })
          .catch((error) => {
            console.log(error.text);
          });
      })
      .catch((error) => {
        console.log(error.text);
      });
  }
  changeStatus() {
    this.visible = true;
    setTimeout(() => this.onClose(), 5000);
  }
  onClose() {
    this.visible = false;
  }
}
