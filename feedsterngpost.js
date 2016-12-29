app.directive('feedsterPost', function(){
  return {
    retrict: 'E',
    scope: {post: '='},
    templateUrl: 'feedsterngpost.html',
    link: function(scope, element, attrs) {
           scope.like = function() {
               element.toggleClass('btn-like');
           };
       }
  };
});