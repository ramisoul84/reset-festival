import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../_services/register';
import { Client } from '../../_models/client';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,ReactiveFormsModule,LottieComponent],
  providers:[ClientService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  message: string = "";
  msg:boolean = false
  registerForm: FormGroup;
  wavesOptions: AnimationOptions = {
      path: 'animations/waves.json',
      loop:true,
    };
  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.registerForm = this.fb.group({
      name: ['', ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const client: Client = {
        name: this.registerForm.controls['name'].value,
        email: this.registerForm.controls['email'].value,
      }
      this.clientService.createClient(client).subscribe({
        next: () => {
          this.message = client.email + ' has been added to mailling list!'
          this.msg=true
          setTimeout(() => {
            this.message = '';
            this.msg=false
          }, 3000)
          this.registerForm.reset();
        },       
        error: err => {
          this.message = err.error;
          this.msg=true
          setTimeout(() => {
            this.message = '';
            this.msg=false
          }, 3000); 
        } 
      });
  }

}
}
