var app = angular.module('app',[]);
app.service('Enter',function(email,password){
	this.email = email;
	this.password = password;

});
app.controller('controller',function($scope,){
	$scope.json = [{"login":"admin@gmail.com","password":"Admin1"},
				   {"login":"Alex@gmail.com","password":"TheKing"},
				   {"login":"admin2@gmail.com","password":"adminn"},
	]
$scope.submit = function (email,password) {
	var isset = false;
  if(password.length>=6){	
  	for(var i =0;i<$scope.json.length;i++){
  		if (email == $scope.json[i].login && password == $scope.json[i].password){
  			isset = true;
  		}
  	}
  	if (isset == false){ 
  		alert("Wrong email or password!");
  	}else{
  		window.open("https://www.amazon.com");
  		
  	}
}
  }
});