import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, MatDialogModule, MatCardModule, MatButtonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  dialog = inject(MatDialog);

  books = [
    {
      title: 'You Don\'t Know JS',
      author: 'Kyle Simpson',
      review: {
        comment: 'Agora eu sei JS, mas continuo não entendendo o "this".'
      }
    },
    {
      title: 'Working Effectively with Legacy Code',
      author: 'Michael Feathers',
      review: {
        comment: 'Descobri que o maior legado é o trauma.'
      }
    },
    {
      title: 'Design Patterns: Elements of Reusable OO Software',
      author: 'Gamma, Helm, Johnson, Vlissides',
      review: {
        comment: 'Depois desse livro até meus bugs ficaram organizados!'
      }
    },
    {
      title: 'The Philosophy of Software Design',
      author: 'John Ousterhout',
      review: {
        comment: 'Depois de ler, troquei todos meus métodos "doStuff" para "doTheRightStuff".',
      }
    }
  ]


  async openReview(book: any) {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: environment.remotes.review,
        exposedModule: './BookReviewDialogComponent'
      });
      this.dialog.open(module.BookReviewDialogComponent, {
        data: book
      });
    } catch (err) {
      console.log('load error', { err });
    }
  }
}
