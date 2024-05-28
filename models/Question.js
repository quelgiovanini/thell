var keystone = require('keystone');
var Types = keystone.Field.Types;

var Question = new keystone.List('Question', {
  map: { name: 'title' },
  nocreate: false,
	nodelete: true,
  label: 'Perguntas',
  autokey: { path: 'key', from: 'title', unique: true },
});

Question.add({
  title: { type: String, index: true, label: 'Título da pergunta' },
  description: { type: Types.Textarea, height: 150, label: 'Pergunta' },
  icon: { type: Types.Text, height: 20, label: 'Ícone da pergunta' },
});

Question.register();