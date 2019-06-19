package bo;

import java.io.Serializable;
import java.util.Date;

public class Note implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private int id;
	private String content;
	private Date date;
	
	public Note() {}
	
	public Note(String content, Date date) {
		this.content = content;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
