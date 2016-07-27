var app = angular.module('ngApp', [
  'yaru22.hovercard' 
]);

app.directive("thumbnailZoom", function () {

    return {
         scope:{ data : '=' },
         controller:'myContrl',
         templateUrl: 'thumbnailZoom.template.html',
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

     $scope.copysheet3 = 
    {
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

     $scope.copysheet4 = 
    {
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

     $scope.copysheet5 = 
    {
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

        $scope.copysheet6 = 
    {
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

    $scope.width = 160;
    $scope.height = 180;

});



