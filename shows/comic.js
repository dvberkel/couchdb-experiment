function(doc, req) {  
	// !json template.comicHeader
	// !json template.comicFooter
	
	var body = "<h1>No comic selected</h1>";
	if (doc) {
		body =  "<h1>" + doc.title + "</h1>";
	} 
	return {
		"body" : template.comicHeader + body + template.comicFooter,
		"headers": {
			"Content-Type": "text/html"
		}
	}
}
