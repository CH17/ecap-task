const webSocket = require('ws');
const readline = require('readline')

const port = process.env.PORT || 8383;

// Create WebSocket Server
const webServer = new webSocket.Server({
  port: port
});

// If the stream is TTY, then it must  be in RAW mode
if (process.stdin.isTTY)
  process.stdin.setRawMode(true);

process.stdin.setEncoding('utf8');

readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// Emiting event after keypress
readline.emitKeypressEvents(process.stdin)

webServer.on('connection', function connection(socket) {   

  process.stdin.on('data', (key) => {
    socket.send(key.toString());     
  })

});
console.log(`Web Socket Server Running on PORT ${port}`);
console.log(`Start typing or press CTRL+C to exit.......`);