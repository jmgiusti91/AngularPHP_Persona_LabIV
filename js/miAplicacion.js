var miApp = angular.module('angularABM', ['ui.router']);


miApp.config(function ($stateProvider, $urlRouterProvider){

	$stateProvider
		.state(
			"inicio", {
				url:"/inicio",
				templateUrl:"inicio.html",
				controller:"controlInicio"
			})

		.state(
			"persona", {
				url:"/persona",
				abstract:true,
				templateUrl:"personas.html"
			})

		.state("persona.menu", {
			url:"/menu",
			views:{
				"contenido":{
					templateUrl:"personas-menu.html",
					controller:"controlPersonaMenu"
				}
			}
		})

		.state("persona.alta", {
			url:"/alta",
			views: {
				"contenido":{
					templateUrl:"personas-alta.html",
					controller:"controlPersonaAlta"
				}
			}
		})

		.state("persona.grilla", {
			url:"/grilla",
			views: {
				"contenido":{
					templateUrl:"personas-grilla.html",
					controller:"controlPersonaGrilla"
				}
			}
		})

		.state("log", {
			url:"/log",
			abstract:true,
			templateUrl:"log-abstract.html"
		})

		.state("log.login", {
			url:"/login",
			views: {
				"registro": {
					templateUrl:"login.html",
					controller:"controlLogIn"
				}
			}
		})

		.state("juego", {
			url:"/juegos",
			abstract:true,
			templateUrl:"juegos-abstract.html"
		})

		.state("juego.menu", {
			url:"/menu",
			views: {
				"games": {
					templateUrl: "juegos-menu.html",
					controller: "controlJuegosMenu"
				}
			}
		})

		.state("juego.adivinaElNumero1", {
			url:"/adivinaElNumero1",
			views:{
				"games":{
					templateUrl:"juegos-adivina-numero-uno.html",
					controller:"controlAdivinaNumeroUno"
				}
			}
		})

		.state("juego.adivinaElNumero2", {
			url:"/adivinaElNumero2",
			views: {
				"games":{
					templateUrl:"juegos-adivina-numero-dos.html",
					controller:"controlAdivinaNumeroDos"
				}
			}
		})


	$urlRouterProvider.otherwise("/inicio");

});


miApp.controller('controlInicio', function($scope){

});


miApp.controller("controlPersonaMenu", function($scope){

});

miApp.controller("controlPersonaAlta", function($scope){

});

miApp.controller("controlPersonaGrilla", function($scope){

});

miApp.controller("controlLogIn", function($scope){

	$scope.registro = false;

	$scope.Registrarse=function(){
		$scope.registro = true;
	}

	$scope.Volver=function(){
		$scope.registro = false;
	}
});

miApp.controller("controlJuegosMenu", function($scope){

});

miApp.controller("controlAdivinaNumeroUno", function($scope){
	$scope.datos={};
	$scope.datos.numeroSecreto = 0; 
	$scope.datos.contadorIntentos = 0;

	$scope.comenzar=function(){
		$scope.datos.numeroSecreto = Math.floor((Math.random() * 100) + 1);
	}

	$scope.verificar=function(){
		if($scope.datos.numeroSecreto == $scope.datos.numero){
			$scope.datos.contadorIntentos++;
			alert("Usted es un ganador y en solo "+$scope.datos.contadorIntentos+" intentos!!");
		} else if($scope.datos.numeroSecreto > $scope.datos.numero){
			$scope.datos.contadorIntentos++;
			alert("Todavia falta para llegar al numero secreto");
		} else{
			$scope.datos.contadorIntentos++;
			alert("Se paso! El numero secreto es mas chico");
		}
	}
});

miApp.controller("controlAdivinaNumeroDos", function($scope){
	$scope.datos={};
	$scope.datos.numeroSecreto = 0;
	$scope.datos.contadorDeIntentos = 0;

	$scope.comenzar=function(){
		$scope.datos.numeroSecreto = Math.floor((Math.random() * 100) + 1);
	}

	$scope.verificar=function(){
		$scope.datos.contadorDeIntentos++;
		if($scope.datos.numeroSecreto == $scope.datos.numero){

			if($scope.datos.contadorDeIntentos == 1){
				alert("Usted es un psiquico");
			}

			if($scope.datos.contadorDeIntentos == 2){
				alert("Excelente percepcion");
			}

			if($scope.datos.contadorDeIntentos == 3){
				alert("Esto es suerte");
			}

			if($scope.datos.contadorDeIntentos == 4){
				alert("Excelente tecnica");
			}

			if($scope.datos.contadorDeIntentos == 5){
				alert("Usted esta en la media");
			}

			if($scope.datos.contadorDeIntentos >= 6 && $scope.datos.contadorDeIntentos <= 10){
				alert("falta tecnica");
			}

			if($scope.datos.contadorDeIntentos > 10){
				alert("Afortunado en el amor!!!");
			}

		} else if($scope.datos.numeroSecreto > $scope.datos.numero){
			alert("Todavia falta para llegar al numero secreto");
		} else{
			alert("Se paso! El numero secreto es mas chico");
		}
	}
})