"use strict"

function adicionarProduto(){
   
    const produto= document.getElementById('produto')
    const lista = document.getElementById('lista')

    const span = document.createElement('span') 
    span.textContent = produto.value
  
    
    if(produto.value == ""){
        return false
    }else{
    span.className = "px-8 py-2"
    lista.appendChild(span)
    limparCampo()
    }

}
function limparCampo(){
    document.getElementById('produto').value = ""
}
