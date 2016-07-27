
angular.module('yaru22.hovercard', ['yaru22.hovercard.tmpls']).directive('hovercard', function () {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'template/angular-hovercard.tmpl',
    scope:{ data : '=' },
    controller : function($scope){

       $scope.copysheet1 = {
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

     $scope.copysheet2 = 
    {
       
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };
    },
    link: function ($scope, $element, $attrs) {

      $scope.show = {};
      $scope.show.card = false;
      $scope.hoverTmplUrl = "hoverCardDetail.html";
      $scope.onHoverIn = $scope.$eval($attrs.onHoverIn);
      $scope.onHoverOut = $scope.$eval($attrs.onHoverOut);
      var placement = $attrs.placement || 'bottomRight';
      $scope.hoverLabelStyle = {};
      if ($attrs.labelColor) {
        $scope.hoverLabelStyle.color = $attrs.labelColor;
      }
      $scope.hoverCardStyle = {};
      if ($attrs.background) {
        $scope.hoverCardStyle.background = $attrs.background;
      }
      if ($attrs.width) {
        $scope.hoverCardStyle.width = $attrs.width;
      }
      if (placement) {
        var positionStrings = placement.replace(/([A-Z])/g, ' $1').toLowerCase().split(' ');
        var positionObj = {};
        positionObj[positionStrings[0]] = true;
        positionObj[positionStrings[1]] = true;


        if (positionObj.left) {

          if(positionObj)
           $scope.hoverCardStyle.left = '';
          $scope.hoverCardStyle.right = '10em ';
        }

        if (positionObj.right) {
         $scope.hoverCardStyle.left = '10em ';
          $scope.hoverCardStyle.right = ' ';
        }
        
        if (positionObj.bottom) {
          $scope.hoverCardStyle.bottom = '';
          $scope.hoverCardStyle.top = '16em';
          // $scope.hoverCardStyle['padding-bottom'] = '';
          $scope.hoverCardStyle['margin-top'] = '-2em';
        }
        
        if (positionObj.top) {
          $scope.hoverCardStyle.bottom = '7em';
          $scope.hoverCardStyle.top = '';
          $scope.hoverCardStyle['margin-bottom'] = '7em';
          // $scope.hoverCardStyle['padding-top'] = ' ';
        }
        
      }
    }
  };
});
angular.module('yaru22.hovercard.tmpls', []).run([
  '$templateCache',
  function ($templateCache) {
    'use strict';
    $templateCache.put('template/angular-hovercard.tmpl', '<div class=angular-hovercard ng-mouseenter="showCard = true; onHoverIn()" ng-mouseleave="showCard = false; onHoverOut()"><label class=angular-hovercard-label ng-class="{ \'angular-hovercard-active\': showCard }" ng-style=hoverLabelStyle ng-transclude=""></label><div class=angular-hovercard-detail ng-class="{ \'angular-hovercard-active\': showCard }" ng-include=hoverTmplUrl ng-style=hoverCardStyle></div></div>');
  }
]);