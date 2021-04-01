import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { environment as env } from '../../environments/environment';

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

  async onSubmit(form: NgForm) {
    const value = form.value;
    form.reset();

    // Send to Dev email
    try {
      const result = await emailjs.send(
        env.SERVICE_ID,
        env.TEMPLATE_ID_DEV,
        value,
        env.USER_ID
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    // Send to User email
    try {
      const result = await emailjs.send(
        env.SERVICE_ID,
        env.TEMPLATE_ID_USER,
        value,
        env.USER_ID
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }

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
