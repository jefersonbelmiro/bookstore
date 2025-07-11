import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'store';

  ngOnInit() {
    this.loadButton1();
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
}
