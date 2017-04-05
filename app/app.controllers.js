app.controller('mainController', function($scope, $http, $timeout) {

  $http.get('data/warphotographs.data.json')
  .then(function(response) {
    $scope.imgs = response.data;
  });

  var lightboxImg;

  $timeout(function() {
    lightboxImg = document.getElementById('lightbox-img');
  }, 50);


  $scope.lClass = 'close';

  $scope.toggleClass = function() {
    if ($scope.lClass == 'open') {
      $scope.lClass = 'close';
    } else {
      $scope.lClass = 'open';
    }
  }

  $scope.photoHide = true;
  $scope.bioHide = true;

  $scope.photoClick = function() {
    $scope.photo = {
      img: this.img.highreslink,
      caption: this.img.caption
    }
    $scope.toggleClass();
    var delay = setTimeout(function() {
      echo.init();
    }, 0);
    $scope.photoHide = false;
  }

  $scope.introClick = function() {
    $scope.toggleClass();
    $scope.bioHide = false;
  }

  $scope.toggleClick = function() {
    $scope.toggleClass();
    lightboxImg.src = 'imgs/empty.svg';
    if ($scope.photoHide = false) {
      $scope.photoHide = true;
    } else {
      $scope.photoHide = true;
    }
    if ($scope.bioHide = false) {
      $scope.bioHide = true;
    } else {
      $scope.bioHide = true;
    }
  }

});
