function nomeJogador() {
  var nomeResp = document.querySelector(".nome").value
  document.querySelector(".nomeJogador").innerHTML = "Olá " + nomeResp + " seja bem-vid@"
  document.getElementById("header").style.display = "none"
  document.getElementById("container").style.display = "initial"
}
function setupResposta(numeroPergunta,menssagemAlert) {
  if (numeroPergunta == 1) 
    document.querySelector(".menssagem1").innerHTML = ""
  else
    if (numeroPergunta == 2)
      document.querySelector(".menssagem2").innerHTML = ""
    else
      document.querySelector(".menssagem3").innerHTML = ""
  window.alert(menssagemAlert)
}
function verificarResposta(numeroPergunta) {
  // var opcao = parseInt(numeroPregunta)
  console.log(typeof opcao)
  if (numeroPergunta == 1) {
    //console.log(typeof respostaPergunta1)
    //Pega o valor chekeado no gruipo de opçaoes do radios button
    var respostaPergunta1 = document.querySelector("input[name=grupo1]:checked").value
    if (respostaPergunta1 == "true")
      document.querySelector(".menssagem1").innerHTML = "Parabéns, você acertou"
    else
      document.querySelector(".menssagem1").innerHTML = "Resposta errada, tente novamente"
  }
  else
    if(numeroPergunta==2){
    var respostaPergunta2 = document.querySelector("input[name=grupo2]:checked").value
    if (respostaPergunta2 == "true")
      document.querySelector(".menssagem2").innerHTML = "Parabéns, você acertou"
    else
      document.querySelector(".menssagem2").innerHTML = "Resposta errada, tente novamente"
    }
    else{
    var respostaPergunta2 = document.querySelector("input[name=grupo3]:checked").value
    if (respostaPergunta2 == "true")
      document.querySelector(".menssagem3").innerHTML = "Parabéns, você é muito realista"
    else
      document.querySelector(".menssagem3").innerHTML = "Ainda é muito cedo para saber"
    }
}