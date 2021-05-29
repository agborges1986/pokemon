function add_pk(ctdad_pk){
    var ctdad=ctdad_pk;
    var html_add="";
    
    for (let index = 1; index <= ctdad; index++) {
        html_add+='<img class="shadow m-2 bg-white rounded" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+index+'.png"></img>'
    }
        return html_add;
}

$(document).ready(function () {
    $(".box-pokemon").html(add_pk(151));

    $('.btn').click(function () { 
        $(".box-pokemon").html(add_pk($('.ctdad').val()));
    });
});