import { Component, inject, Signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book-review-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './book-review-dialog.component.html',
  styleUrl: './book-review-dialog.component.scss'
})
export class BookReviewDialogComponent {
  data: any = inject(MAT_DIALOG_DATA);

  profile?: { name: Signal<string>, email: Signal<string> };

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: environment.remotes.account,
        exposedModule: './ProfileState'
      });
      this.profile = module.ProfileState;
    } catch (err) {
      console.log('load error', { err });
    }
  }

}
