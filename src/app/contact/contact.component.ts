import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  public name: boolean = false;
  public email: boolean = false;
  public message: boolean = false;
  public mailSuccess: boolean = false;
  public spanName: boolean = true;
  public spanEmail: boolean = true;
  public spanMessage: boolean = true;
  public toastMessage: string = '';
  public invalidName: string = 'Your name is requiered';
  public invalidEmail: string = 'Your email is requiered';
  public invalidMessage: string = 'Your message is empty';

  ngOnInit() {}

  async sendMail() {
    this.ableInput();
  }

  async ableInput() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    await this.fetchEmail(nameField, emailField, messageField);
    this.disableInput(nameField, emailField, messageField, sendButton);
  }

  async fetchEmail(nameField, emailField, messageField) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch(
      'https://leon-groschek.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
    this.displayToast();
    this.disableSpans();
  }

  disableInput(nameField, emailField, messageField, sendButton) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    this.resetInput(nameField, emailField, messageField);
  }

  resetInput(nameField, emailField, messageField) {
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  displayToast() {
    this.mailSuccess = true;
    this.toastMessage = 'Successfully :)';
    setTimeout(() => {
      this.mailSuccess = false;
      this.toastMessage = '';
    }, 3000);
  }

  disableSpans() {
    this.spanName = false;
    this.spanEmail = false;
    this.spanMessage = false;
    this.invalidName = '';
    this.invalidEmail = '';
    this.invalidMessage = '';
  }

  displaySpans() {
    this.spanName = true;
    this.spanEmail = true;
    this.spanMessage = true;
    this.invalidName = 'Your name is requiered';
    this.invalidEmail = 'Your email is requiered';
    this.invalidMessage = 'Your message is empty';
  }


}
