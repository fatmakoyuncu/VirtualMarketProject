import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  singUp: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.singUp = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9_.-]{3,16}$')]),
      confirm: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9_.-]{3,16}$')])
    }, this.passwordMatch)
  }

  passwordMatch(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirm').value ? null : {notmatch: true}
  }

}
