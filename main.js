"use strict"

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')

    const span = document.createElement('span') 
    span.textContent = produto.value
    span.className = "px-8 py-2 bg-green-200"

    lista.appendChild(span)
}
