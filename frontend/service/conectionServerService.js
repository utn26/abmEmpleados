app.service('conectionServerService', function($http){


    this.listar = function listar(){
      return $http.get("http://localhost:8080/empleado/list");
    }
     this.crear = function crear(emp){
      return($http.post("http://localhost:8080/empleado/crear",emp));


    }
     this.editar = function editar(id,emp){
      return($http.put("http://localhost:8080/empleado/editar/"+id,emp));


    }
    this.eliminar = function eliminar(id){
      return($http.delete("http://localhost:8080/empleado/eliminar/"+id));


    }
     /*this.listar = function listar(){
      return $http.get("http://localhost:8080/empleado/list");
    }
     this.listar = function listar(){
      return $http.get("http://localhost:8080/empleado/list");
    }*/

});

/*
,function($http,$q){

   return {
    crear: crear
}   

function crear(empleado){

    console.log(empleado);

    var defered = $q.defer();
    var promise = defered.promise;

    $http.post("http://localhost:8080/empleado/crear",empleado);
    conexion.success(function(respuesta){

        defered.resolve(respuesta)



    })
    .error(function(err){
        console.log("-----");
        console.log(err);
        defered.reject(err);
    })      
    return promise;

}
}
)*/;