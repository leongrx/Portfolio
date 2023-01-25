import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  public name: boolean = false;
  public email: boolean = false;
  public message: boolean = false;

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
    // senden
    await fetch(
      'https://leon-groschek.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
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
}
