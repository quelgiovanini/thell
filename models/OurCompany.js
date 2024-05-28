var keystone = require('keystone');
var Types = keystone.Field.Types;

var OurCompany = new keystone.List('OurCompany', {
    map: { name: 'title' },
    nocreate: true,
    nodelete: true,
		label: 'Nossa empresa',
    autokey: { path: 'key', from: 'title', unique: true },
});

OurCompany.add({
    title: { type: String, index: true, label: 'Título da seção' },
    subtitle: { type: String, label: 'Subtitulo da seção' },
    description: { type: Types.Html, wysiwyg: true, height: 400, label: 'Descrição da seção' },
    image: { type: Types.CloudinaryImage, label: 'Imagem da seção' },
});

OurCompany.register();