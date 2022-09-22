function consultarLibrary(){
    $.ajax({
        url:"https://gea8bae3742a263-library.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/library/library",
            type:"GET",
            datatype:"JSON",
            success:function (respuesta){
            console.log(respuesta)
        }
    });
}

function consultarProductosPruebas(){
    $.ajax({
        url:"https://gea8bae3742a263-pruebas.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/pruebas/productos",
        type:"GET",
        datatype:"JSON",
        success:function (respuesta){
            console.log(respuesta)
        }
    });
}