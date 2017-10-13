angular.module('peopleList', ['ngMaterial'])

.controller('PeopleController',['$scope','$http','Person', 'ServicePeople', function($scope,$http,Person,ServicePeople) {

   $scope.people = ServicePeople.getAll();
    
}])

.factory('Person',function()
{
    function Person(name,id,disclosableInfo)
    {
        this.name = name;
        this.id = id;
        this.disclosableInfo = disclosableInfo;
    }

    return Person;
})

.service("ServicePeople",['$http','Person', function($http, Person)
{
    var people = [];
    
    this.getAll = function()
    {
        $http({method: 'GET', url: 'http://localhost:8090/rest/people'}).then(function(data) {
            
        angular.forEach(data.data, function(item)
        {
            var person = new Person(
                item.name,
                item.id,
                item.disclosableInfo    
            );

            people.push(person);
        });
      
        });

        return people;
    };  


}]);
