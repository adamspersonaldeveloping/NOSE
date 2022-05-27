const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    const readWrite = (file, contentType) => {
        fs.readFile(file, function(err, data) {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
          });
    }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    readWrite('index.html','text/html')
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    })
  } else if (page == '/js/main.js') {
    readWrite('js/main.js', 'text/javascript')
  } else {
    return;
  }


// Nose picker click event will randomize 3 buttons (main.js file)
// generate color math floor to 1 - 3 to equal three prepicked rgb values
// buttons will do nothing

// After randomization buttons will each have a color assigned
// Button click with access DOM and change background color
// Yay! Success?

server.listen(8000);


})