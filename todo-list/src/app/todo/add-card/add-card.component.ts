import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-card',
  imports: [FormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css',
})
export class AddCardComponent {
  note = {
    title: '',
    content: '',
  };
  constructor(public notesService: NotesService) {}

  OnaAddtoNote() {
    this.notesService.AddNote(this.note.title, this.note.content).subscribe({
      next: (res) => console.log(res),
    });
  }
}
