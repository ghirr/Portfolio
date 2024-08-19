import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private toastr: ToastrService) { }
  send(email:any){
    emailjs.send(environment.emailJscontact_service,environment.emailJscontact_form,{
      subject: email.subject,
      to_name: "islem ghariani",
      from_name: email.name,
      from_email: email.email,
      message: email.message,
      },{publicKey:environment.emailjspublickey})
  .then(
    (response) => {
      this.showSuccess();
    },
    (err) => {
      this.showError()
    },
  );
  }

  showSuccess() {
    this.toastr.success('Email send it!', 'Success');
  }

  showError() {
    this.toastr.error('Failing sending email', 'Error');
  }
}
