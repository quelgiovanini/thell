var keystone = require('keystone');
var Types = keystone.Field.Types;

var SolutionIntro = new keystone.List('SolutionIntro', {
  map: { name: 'title' },
  nocreate: true,
  nodelete: true,
	label: 'Introdução',
  autokey: { path: 'key', from: 'title', unique: true },
});

SolutionIntro.add({
  title: { type: String, index: true, label: 'Título da seção' },
  intro: { type: Types.Html, wysiwyg: true, height: 400, label: 'Introdução da seção' },
});

SolutionIntro.register();