var fs = require('fs');

fs.rename('hello.txt','hello_new.txt0',function(err)
{
    if(err) throw err;
    console.log('File Renamed');
});