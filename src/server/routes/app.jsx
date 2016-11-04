import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function app(req, res) {
  const props = {};
  return res.render('index', {
    html: ReactDOMServer.renderToString(<div />),
    data: JSON.stringify(props),
  });
}
