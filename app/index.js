import fs from 'fs';
import http from "node:http"

const host = 'localhost';
const port = 8000;


/*----------------------------------------------------------------------------------------CREATE SERVER-------------------------------------------------------------------------*/
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

/*----------------------------------------------------------------------------------------DB-------------------------------------------------------------------------*/
let startedData = [
  {
    id: "0",
    username: "Alice",
    age: 20,
    hobbies: ['swim', 'sing'],
  },
  {
    id: "1",
    username: "Peter",
    age: 29,
    hobbies: ['sport'],
  }
]

const createDB = async () => {
    const dir = './app/db';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    if (fs.existsSync(dir+'/db.json')){
        fs.readFile(dir+'/db.json', function(error, data){
          if(error) { 
              return console.log(error);
          }
          startedData.splice(0, startedData.length)
          console.log(startedData)
          startedData = JSON.parse(data.toString())
          console.log(startedData)
      });
    }
    else{
        fs.writeFile(dir+'/db.json', JSON.stringify(startedData), function(error){
            if(error) throw error;
            else error;
        });
    }
};
await createDB();