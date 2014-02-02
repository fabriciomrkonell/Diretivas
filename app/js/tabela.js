angular.module('appDiretiva').directive("minhaDiretiva", function(){
	return {
    	template: 
        	"<table>" +
            	"<tr>" +
                	"<th ng-repeat='city in dados'>{{city}}" +            
                    "</th>" +
                "</tr>" +
            "</table>",
        restrict: "E",
        replace: true,
        scope: {
            dados: '='
        },
        link: function(scope, element, attrs){
            debugger;
        }
    };        
});