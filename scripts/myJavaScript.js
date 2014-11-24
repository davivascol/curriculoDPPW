
$(function() {
  // Handler for .ready() called.

	$.ajax({
	  url: "http://rarolabs.com.br:88/alunos.json",
	  success: function( data ) {

  		var objHTML = "";
			    
		$.map( data, function( objCurriculo, i ) {
			
			 objHTML += "<tr><td class=\"tdLeft\" ><a href='" + objCurriculo.link_github + "'>" + objCurriculo.nome + 
			 "</a></td><td class=\"tdright\">" + objCurriculo.mini_curriculo + "</td></tr>" ;
		});

		$("#tbody").append(objHTML);
	    
	  },
	  error: function(ERRO) {

	  	alert("error na requisição");
	  }
	});

});



