import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileService } from '@profile/service'

@Component({
  selector: 'app-account-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss'
})
export class AccountFormComponent {

  profile = inject(ProfileService);

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  constructor() {
    console.log('profile', this.profile);
    this.form.patchValue({
      name: this.profile.name(),
      email: this.profile.email(),
    });

    this.form.controls.name.valueChanges.subscribe(name => {
      if (name) this.profile.name.set(name);
      console.log('name change', name, this.profile.name());
    })
    this.form.controls.email.valueChanges.subscribe(email => {
      if (email) this.profile.email.set(email);
    })
  }

}
