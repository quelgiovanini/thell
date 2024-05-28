// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

keystone.init({
	'name': 'Thell',
	'brand': 'Thell',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
  'user model': 'User',
	'port': 8080,

  'host': process.env.IP || '127.0.0.1',
  mail: {
    from: {
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      account: 'contato@thell.com.br',
      password: ''
    },
    to: 'contato@thell.com.br',
		subject: 'Contato do site'
  }
});
keystone.import('models');
keystone.set('locals', {
  _: require('lodash'),
 formatter : require('@msafi/text-mask-core'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'Capa': ['CoverText','Question'],
	'Nossa empresa': 'OurCompany',
  'Soluções': ['SolutionIntro','Solution'],
  'Empresa': 'Footer',
  'Contatos': 'enquiries',
	'Usuários': 'users',
});

keystone.start();