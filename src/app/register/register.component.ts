// TODO: Validation For Registration Page
// TODO: Guard For User Exit Faults
// TODO: Auto Login And Redirect To My Adverts (Maybe)
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserRegistraion } from '../_models/user';
import { UserService } from '../_services/user.service';
import { passwordMatch, EmptyValidator } from './password-match.validator';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{
    registerForm: FormGroup;
    user: IUserRegistraion;
    
    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService){

    }

    ngOnInit(){
        this.registerForm = this.fb.group({
            forenames: ['', [Validators.required, EmptyValidator, Validators.minLength(1), Validators.maxLength(100)]],
            surname: ['', [Validators.required, EmptyValidator, Validators.minLength(3), Validators.maxLength(100)]],
            email: ['', [Validators.required, EmptyValidator, Validators.minLength(6), Validators.maxLength(100), Validators.email]],
            passwordGroup: this.fb.group({
                password: ['', [Validators.required, EmptyValidator, Validators.minLength(8), Validators.maxLength(100)]],
                confirmPassword: ['', Validators.required]
            }, {validator: passwordMatch})
        });
    }

    onSubmission(){
        if(this.registerForm.valid){
            this.user = {
                Forenames: this.registerForm.get('forenames').value.trim(),
                Surname: this.registerForm.get('surname').value.trim(),
                Username: this.registerForm.get('email').value.trim(),
                Password: this.registerForm.get('passwordGroup.password').value.trim(),
                ConfirmPassword: this.registerForm.get('passwordGroup.confirmPassword').value.trim()
            }

            this.userService.create(this.user).subscribe({
                next: () => {
                    this.onSaveComplete();
                },
                error: err =>{
                    console.error(err)
                }
            })
        }
    }

    onSaveComplete(){
        this.registerForm.reset();
        this.router.navigate(['/login'])
    }
}