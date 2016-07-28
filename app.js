var app = angular.module('ngApp', [
  'hover']);

app.directive("thumbnailZoom", function () {

    return {
        replace:true,
         scope:{ data : '=' },
         controller:'myContrl',
         templateUrl: 'templates/thumbnailZoom.template.html',
           }
}

);

app.controller('myContrl', function($scope) {

    $scope.copysheet1 = {
       
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

     $scope.copysheet2 = 
    {
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

    $scope.width = 160;
    $scope.height = 180;

});



