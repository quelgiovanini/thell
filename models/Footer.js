var keystone = require('keystone');
var Types = keystone.Field.Types;

var Footer = new keystone.List('Footer', {
  map: { name: 'company' },
  nocreate: true,
  nodelete: true,
	label: 'Rodapé',
  autokey: { path: 'key', from: 'company', unique: true },
});

Footer.add({
  company: { type: String, required: true, index: true, label: 'Empresa' },
  email: { type: Types.Email, initial: true, required: true, unique: true, index: true, label: 'Email da empresa' },
  city: { type: String, label: 'Cidade, Estado - País' },
	phone: { type: String, label: 'Telefone da empresa' },
});

Footer.register();