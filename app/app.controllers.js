app.controller('mainController', function($scope, $http) {

});

app.controller('imageController', function($scope, $http) {

  $http.get('data/warphotographs.data.json')
  .then(function(response) {
    $scope.imgs = response.data;
  });

  var lightboxImg;
  lightboxImg = document.getElementById('lightbox-img');

  $scope.lClass = 'close';

  var toggleClass = function() {
    if ($scope.lClass == 'open') {
      $scope.lClass = 'close';
    } else {
      $scope.lClass = 'open';
    }
  }

  $scope.photoClick = function() {
    $scope.lightbox = {
      img: this.img.highreslink,
      caption: this.img.caption
    }
    toggleClass();
    var delay = setTimeout(function() {
      echo.init();
    }, 0);
  }

  $scope.toggleClick = function() {
    toggleClass();
    lightboxImg.src = 'imgs/empty.svg';
  }

});
