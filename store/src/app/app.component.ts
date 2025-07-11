import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, inject, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileService } from '@profile/service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatIconButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'store';
  profile = inject(ProfileService);

  ngOnInit() {
    //this.loadButton1();
    //this.loadRoutes();
    //this.loadProfile();
    console.log('profile', this.profile.name());
  }

  async loadProfile() {
    try {

      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProfileService'
      });

      console.log('module', { module });
    } catch (err) {
      console.log('load error', { err });
    }
  }

  async loadButton1() {
    try {

      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './AccountForm'
      });

      console.log('module', { module });
    } catch (err) {
      console.log('load error', { err });
    }
  }

  async loadRoutes() {
    try {

      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './routes'
      });

      console.log('module', { module });
    } catch (err) {
      console.log('load error', { err });
    }
  }
}
