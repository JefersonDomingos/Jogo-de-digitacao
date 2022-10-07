var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras);
    console.log(numPalavras);

}

function inicializaContadores(){
    campo.on("input", () => {
        var conteudoCampo = campo.val(); 
        var qtdPalavras = conteudoCampo.split(/\S+/).length -1 ;
        console.log(qtdPalavras);
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudoCampo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    
    });
};

function inicializaCronometro(){
    
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", () => {
        var nomeJogador = $("#nome_usuario").val();
        if(nomeJogador !== ""){
            var idCronometro = setInterval(function (){
                $("#nome_usuario").attr("disabled", true);
                $("#botao-reiniciar").attr("disabled",true);
                tempoRestante--;
                $("#tempo-digitacao").text(tempoRestante);
                
                    if(tempoRestante < 1){
                    clearInterval(idCronometro);
                    finalizaJogo();
                    }
            
            },1000);
        }
        else{
            return inicializaCronometro();
        }
        }
        
    );
};

function inicializaMarcadores() {

    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var textoComparavel = frase.substr(0, digitado.length);
        if(digitado === textoComparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }
        else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function finalizaJogo(){
   $("#botao-reiniciar").attr("disabled", false);
    campo.addClass("campo-desabilitado");
    campo.attr("disabled",true);
    inserePlacar();
}

function reiniciaJogo(){
    $("#nome_usuario").attr("disabled", false);
    $("#nome_usuario").val("");
    $("#nome_usuario").focus();
    campo.val("");
    campo.attr("disabled", false);
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.removeClass("campo-desabilitado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}

    
