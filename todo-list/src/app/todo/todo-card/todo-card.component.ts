import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../todo-model';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
@Component({
  selector: 'app-todo-card',
  imports: [MatCheckboxModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export class TodoCardComponent {
  @Input() note!: Note;
  @Output() noteDeleted = new EventEmitter<string>();

  onCheckChange($event: MatCheckboxChange) {
    throw new Error('Method not implemented.');
  }

  constructor(public NotesService: NotesService) {}

  editnote() {
    throw new Error('Method not implemented.');
  }
  OnDeleteNote() {
    this.NotesService.DeleteNote(this.note._id).subscribe({
      next: () => {
        this.noteDeleted.emit(this.note._id);
      },
    });
  }
}
