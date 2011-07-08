function(doc) {
  	if (doc.type == 'album') {
  		emit([doc.fromComic,doc.index],doc.title);
  	}
}
