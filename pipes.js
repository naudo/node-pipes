var fs = require('fs');
var readableStream = fs.createReadStream('file1.txt');
var writeableStream = fs.createWriteStream('file2.txt');

// Read file 1 and pipe it into file2
readableStream.pipe(writeableStream);

readableStream.on('end', function(data) {
  console.log('done reading file1.txt');
});

writeableStream.on('finish', function(data) {
  console.log('finished wiriting to file2.txt');
});
