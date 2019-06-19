function createXHR() {
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	return xhr;
}

function lister() {
	var xhr = createXHR();
	
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var JSONData = JSON.parse(xhr.responseText);
				var notesDiv = document.getElementById("notes");
				notesDiv.innerHTML = "";
				
				for (i=0; i < JSONData.length; i++) {
					var note = JSONData[i];
					
					var noteHolder = document.createElement("div");
					noteHolder.setAttribute("id", note.id);
					
					
					
					noteHolder.addEventListener("click", coucou);
					
					var noteDate = document.createElement("p");
					var noteDateTxt = document.createTextNode(note.date);
					
					var noteContent = document.createElement("p");
					var noteContentTxt = document.createTextNode(note.content);
					
					noteDate.appendChild(noteDateTxt);
					noteContent.appendChild(noteContentTxt);
					noteHolder.appendChild(noteDate);
					noteHolder.appendChild(noteContent);
					
					notesDiv.appendChild(noteHolder);
				}
				
			} else {
				echec(xhr.status, xhr.responseText);
			}
		}
	};
	
	xhr.open(	"GET",
				"/TPPriseDeNotes/rest/notes",
				true);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send();
}


function echec(reponse) {
	document.getElementById("echec").innerHTML = reponse;
}

function coucou(event) {
	console.log("coucou");
	console.log(event);
	console.log(event.target.id);
}
