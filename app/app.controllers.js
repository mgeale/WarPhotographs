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

  $scope.hideElements = function() {
    $scope.photoHide = true;
    $scope.bioHide = true;
    $scope.aboutHide = true;
  }

  $scope.hideElements();

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

  $scope.aboutClick = function() {
    $scope.toggleClass();
    $scope.aboutHide = false;
  }

  $scope.toggleClick = function() {
    $scope.toggleClass();
    lightboxImg.src = 'imgs/empty.svg';
    $scope.hideElements();
  }

});
