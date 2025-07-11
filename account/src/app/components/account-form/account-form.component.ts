import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, inject, Signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-account-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss'
})
export class AccountFormComponent {

  profile!: { name: WritableSignal<string>, email: WritableSignal<string> };

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  async ngOnInit() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: environment.remotes.account,
        exposedModule: './ProfileState'
      });

      const profile: { name: WritableSignal<string>, email: WritableSignal<string> } = module.ProfileState;

      this.form.patchValue({
        name: profile.name(),
        email: profile.email(),
      });

      this.form.controls.name.valueChanges.subscribe(name => {
        if (name) profile.name.set(name);
      })
      this.form.controls.email.valueChanges.subscribe(email => {
        if (email) profile.email.set(email);
      })
    } catch (err) {
      console.log('load error', { err });
    }
  }

}
