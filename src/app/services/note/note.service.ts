import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../../models/note/note';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
	private notesSubject = new BehaviorSubject<Note[]>([]);
	notes$ = this.notesSubject.asObservable();

	constructor(private dataService: DataService) {}

	getNotes(): Note[] {
		return this.dataService.getNotes();
	}

	saveNotes(notes: Note[]): void {
		this.dataService.saveNotes(notes);
		this.notesSubject.next(notes);
	}

	createNewNote(noteData: Partial<Note>): void {
		const notes = this.getNotes();
		const newNote = new Note(noteData);
		notes.push(newNote);
		this.saveNotes(notes);
	}

	deleteNotes(note: Note): void {
		const notes = this.getNotes().filter((e: Note) => e.id !== note.id);
		this.saveNotes(notes);
	}

	achiveNotes(note: Note): void {
		const notes = this.getNotes();
		const noteToArchive = notes.find((e: Note) => e.id === note.id);
		if (noteToArchive) {
			noteToArchive.isArchived = true;
			this.saveNotes(notes);
		}
	}


}
