import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Note } from '../todo-model';

@Component({
  selector: 'app-add-card',
  imports: [FormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css',
})
export class AddCardComponent {
  note: Note = {
    title: '',
    content: '',
    id: 0,
  };

  constructor(public notesService: NotesService) {}

  OnAddtoNote() {
    this.notesService.AddNote(this.note.title, this.note.content).subscribe({
      next: (res) => console.log(res),
    });
  }
}
