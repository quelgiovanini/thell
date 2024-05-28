var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var nodemailer = require('nodemailer');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
  locals.section = 'contact';

  function sendEmail(payload) {
    var smtp = keystone.get('mail');
		var transporter = nodemailer.createTransport({
				host: smtp.from.host,
				port: smtp.from.port,
				secure: smtp.from.secure,
				auth: {
						user: smtp.from.account,
						pass: smtp.from.password
				}
		});

		// setup email data with unicode symbols
    var mailOptions = {
      from: smtp.from.account, // sender address
      to: smtp.to, // list of receivers
      subject: smtp.subject, // Subject line
      html: " \
				<p>Você recebeu um novo contato do site.</p> \
				<p>De: " + payload['name.full'] + "</p> \
				<p>Email: " + payload.email + "</p> \
				<p>Fone: " + payload.phone + "</p> \
				<p>Mensagem: <i>" + payload.message + "</i></p> \
				"
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
						return console.log(error);
				}
		});
  }

  view.on('post', { action: 'contact' }, function (next) {
    var application = new Enquiry.model();
    var updater = application.getUpdateHandler(req);
    var payload = req.body;

    updater.process(req.body, {
      fields: 'name, email, phone, message'
    }, function (err) {
      res.apiResponse({
        success: true
      });
      sendEmail(payload);
    });
  });

		view.render('index');  
};
