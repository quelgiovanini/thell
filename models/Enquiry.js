var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
  noedit: true,
	label: 'Contato via site'
});

Enquiry.add({
	name: { type: Types.Name, required: true, label: 'Nome' },
	email: { type: Types.Email, required: true, label: 'Email' },
	phone: { type: String, label: 'Telefone' },
	message: { type: Types.Textarea, required: true, label: 'Mensagem' },
	createdAt: { type: Date, default: Date.now, label: 'Data de criação' },
});

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, createdAt';
Enquiry.register();
