app.controller('mainController', [ "$scope", "$http", "$timeout",function($scope, $http, $timeout) {

  $http.get('data/warphotographs.data.json')
  .then(function(response) {
    $scope.imgs = response.data;
  });

  var lightboxImg = document.getElementById('lightbox-img');

  $scope.markerClick = function(region) {
    if (region === null) {
      $scope.selectedMarker = null;
    }
    $scope.selectedMarker = region;
  }

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
    $scope.aboutHide = true;
  }

  $scope.hideElements();

  $scope.photoClick = function() {
    $scope.photo = {
      img: this.img.highreslink,
      caption: this.img.caption,
      theatre: this.img.theatre,
      battle: this.img.battle,
      region: this.img.region
    }
    $scope.toggleClass();
    var delay = setTimeout(function() {
      echo.init();
    }, 0);
    $scope.photoHide = false;
  }

  $scope.introClick = function() {
    $scope.toggleClass();
    $scope.aboutHide = false;
  }

  $scope.toggleClick = function() {
    $scope.toggleClass();
    lightboxImg.src = 'imgs/empty.svg';
    $scope.hideElements();
  }

}]);
