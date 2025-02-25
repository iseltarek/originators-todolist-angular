import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../todo-model';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export class TodoCardComponent {
  @Input() note: Note = {
    title: '',
    content: '',
    id: 0,
  };

  constructor(public NotesService: NotesService) {}

  editnote() {
    throw new Error('Method not implemented.');
  }
  deletenote() {
    throw new Error('Method not implemented.');
  }
}
