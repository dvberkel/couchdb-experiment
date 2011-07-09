function(head, req) {
	function sendHeaders() {
		start({
			"headers": { "Content-Type": "text/html"}
		});
	}
	
	function header() {
		var head = '<html><head></head><body>';
		return head;
	}
	
	function footer() {
		var foot = '</body>';
		return foot;
	}
	
	function sendContent() {
		send("<h1>Comics</h1>");
		send("<ul>");
		sendRows();
		send("</ul>");
	}
	
	function sendRows() {
		var row;
		while(row = getRow()) {
			if (row.key) {
				send("<li>");
				send("<em>" + row.key + "</em>");
				send("</li>");
			}
		}	
	}
	
	sendHeaders();
	send(header());
	sendContent();
	send(footer());
	
}
