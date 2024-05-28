var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'home'
  locals.data = {
    coverTexts: [],
    questions: [],
    ourCompanies: [],
    solutionIntros: [],
    solutions: [],
		footers: [],
  };

  view.on('init', function (next) {

    keystone.list('CoverText').model.find().exec(function (err, results) {

      if (err || !results.length) {
        return next(err);
      }

      //console.log(results);
      locals.data.coverTexts = results;
      next();
    });
  });

  view.on('init', function (next) {

		keystone.list('Question').model.find().exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.questions = results;
			next();
		});
});

  view.on('init', function (next) {

    keystone.list('OurCompany').model.find().exec(function (err, results) {

      if (err || !results.length) {
        return next(err);
      }

      //console.log(results);
      locals.data.ourCompanies = results;
      next();
    });
  });

  view.on('init', function (next) {

    keystone.list('SolutionIntro').model.find().exec(function (err, results) {

      if (err || !results.length) {
        return next(err);
      }

      //console.log(results);
      locals.data.solutionIntros = results;
      next();
    });
  });

  view.on('init', function (next) {

    keystone.list('Solution').model.find().exec(function (err, results) {

      if (err || !results.length) {
        return next(err);
      }

      //console.log(results);
      locals.data.solutions = results;
      next();
    });
  });

  view.on('init', function (next) {

    keystone.list('Footer').model.find().exec(function (err, results) {

      if (err || !results.length) {
        return next(err);
      }

      //console.log(results);
      locals.data.footers = results;
      next();
    });
  });
	
	// Render the view
	view.render('index');
};
