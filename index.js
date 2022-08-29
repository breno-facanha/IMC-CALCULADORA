 var nomeUsuario = window.prompt('Qual seu nome ?');
 document.getElementsByTagName('div')[1].innerText = nomeUsuario;



function clicar(){
    var pesoUsuario = document.getElementById('peso').value;
    var alturaUsuario = document.getElementById('altura').value;
    var resultado = parseFloat(pesoUsuario) / parseFloat(alturaUsuario ** 2);
   // var pesoUsuarioIdeal = (alturaUsuario * alturaUsuario) * 24
   // console.log(pesoUsuarioIdeal);

    if (resultado <= 18.5){
            document.getElementById("resultado").innerHTML = 'Seu IMC é de ' + resultado.toFixed(1) + ' abaixo do peso'  ;
            document.getElementById("abaixoDoPeso").style.backgroundColor = "red";
            document.getElementById("pesoIdeal").style.backgroundColor = "#007db8"; 
            document.getElementById("levementeAcimaDoPeso").style.backgroundColor = "#007db8";
            document.getElementById("obesidadeGrauI").style.backgroundColor = "#007db8"; 
        }else if (resultado >= 18.51 && resultado <= 24.9){
            document.getElementById("resultado").innerHTML = 'Seu IMC é de ' + resultado.toFixed(1) + ' peso ideal' ;
            document.getElementById("abaixoDoPeso").style.backgroundColor = "#007db8";
            document.getElementById("pesoIdeal").style.backgroundColor = "green"; 
            document.getElementById("levementeAcimaDoPeso").style.backgroundColor = "#007db8";
            document.getElementById("obesidadeGrauI").style.backgroundColor = "#007db8"; 
        }else if (resultado > 25 && resultado <= 29.9){
            document.getElementById("resultado").innerHTML = 'Seu IMC é de ' + resultado.toFixed(1) + ' levemente acima do peso' ;
            document.getElementById("abaixoDoPeso").style.backgroundColor = "#007db8";
            document.getElementById("pesoIdeal").style.backgroundColor = "#007db8"; 
            document.getElementById("levementeAcimaDoPeso").style.backgroundColor = "red";
            document.getElementById("obesidadeGrauI").style.backgroundColor = "#007db8"; 
        }else{
            document.getElementById("resultado").innerHTML = 'Seu IMC é de ' + resultado.toFixed(1) + ' obesidade' ;
            document.getElementById("abaixoDoPeso").style.backgroundColor = "#007db8";
            document.getElementById("pesoIdeal").style.backgroundColor = "#007db8"; 
            document.getElementById("levementeAcimaDoPeso").style.backgroundColor = "#007db8";
            document.getElementById("obesidadeGrauI").style.backgroundColor = "red"; 
    }
  
}
