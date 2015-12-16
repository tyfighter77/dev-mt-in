angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService) {

  $scope.myProfile = profileService.checkForProfile();

  $scope.sortOptions = [{
      display: 'Ascending',
      value: false
    },
    {
      display: 'Descending',
      value: true
    }
  ];

  profileService.serviceTest();

  $scope.editing = false;

  $scope.editState = function() {
    if($scope.editing){
      return "Editing :";
    } else {
      return "Edit";
    }
  };

  $scope.saveProfile = function(profile){
    profileService.saveProfile(profile);
    $scope.editing = false;
  };

  $scope.deleteProfile = function () {
    profileService.deleteProfile();
    $scope.myProfile = profileService.checkForProfile();
  };
});
