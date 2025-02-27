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
  OnAddtoNote() {
    throw new Error('Method not implemented.');
  }
  note!: Note;

  constructor(public notesService: NotesService) {}

  // OnAddtoNote() {
  //   this.notesService.AddNote().subscribe({
  //     next: (res) => console.log(res),
  //   });
  // }
}
