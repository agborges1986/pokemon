function add_pk(ctdad_pk){
    var ctdad=ctdad_pk;
    var html_add="";
    
    for (let index = 1; index <= ctdad; index++) {
        html_add+='<img class="shadow m-2 bg-white rounded" id='+index+' src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+index+'.png"></img>'
    }
        return html_add;
}
function poke_info(params) {
    html_card="";
        var i=$(params).attr('id');
        /* console.log(i); */
        $.get('https://pokeapi.co/api/v2/pokemon/'+i+'/', function(res) {
            $('.pokemon_info').empty()
            $('.pokemon_info').append('<h1>'+res.name+'</h1>');
            $('.pokemon_info').append('<img class="shadow m-2 bg-white rounded" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png"></img>');
            $('.pokemon_info').append('<p>Tipos</p>');
            for (let index = 0; index < res.types.length; index++) {
                $('.pokemon_info').append(`<ul><li>${res.types[index].type.name}</li></ul>`)
            }
            $('.pokemon_info').append('<h4>Height</h4>');
            $('.pokemon_info').append(`<p>${res.height}</p>`);
            $('.pokemon_info').append('<h4>Weight</h4>');
            $('.pokemon_info').append(`<p>${res.weight}</p>`);
        }, "json");    
}

$(document).ready(function () {
    $(".box-pokemon").html(add_pk(151));
    html_card="";
        var i=$(this).attr('1');
        console.log(i);
        $.get('https://pokeapi.co/api/v2/pokemon/'+1+'/', function(res) {
            $('.pokemon_info').empty()
            $('.pokemon_info').append('<h1>'+res.name+'</h1>');
            $('.pokemon_info').append('<img class="shadow m-2 bg-white rounded" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+1+'.png"></img>');
            $('.pokemon_info').append('<h4>Tipos:</h4>');
            for (let index = 0; index < res.types.length; index++) {
                $('.pokemon_info').append(`<ul><li>${res.types[index].type.name}</li></ul>`)
            }
            $('.pokemon_info').append('<h4>Height</h4>');
            $('.pokemon_info').append(`<p>${res.height}</p>`);
            $('.pokemon_info').append('<h4>Weight</h4>');
            $('.pokemon_info').append(`<p>${res.weight}</p>`);
        }, "json");   

    $('.btn').click(function () { 
        $(".box-pokemon").html(add_pk($('.ctdad').val()));
    });
    
    $('img').click(function () {
        poke_info(this);
    });
    $(document).on('click', 'img', function(){
        poke_info(this);
    });
});