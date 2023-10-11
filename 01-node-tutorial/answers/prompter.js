const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      console.log(resultHash);
      console.log();
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let text = "Enter something below.";
let num1, num2, result =0;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
    <p>${text}</p>
    <p>${result}</p>
    <form method="POST">
      <input name="text" ></input><br>
      <span>Numbers to multiply</span><br>
      <input name="num1"></input> <br>
      <input name="num2"></input>
    <button type="submit">Submit</button>
    </form>
  </body>
  `;
};
//
/*const displayResult =() => {
res.end(`
  Location: "/result"
  <p>${text}</p>    
  <p>${result}</p>
  
  <p>We can't seem to find the page you are looking for</p>
  
`)};*/

//<a href='/'>back home</a>

const server = http.createServer((req, res) => {
  //Location: "/result", //redirecting the url
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      
      const multyN = (body) => {
        if(body.num1 && body.num2){
          text = body.text;
          result = body.num1*body.num2;
        } else {
          
        }
      }

      if (body["text"]) {
        //text = body["text"];
        multyN(body);
      } else {
        text = "Nothing was entered.";
      }
      res.writeHead(303, {
        Location: "/", //redirecting the url
      });
      //res.end(displayResult());
      //displayResult();
      res.end(form());
    });
  } else {
    /*if (result){
      displayResult();
      //res.end(displayResult());
    } else { 
      res.end(form());
    } */
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

let PORT = 3000;
server.listen(PORT);
console.log(`The server is listening on port ${PORT}.`);
