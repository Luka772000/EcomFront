import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Observable, map, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: string[] = [];
  constructor(
    private fb: FormBuilder,
    private accService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        ],
        [this.validateEmailNotTaken()]     ],
      password: [null, [Validators.required]],
    });
  }
  onSubmit() {
    this.accService.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/shop');
      },
      (error) => {
        console.log(error);
        this.errors = error.errors;
      }
    );
  }
  validateEmailNotTaken(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.accService.checkEmailExists(control.value).pipe(
            map(res => {
              return res ? { emailExists: true } : null;
            }
            )
          );
        })
      );
    };
  }
}
