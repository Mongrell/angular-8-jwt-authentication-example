// TODO: Validation For Registration Page
// TODO: Guard For User Exit Faults
// TODO: Auto Login And Redirect To My Adverts (Maybe)
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User, IUserRegistraion } from '../_models/user';
import { UserService } from '../_services/user.service';

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
            forenames: [''],
            surname: [''],
            email: [''],
            passwordGroup: this.fb.group({
                password: [''],
                confirmPassword: ['']
            })
        });
    }

    onSubmission(){
        if(this.registerForm.valid){
            this.user = {
                Forenames: this.registerForm.get('forenames').value,
                Surname: this.registerForm.get('surname').value,
                Username: this.registerForm.get('email').value,
                Password: this.registerForm.get('passwordGroup.password').value,
                ConfirmPassword: this.registerForm.get('passwordGroup.confirmPassword').value
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