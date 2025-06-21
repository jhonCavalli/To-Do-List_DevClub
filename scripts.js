/*
lista de tarefa 
[x] saber quando o botão foi clicado
[] pega o texto do input
[] colocar esse exto na tela
[] deletar a tarefa na tela 
 */

function adicionarTarefa(){
   let valorDoInput = document.querySelector("input").value

   let li = document.createElement("li");
   li.innerHTML = valorDoInput + "<span>X</span>";  

   document.querySelector("ul").appendChild(li);
   valorDoInput = ""; // Limpa o input após adicionar a tarefa
    
}