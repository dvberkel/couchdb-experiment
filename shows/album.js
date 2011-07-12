function(doc, req) {  
	var body = "<h1>No album selected</h1>";
	if (doc) {
		body =  "<h1>" + doc.title + "</h1>";
	} 
	return {
		"body" : body,
		"headers": {
			"Content-Type": "text/html"
		}
	}
}
