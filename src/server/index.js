import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import useHandlebars from './handlebars';
import config from './config';
import { indexPage } from './routes';
import * as logger from './utils/log';

const server = express();

server.use(compression());
server.use(morgan('short'));

useHandlebars(server);

server.use('/', indexPage);

server.listen(config.PORT, (err) => {
  if (err) { return logger.error(err); }
  return logger.info('Server on %s', config.PORT);
});
