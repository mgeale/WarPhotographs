app.controller('mainController', function($scope, $http, $location) {

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

  $scope.introClick = function() {
    $scope.lightbox = {
      p: "<h1>Introduction</h1><br>In 1917 James Francis Hurley (1885-1962) became the first offical photographer to the Australian Imperial Forces. When he arrived at the Western Front his rank was honorary captain, but the troops, seeing how he took risks to get his pictures, dubbed him “the mad photographer”."
    }
    toggleClass();
  }

  $scope.toggleClick = function() {
    toggleClass();
    lightboxImg.src = 'imgs/empty.svg';
  }

});
