app.controller('mainController', function($scope, $http) {

  $http.get('data/warphotographs.data.json')
  .then(function(response) {
    $scope.imgs = response.data;
  });

  var lightboxImg, lightboxCap;
  lightboxImg = document.getElementById('lightbox-img');
  lightboxCap = document.getElementById('lightbox-cap');

  $scope.lClass = 'close';

  $scope.toggleClass = function() {
    if ($scope.lClass == 'open') {
      $scope.lClass = 'close';
    } else {
      $scope.lClass = 'open';
    }
  }

  $scope.photoHide = 'false';
  $scope.bioHide = 'true';

  $scope.photoClick = function() {
    $scope.photo = {
      img: this.img.highreslink,
      caption: this.img.caption
    }
    $scope.toggleClass();
    var delay = setTimeout(function() {
      echo.init();
    }, 0);
  }

  $scope.introClick = function() {
    $scope.toggleClass();
    // $scope.bioHide = 'false';
  }

  $scope.toggleClick = function() {
    $scope.toggleClass();
    // lightboxImg.src = 'imgs/empty.svg';
    // $scope.photoHide = 'true';
    // $scope.bioHide = 'true';
  }

});
