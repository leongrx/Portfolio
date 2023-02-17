import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public mailSuccess: boolean = false;
  public spanName: boolean = true;
  public spanEmail: boolean = true;
  public spanMessage: boolean = true;
  public toastMessage: string = '';
  public invalidName: string = 'Your name is requiered';
  public invalidEmail: string = 'Your email is requiered';
  public invalidMessage: string = 'Your message is empty';

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })


  ngOnInit() {}

  get name() {
    return this.contactForm.get('name')
  }

  get email() {
    return this.contactForm.get('email')
  }

  get message() {
    return this.contactForm.get('message')
  }

  validation() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    this.emailValidation(emailField);
    this.nameValidation(nameField);
    this.messageValidation(messageField);
  }

  emailValidation(emailField) {
    if (emailField.validity.valid) {
      emailField.classList.add('valid');
      emailField.classList.remove('invalid');
    } else if (emailField.value !== '') {
      emailField.classList.remove('valid');
      emailField.classList.add('invalid');
    }
  }
  
  nameValidation(nameField) {
    if (nameField.validity.valid) {
      nameField.classList.add('valid');
      nameField.classList.remove('invalid');
    } else if (nameField.value !== ''){
      nameField.classList.remove('valid');
      nameField.classList.add('invalid');
    }
  }
  
  messageValidation(messageField) {
    if (messageField.validity.valid) {
      messageField.classList.add('valid');
      messageField.classList.remove('invalid');
    } else if (messageField.value !== ''){
      messageField.classList.remove('valid');
      messageField.classList.add('invalid');
    }
  }

  async sendMail() {
    await this.ableInput();
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
    this.removeValid(nameField, emailField, messageField);
  }
  
  removeValid(nameField, emailField, messageField) {
    nameField.classList.remove('valid');
    messageField.classList.remove('valid');
    emailField.classList.remove('valid');
  }
  
  displayToast() {
    this.mailSuccess = true;
    this.toastMessage = 'Successfully :)';
    setTimeout(() => {
      this.mailSuccess = false;
      this.toastMessage = '';
    }, 3000);
  }

}
