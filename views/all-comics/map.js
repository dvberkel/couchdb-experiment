function(doc) {
	if (doc.type == 'comic') {
		emit(doc.title,null);
	}
}
