import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  name = signal('Jeferson');
  email = signal('jeferson.belmiro@gmail.com');

  constructor() { }
}
