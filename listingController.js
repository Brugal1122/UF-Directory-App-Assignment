angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.new = undefined;



    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function()
    {
      $scope.listings.push($scope.new)
      $scope.new = undefined;
    };
    $scope.deleteListing = function(name)
    {
        for(i=0;i<$scope.listings.length; i++)
        {
          if($scope.listings[i].name==name)
          {
            $scope.listings.splice(i,1);
            return;
          }
        }
    };
    $scope.showDetails = function(listing)
    {
          $scope.detailedInfo = listing;
    };

  }
]);
