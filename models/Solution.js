var keystone = require('keystone');
var Types = keystone.Field.Types;

var Solution = new keystone.List('Solution', {
    map: { name: 'title' },
    nocreate: true,
    nodelete: true,
		label: 'Soluções',
    autokey: { path: 'key', from: 'title', unique: true },
});

Solution.add({
    title: { type: String, index: true, label: 'Titulo da solução' },
    description: { type: Types.Textarea, height: 150, label: 'Descrição da solução'},
    icon: { type: Types.Text, height: 20, label: 'Ícone da solução' },
});

Solution.register();