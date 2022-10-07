
function inserePlacar(){
    var nomeUsuario = $("#nome_usuario").val(); 
    var corpoTabela = $(".placar").find("table");
    var usuario = nomeUsuario;
    var numPalavras = $("#contador-palavras").text();
    
    var linha = criarLinhaTabela(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha)
    corpoTabela.prepend(linha);
}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
}

function criarLinhaTabela(usuario,palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    
    var botaoLink = $("<a>").addClass("botao-remover").attr("href", "#");
    var botaoIcone = $("<i>").addClass("small").addClass("material-icons").text("delete");
    
    botaoLink.append(botaoIcone);

    colunaRemover.append(botaoLink);
    
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    
    return linha;
}