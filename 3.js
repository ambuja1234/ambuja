angular
	.module('addSkills', [])
	.controller('addSkillsController', ['$scope', function($scope) {

		$scope.skills = [];

		$scope.addSkill = function() {
			$scope.skills.push({'title': $scope.newSkill, 'done':false})
			$scope.newSkill = ''
		}

		$scope.deleteSkill = function(index) {	
			$scope.skills.splice(index, 1);
		}
	}])
$scope.sveTask = function(index) {
    if ($scope.$scope.currentIndex === -1) {
        $scope.tasks.push(angular.copy($scope.tasks[$index]));
    } else {
        $scope.tasks[$scope.currentIndex] = angular.copy($scope.tasks[$index]);
    }


    $scope.currentIndex = -1;
    $scope.currentTask = {};
};
$scope.UpdateTask = function(index) {
    $scope.currentIndex = index;
    $scope.currentTask = angular.copy($scope.tasks[$index]);
};
<form ng-submit="saveTask()">
    <div class="list">
        <label class="item item-input">
            <input type="text" placeholder="Edit your stuff here?" ng-model="currentTask.title">
        </label>  </div>
  
    <div class="padding">
        <button type="submit" class="button button-block button-dark">Update Task</button>
    </div>
</form>
}