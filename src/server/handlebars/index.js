import path from 'path';
import expressHandlebars from 'express-handlebars';

export default function useHandlebars(expressServer) {
  expressServer.engine('handlebars', expressHandlebars());
  expressServer.set('view engine', 'handlebars');
  expressServer.set('views', path.join(__dirname));
}
