app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png'
      },
      comment: {
        img: 'https://cdn.pixabay.com/photo/2016/01/19/17/54/dog-1149964_960_720.jpg',
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]; 
}]);
