import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note/note';
import { NoteService } from '../../services/note/note.service';
import { NoteCardComponent } from "../note-card/note-card.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { TagsfilterComponent } from "../tagsfilter/tagsfilter.component";

@Component({
  selector: 'app-notescontainer',
  standalone: true,
  imports: [SearchbarComponent, TagsfilterComponent, NoteCardComponent, CommonModule],
  templateUrl: './notescontainer.component.html',
  styleUrl: './notescontainer.component.css'
})
export class NotescontainerComponent implements OnInit {
	currentNotes: Note[] = [];

	constructor(private noteService: NoteService) {
		this.noteService.notes$.subscribe(notes => this.currentNotes = notes);
	}

	ngOnInit(): void {
		this.currentNotes = this.noteService.getNotes();
	}
}
