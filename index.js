const http = require("http");
const fs = require("fs");
const requests = require("requests");

//const homeFile = fs.readFileSync("home.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=90b1fd65579e8d41ce161484e7f6dd14')
        .on('data', (chunk) => {                        // it will go to this api and read data and display it
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];                 // array of an object
            //console.log(arrdata[0].main.temp);
            //const realTimeData = arrdata.map((val)=>replaceVal(homeFile,val)).join("");        // function calling
                //console.log(val.main);                                       // .join("") convert array into string 
                                                                               // val = array value
            res.write(arrdata);
            //console.log(realTimeData);           // print home.html updated file
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            console.log('end');
        });
    }
})

server.listen(5001,"127.0.0.1");