import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      hobbies: this.fb.array([this.fb.control('')]) // At least one empty hobby
    });
  }

  get hobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted:', this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
