import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../_services/register';
import { Client } from '../../_models/client';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,ReactiveFormsModule],
  providers:[ClientService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  message: string = "err";
  er:boolean = false
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const client: Client = {
        email: this.registerForm.controls['email'].value,
      }
      this.clientService.createClient(client).subscribe({
        next: () => {
          this.message = client.email + ' has been added to the mailing list!'
          setTimeout(() => {
            this.message = '';
          }, 3000)
          this.registerForm.reset();
        },       
        error: err => {
          this.message = err.error;
          this.er=true
          setTimeout(() => {
            this.message = '';
            this.er=false
          }, 3000); 
        } 
      });
  }

}
}
