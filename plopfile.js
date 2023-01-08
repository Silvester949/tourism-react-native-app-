module.exports = function (plop) {
  plop.setGenerator('screen', {
    description: 'Creates application screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name: ',
      },
      {
        type: 'confirm',
        name: 'isPrivate',
        message: 'Is private screen?',
      },
    ],
    actions: function (data) {
      let destination = 'src/screens/public/{{properCase name}}';

      if (data.isPrivate) {
        destination = 'src/screens/private/{{properCase name}}';
      }

      return [
        {
          type: 'addMany',
          destination: destination,
          templateFiles: 'plop-templates/screens/*.hbs',
          base: 'plop-templates/screens',
          stripExtensions: ['hbs'],
        },
      ];
    },
  });

  plop.setGenerator('component', {
    description: 'Creates application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
    ],
    actions: function () {
      const destination = 'src/components/{{properCase name}}';

      return [
        {
          type: 'addMany',
          destination: destination,
          templateFiles: 'plop-templates/component/*.hbs',
          base: 'plop-templates/component',
          stripExtensions: ['hbs'],
        },
      ];
    },
  });
};
