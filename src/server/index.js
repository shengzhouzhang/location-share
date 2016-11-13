import path from 'path';
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import useHandlebars from './handlebars';
import config from './config';
import * as routes from './routes';
import * as logger from './utils/log';

const server = express();

server.use(compression());
server.use(morgan('short'));

useHandlebars(server);

server.use('/static/utils/', express.static(path.join(__dirname, '..', 'client', 'utils')));
server.use('/static/workers/', express.static(path.join(__dirname, '..', 'client', 'workers')));
server.use('/static', express.static(path.join(__dirname, '..', '..', 'public')));
server.use('/', routes.app);

server.listen(config.PORT, (err) => {
  if (err) { return logger.error(err); }
  return logger.info('Server on %s', config.PORT);
});
