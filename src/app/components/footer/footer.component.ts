import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  message: string = "err";
  er:boolean = false
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
}
}
