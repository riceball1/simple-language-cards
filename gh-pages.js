import  ghpages from 'gh-pages';

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/riceball1/simple-language-cards', 
    user: {
      name: 'Dana', 
      email: 'ngdana1@gmail.com' 
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);