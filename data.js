angular.module("myapp", [])
.controller("employeeController", function($scope) {
    $scope.names = getRandomData();

    $scope.ratings=[
        {option:'first',value:1},
        {option:'second',value:2},
        {option:'third',value:3},
        {option:'fourth',value:4}
    ];
});

function getRandomData(){
   var name=['Atul','Mahesh','Prasad','Ashwini','Sudhir','Vineet','Abhishek','Shubham','Nikhil','Mayur','Ritesh','Anil','Sharad'];
   var lastname=['Patl','Thorat','Lad','Rathod','Nair','Patil','Mahajan','Sagar','Narkhede'];
   var department=['QA','SD','ADMIN','CARE','HR'];
   var country=['India','US','Canada','Australia'];
   var designation=['Junior','Senior','Lead','Manager'];

   names = [];
   for(var i=1;i<=getRandomArbitrary(100,200);i++)
   {
      names.push({name:name[generateRandomNumber(name.length-1)],
            lastname:lastname[generateRandomNumber(lastname.length-1)],
            department:department[generateRandomNumber(department.length-1)],
            country:country[generateRandomNumber(country.length-1)],
            designation:designation[generateRandomNumber(designation.length-1)],
            ratting:generateRandomNumber(4)});
   }
   return names;

}