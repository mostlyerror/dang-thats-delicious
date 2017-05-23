exports.myMiddleWare = (req, res, next) => {
  req.name = 'Ben';
  res.cookie('name', 'ben is cool', {maxAge: 90000000000});
  next();
};

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'homePage',
    name: req.name,
  });
};
