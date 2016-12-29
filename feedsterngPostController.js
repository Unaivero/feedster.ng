app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Creative-Tail-People-gentleman.svg/128px-Creative-Tail-People-gentleman.svg.png'
      },
      comment: {
        img: 'https://cdn.pixabay.com/photo/2016/01/19/17/54/dog-1149964_960_720.jpg',
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Creative-Tail-People-businness-man.svg/128px-Creative-Tail-People-businness-man.svg.png'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]; 
}]);
