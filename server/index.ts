import * as http from 'http';
import * as debug from 'debug';

import app from './app';

debug('tsExpress');

let express = undefined;

app.Init().then((result) => {
  express = result.express;


  const port = normalizePort(process.env.PORT || 3000);
  express.set('port', port);

  const server = http.createServer(express);
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  function normalizePort(val: number | string): number | string | boolean {
    const tempPort: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(tempPort)) {
      return val;
    }else if (tempPort >= 0){
      return tempPort;
    }else {
      return false;
    };
  }

  function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') {
      throw error;
    };
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening(): void {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
  }
});





