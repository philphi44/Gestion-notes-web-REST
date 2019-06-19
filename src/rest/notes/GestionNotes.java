package rest.notes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import bo.Note;

@Path("/notes")
public class GestionNotes {
	private static List<Note> notes = new ArrayList<Note>();
	
	static {
		Date current = new Date();
		notes.add(new Note("Un magnifique contenu", current));
		notes.add(new Note("A wonderful content", new Date(current.getTime() - 10_000)));
	}
	
	@GET
	public List<Note> listerNotes() {
		return notes;
	}
}
