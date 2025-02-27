import { Component, OnInit } from '@angular/core';
import { AddCardComponent } from './add-card/add-card.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { NotesService } from './notes.service';
import { Note } from './todo-model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todo',
  imports: [AddCardComponent, TodoCardComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  notes!: Note[];
  constructor(
    public NotesService: NotesService,
    public router: Router,
    public authService: AuthService
  ) {}

  OnLogOut() {
    this.authService.logout();
  }
  ngOnInit() {
    this.NotesService.getNote(3).subscribe({
      next: (res) => {
        this.notes = res;
      },
    });
  }
}
