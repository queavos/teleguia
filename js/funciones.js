//var dir_remota="http://localhost/guia/index01.php";
function traer_abonado(currentId) {
	
    var url = dir_remota+"?cod=" + currentId;
    $.ajax({
        dataType: "jsonp",
        data: "",
        url: url,
        success: function(data) {

            var salida = "";
            $.each(data.resultado, function(i, user) {
                salida = salida + "<li class='listaitem'>"; 
				salida = salida + " <h3 class='ui-li-heading'>" + user.titular +"</h3>";
				salida = salida + " <p>"
				salida = salida + " <b> Telefono: </b>" + user.nro_telefono + "<br>";
				salida = salida + " <b> Direccion: </b> " + user.direccion + "<br>"; 
				salida = salida + " <b> Localidad </b> " + user.localidad + "<br >";
				salida = salida + " </p>";
				salida = salida + " </li>";
				salida = salida + "<li class='listaitem' data-icon='phone'>"; 				
				salida = salida + " <a href='tel:0" + user.cod + "" + user.nro_telefono + "' data-role='button'>Llamar</a>";
				salida = salida + " </li>";
		
			add_contact='{"displayName":"'+user.titular+
			'","nickname":'+user.titular+
			'","phoneNumbers":[{"type":"other","value":"0'+user.cod +''+ user.nro_telefono+
			'","id":0,"pref":false}],"addresses":[{"postalCode":"","type":"work","id":0,"locality":"'+user.localidad+
			'","pref":"false","streetAddress":"'+user.direccion+
			'","region":"ITAPUA","country":"Paraguay"}],"note":"Desde la Teleguia Itapua - Paraguay"}';
					             
			});
            $("#salida").html(salida);
            $("#salida").listview();			
        }
    });
}
;
function procesar_datos(data) {
    //$("#encontrados").html("Encontrados: " + data.cantidad + " Registros ");
    var salida = "";
    $.each(data.resultado, function(i, user) {
        salida = salida + "<li class='listaitem'><a  href='#' id='" + user.abonado + "'> <h3 class='ui-li-heading'>" + user.titular + "</h3><p class='ui-li-desc'><b>Telefono:</b>: 0" +user.cod+' - ' +user.nro_telefono + "</p><p class = 'ui-li-desc'> <b> Localidad </b> " + user.localidad + "</p ></a></li>";

    });
	//$salida_ls="<ul data-role='listview' id='lista_resultado'> <ul>";
	//$("#resultados").html(salida_ls);
	$("#lista_resultado").listview();
    $("#encontrados").html("" + data.cantidad + " Registros Encontrados ");
    $("#lista_resultado").html(salida);
	$("#lista_resultado").listview('refresh');
	
    //$.mobile.changePage("#resultado", "slide", false, true);

	
}				
/* Combo localidades */
function get_localidades() {
    var url = dir_remota+"?localidad=1" ;
    $.ajax({
        dataType: "jsonp",
        data: "",
        url: url,
        success: function(data) {
            var salida = "";
            $.each(data.resultado, function(i, local) {
                salida = salida + 
				"<option value='"+local.localidad+"'>"+local.nombre_local+"</option>";
            });
            $(".cmb_localidad").html(salida);
            //$("#salida").listview();
        }
    });
}
;

