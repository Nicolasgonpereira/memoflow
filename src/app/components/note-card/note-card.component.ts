import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Note } from '../../models/note/note';
import { NoteService } from '../../services/note/note.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
@Input() note!: Note;

  constructor(private noteService: NoteService) {}

  deleteNote(): void {
	this.noteService.deleteNotes(this.note);
  }
}
