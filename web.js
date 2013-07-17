var express = require('express');
var fs = require('fs');
var buffer = new Buffer(100);	

fs.readFileSync('index.html', function( err, data) 
	{
		buffer.write(data);
	}
);

var app = express.createServer(express.logger());

app.get('/', function(request, response) 
	{
		response.send(buffer.toString());
	}
);
	

var port = process.env.PORT || 5000;
app.listen(port, function() 
	{
	  console.log("Listening on " + port);
	}
);
