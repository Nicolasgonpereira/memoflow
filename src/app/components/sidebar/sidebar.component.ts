import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoteService } from '../../services/note/note.service';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

	constructor(private noteService: NoteService) {}
	newNote(): void {
		this.noteService.createNewNote(
			{
				title: "json.title",
				content: "json.content",
				tags: ["json.tags"],
				highlightColor: "json.highlightColor",
				isArchived: false,
			}
		);
	}
}
