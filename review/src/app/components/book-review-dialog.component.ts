import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from '@profile/service'

@Component({
  selector: 'app-book-review-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './book-review-dialog.component.html',
  styleUrl: './book-review-dialog.component.scss'
})
export class BookReviewDialogComponent {
  data: any = inject(MAT_DIALOG_DATA);

  profile = inject(ProfileService);

}
