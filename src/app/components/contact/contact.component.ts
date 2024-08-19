import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  form:FormGroup=this.fb.group({
    subject:['',[Validators.required]],
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    message:['',[Validators.required]]
  })
  submited:boolean=false;
  get f() { return this.form.controls; }

  constructor(private fb:FormBuilder,private emailService:EmailService,private toastr: ToastrService){}
  sendEmail(){
    this.submited=true;
    if(this.form.valid){
      this.emailService.send(this.form.value);
      this.resetForm();
      
    }
  }

  resetForm(){
    this.submited=false;
    this.form.patchValue({
      subject:'',
      name:'',
      email:'',
      message:''
    })
  }

}
