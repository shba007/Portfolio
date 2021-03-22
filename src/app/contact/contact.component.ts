import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Email } from '../models/email.model';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() email: Email;
  visible = false;

  constructor() {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    form.reset();
    // Send to Dev email
    emailjs
      .send(
        this.email.SERVICE_ID,
        this.email.TEMPLATE_ID_DEV,
        value,
        this.email.USER_ID
      )
      .then((result) => {
        console.log(
          result.text === 'OK' ? 'The Dev email Send Successfully' : result.text
        );
        // Send to User email
        emailjs
          .send(
            this.email.SERVICE_ID,
            this.email.TEMPLATE_ID_USER,
            value,
            this.email.USER_ID
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
