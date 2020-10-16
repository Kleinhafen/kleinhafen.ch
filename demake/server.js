const path = require('path');

const express = require('express');
const stylus = require('express-stylus')
const bodyParser = require('body-parser');

const config = require('./config/config');
const dictionary = require('./lib/dictionary');
const email = require('./lib/email')
const instagram = require('./lib/instagram')

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.use(stylus({
  src: path.join(__dirname, 'stylesheets'),
  dest: path.join(__dirname, 'public', 'css'),
}));
app.use(express.static(
  path.join(__dirname, 'public')
));

app.get('/api/instagram-feed', (req, res, next) => {
  instagram.getInstagramFeed((err, images) => {
    if (err) {
      res.status(500)
    }
    res.json({err, images}).end()
  })
})

app.post('/api/interest-form-message', (req, res, next) => {
  console.log('[/api/interest-form-message]', req.body)
  const emailBody = email.makeEmailBodyForFormMessage(req.body)
  email.sendFormEmail(emailBody, (err, info) => {
    if (err) {
      res.status(500)
    }
    res.json({err}).end()
  })
})

app.get('/', (req, res) => {
  res.redirect('/en');
});

app.use('^/:targetLang*', (req, res, next) => {
  if (!('targetLang' in req.params)) {
    return next();
  }
  if (!(req.params['targetLang'] in dictionary)) {
    return res.status(404).render('error', {
      errorMessage: "Couldn't find that page.",
    });
  }
  req.dict = dictionary[req.params['targetLang']];
  next();
});

app.get('/:targetLang', (req, res) => {
  res.render('home', {dict: req.dict});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    errorMessage: 'There was an error!',
  });
});

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
