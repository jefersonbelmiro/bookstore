import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Signal, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatIconButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileName?: Signal<string>;

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProfileState'
      });
      this.profileName = module.ProfileState.name;
    } catch (err) {
      console.log('load error', { err });
    }
  }

}
