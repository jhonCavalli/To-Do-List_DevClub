/*
lista de tarefa 
[x] saber quando o botão foi clicado
[x] pega o texto do input
[x] colocar esse exto na tela
[x] deletar a tarefa na tela (quando clicar no X)
 */

function adicionarTarefa() {
    let valorDoInput = document.querySelector("input").value

let li = document.createElement('li');
li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/></svg></span>';

    document.querySelector('ul').appendChild(li);
   document.querySelector("input").value = ''; // Limpa o input após adicionar a tarefa

}

function deletarTarefa(li){
   li.parentElement.remove();

}

