import { Injectable } from '@angular/core';
import { Note } from '../../models/note/note';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private localStorageKey = 'notes_data';

	getNotes(): Note[] {
		const data = localStorage.getItem(this.localStorageKey);
		if (!data) return [];
		const parsedNotes: Note[] = JSON.parse(data);
		return parsedNotes.map(note => Note.fromJSON(note));
	}

	saveNotes(notes: Note[]): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
	}
}
