$(document).ready(function(){
    $(".button").click(function(){
        
        //** Verificar del boton utilizado para agregar articulos a comprar */
        var eval = $(this).attr('name');

        switch(eval){
            case "tomatemas":
                var valor = $("#tomates").val();
                var precio = parseFloat($("#tomatevalor").attr("value"));
                valor = parseInt(valor) + 1;
                var newPrecio = precio * valor; 
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                $("#tomates").val(valor);
                $("#tomatetotal").text(total);
            
                break;
            case "tomatemenos":
                var valor = $("#tomates").val();
                var precio = parseFloat($("#tomatevalor").attr("value"));
                valor = parseInt(valor) - 1;
                var newPrecio = precio * valor;
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                
                if(valor < 0){
                    $("#tomates").val(0);
                    $("#tomatetotal").text("$0.00");
                   
                } else {
                    $("#tomates").val(valor);
                    $("#tomatetotal").text(total);
                }
                
                break;

            case "zanahoriamas":
                var valor = $("#zanahoria").val();
                var precio = parseFloat($("#zanahoriavalor").attr("value"));
                valor = parseInt(valor) + 1;
                var newPrecio = precio * valor; 
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                $("#zanahoria").val(valor);
                $("#zanahoriatotal").text(total);
            
                break;
            case "zanahoriamenos":
                var valor = $("#zanahoria").val();
                var precio = parseFloat($("#zanahoriavalor").attr("value"));
                valor = parseInt(valor) - 1;
                var newPrecio = precio * valor;
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                
                if(valor < 0){
                    $("#zanahoria").val(0);
                    $("#zanahoriatotal").text("$0.00");
                    
                } else {
                    $("#zanahoria").val(valor);
                    $("#zanahoriatotal").text(total);
                }
                
                break;

            case "cebollamas":
                var valor = $("#cebolla").val();
                var precio = parseFloat($("#cebollavalor").attr("value"));
                valor = parseInt(valor) + 1;
                var newPrecio = precio * valor; 
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                $("#cebolla").val(valor);
                $("#cebollatotal").text(total);
            
                break;
            case "cebollamenos":
                var valor = $("#cebolla").val();
                var precio = parseFloat($("#cebollavalor").attr("value"));
                valor = parseInt(valor) - 1;
                var newPrecio = precio * valor;
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                
                if(valor < 0){
                    $("#cebolla").val(0);
                    $("#cebollatotal").text("$0.00");
                    
                } else {
                    $("#cebolla").val(valor);
                    $("#cebollatotal").text(total);
                }
                
                break;

            case "chilemas":
                var valor = $("#chile").val();
                var precio = parseFloat($("#chilevalor").attr("value"));
                valor = parseInt(valor) + 1;
                var newPrecio = precio * valor; 
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                $("#chile").val(valor);
                $("#chiletotal").text(total);
            
                break;
            case "chilemenos":
                var valor = $("#chile").val();
                var precio = parseFloat($("#chilevalor").attr("value"));
                valor = parseInt(valor) - 1;
                var newPrecio = precio * valor;
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                
                if(valor < 0){
                    $("#chile").val(0);
                    $("#chiletotal").text("$0.00");
                    
                } else {
                    $("#chile").val(valor);
                    $("#chiletotal").text(total);
                }
                
                break;
                        
            case "abonomas":
                var valor = $("#abono").val();
                var precio = parseFloat($("#abonovalor").attr("value"));
                valor = parseInt(valor) + 1;
                var newPrecio = precio * valor; 
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                $("#abono").val(valor);
                $("#abonototal").text(total);
            
                break;

            case "abonomenos":
                var valor = $("#abono").val();
                var precio = parseFloat($("#abonovalor").attr("value"));
                valor = parseInt(valor) - 1;
                var newPrecio = precio * valor;
                var total = "$" + parseFloat(newPrecio).toFixed(2);
                
                if(valor < 0){
                    $("#abono").val(0);
                    $("#abonototal").text("$0.00");
                    
                } else {
                    $("#abono").val(valor);
                    $("#abonototal").text(total);
                }
                
                break;
        }
        
        /** Agregar subtotal */

        var item1 = parseFloat($("#tomatetotal").text().replace("$",""));
        var item2 = parseFloat($("#zanahoriatotal").text().replace("$",""));
        var item3 = parseFloat($("#cebollatotal").text().replace("$",""));
        var item4 = parseFloat($("#chiletotal").text().replace("$",""));
        var item5 = parseFloat($("#abonototal").text().replace("$",""));

        var totalglobal = item1 + item2 + item3 + item4 + item5

        $("#subtotal").text("$" + parseFloat(totalglobal).toFixed(2));

    }); 

    /** Reiniciar Compra */

    $('#reset').click(function(){
        $("#tomates").val(0);
        $("#zanahoria").val(0);
        $("#cebolla").val(0);
        $("#chile").val(0);
        $("#abono").val(0);

        $("#tomatetotal").text("$0.00");
        $("#zanahoriatotal").text("$0.00");
        $("#cebollatotal").text("$0.00");
        $("#chiletotal").text("$0.00");
        $("#abonototal").text("$0.00");

        $("#subtotal").text("$0.00");
    });

    /** Procesar Pago */

    $("#process").click(function(){
        // var item1 = $("#tomates").val();
        // var item2 = $("#zanahoria").val();
        // var item3 = $("#cebolla").val();
        // var item4 = $("#chile").val();
        // var item5 = $("#abono").val();

        // var request = {
        //     url: 'cart.php',
        //     crossDomain: true,
        //     type: 'POST',
        //     dataType: 'jsonp',
        //     data: {
        //         tomate: item1,
        //         zanahoria: item2,
        //         cebolla: item3,
        //         chile: item4,
        //         abono: item5
        //     },
        //     success: console.log("data")
        // }

        // $.ajax(request);

        window.location.href="payment.html"
    });

 });