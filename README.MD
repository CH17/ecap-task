# ECAP-Task

Create two containerized docker applications (one for server using Node JS and another for client using dotnet) so that they can communicate with each other.

## Work Around

#### SERVER:

- I didn't want to re-invent the wheel so tried to find an optimal package ([WS](https://www.npmjs.com/package/ws)) to create web socket server.

- Used [readline](https://nodejs.org/api/readline.html) for getting input from TTY. [Made sure that setRawMode is true].

- Triggered asynchronous event after each keypress using emitKeypressEvents.

- Send each read-able character to the client.

#### CLIENT:

- Used [websocket-sharp](https://github.com/sta/websocket-sharp) to create client.

- Wrote each character on the console after receiving from the server (Made sure characters are read-able once again).

## Installation

```bash
# clone git repo

git clone git@github.com:CH17/ecap-task.git
```

```bash
cd ecap-task/
```

```bash
# create docker network

docker network create ecap-net
```

```bash
# build server

docker build -t server node-server
```

```bash
# build client

docker build -t client dotnet-client
```

```bash
# run server inside the network with pre-defined name

clear && docker run -it --rm --net ecap-net --name ecap-server server
```

As our client is already built, we can run as many clients as we want. For each client, open a new CMD and run the below command.

```bash
# run client inside the network

clear && docker run -it --rm --net ecap-net --name ecap-client client
```

_You may need to use **sudo** based on your OS_

## Test

#TODO

## Result

[![ecap-result](https://s9.gifyu.com/images/ezgif-1-dad6c9c0f84f.gif)](https://gifyu.com/image/PDKF)

## License

[MIT](https://choosealicense.com/licenses/mit/)
