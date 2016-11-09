
export default function app(req, res) {
  return res.render('index', {
    host: 'http://localhost:8080',
  });
}
