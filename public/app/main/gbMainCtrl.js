angular.module('app').controller('gbMainCtrl', function($scope) {
  $scope.games = [
    {title: 'Monopoly', winner: 'Bryan Garza', featured: false, played: new Date('10/5/2014'), tags: ['Monopoly']},
    {title: 'Life', winner: 'Bryan Garza', featured: false, played: new Date('11/5/2014'), tags: ['Life']},
    {title: 'Chess', winner: 'Bryan Garza', featured: false, played: new Date('12/5/2015'), tags: ['Chess']},
    {title: 'Sorry', winner: 'Bryan Garza', featured: false, played: new Date('1/5/2015'), tags: ['Sorry']},
    {title: 'Scrabble', winner: 'Bryan Garza', featured: false, played: new Date('2/5/2015'), tags: ['Scrabble']},
    {title: 'Checkers', winner: 'Bryan Garza', featured: true, played: new Date('3/5/2015'), tags: ['Checkers']},
    {title: 'Operation', winner: 'Bryan Garza', featured: true, played: new Date('6/5/2015'), tags: ['Operation']},
    {title: 'Monopoly', winner: 'Bryan Garza', featured: true, played: new Date('7/5/2015'), tags: ['Monopoly']},
    {title: 'Go', winner: 'Bryan Garza', featured: true, played: new Date('8/17/2015'), tags: ['Go']},
    {title: 'Checkers', winner: 'Bryan Garza', featured: true, played: new Date('9/5/2015'), tags: ['Checkers']},
    {title: 'Monopoly', winner: 'Bryan Garza', featured: true, played: new Date('9/9/2015'), tags: ['Monopoly']},
    {title: 'Chess', winner: 'Jade Cho', featured: false, played: new Date('9/10/2015'), tags: ['Chess']}
  ]
});
