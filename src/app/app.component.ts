import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotescontainerComponent } from "./components/notescontainer/notescontainer.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, SidebarComponent, NotescontainerComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'memoflow';
}
