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
    // Send to Dev email
    emailjs
      .send(
        environment.SERVICE_ID,
        environment.TEMPLATE_ID.dev,
        form.value,
        environment.USER_ID
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    // Send to User email
    emailjs
      .send(
        environment.SERVICE_ID,
        environment.TEMPLATE_ID.dev,
        form.value,
        environment.USER_ID
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    this.changeStatus();
  }
  changeStatus() {
    this.visible = true;
    setTimeout(() => this.onClose(), 5000);
  }
  onClose() {
    this.visible = false;
  }
}
