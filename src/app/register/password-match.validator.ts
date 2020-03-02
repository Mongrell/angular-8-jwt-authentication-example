import { AbstractControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

export function passwordMatch(c: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = c.get('password');
    const confirmPasswordControl = c.get('confirmPassword');

    if((passwordControl.pristine || confirmPasswordControl.pristine) || (passwordControl.value === confirmPasswordControl.value)){
        return null;
    }
    return { match: true }
}

export function EmptyValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if(isNullOrUndefined(c.value) || String(c.value).trim() === ""){
        return { required: true }
    }
    return null
}