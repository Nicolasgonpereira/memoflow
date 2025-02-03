export class Note {
	id: string;
	title: string;
	content: string;
	tags: string[];
	isArchived: boolean;
	highlightColor: string;

	constructor(note: Partial<Note>) {
		this.id = note.id ?? crypto.randomUUID();
		this.title = note.title ?? "";
		this.content = note.content ?? "";
		this.tags = note.tags ?? [];
		this.highlightColor = note.highlightColor ?? "";
		this.isArchived = note.isArchived ?? false;
	}

	static fromJSON(json: Note): Note {
		return new Note({
			id: json.id,
			title: json.title,
			content: json.content,
			tags: json.tags,
			highlightColor: json.highlightColor,
			isArchived: json.isArchived
		});
	}
}
