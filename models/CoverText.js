var keystone = require('keystone');
var Types = keystone.Field.Types;

var CoverText = new keystone.List('CoverText', {
    map: { name: 'title' },
    nocreate: true,
    nodelete: false,
		label: 'Conteúdo da capa',
    autokey: { path: 'key', from: 'title', unique: true },
});

CoverText.add({
  title: { type: String, index: true, label: 'Frase da capa' },
  subtitle: { type: String, label: 'Frase das perguntas' },
});

CoverText.register();