"use strict"



function adicionarProduto(){
    
    const produto= document.getElementById('produto')
    const lista = document.getElementById('lista')

    const spanProduto = document.createElement('span') 
    spanProduto.textContent = produto.value
    span.className = "px-8 py-2"

    const codigo = document.getElementById('codigo')

    const spanCodigo = document.createElement('span')
    spanCodigo.textContent = codigo.value
    span.className = "px-8 py-2"

    const quantidade = document.getElementById('codigo')

    const spanQuantidade = document.createElement('span')
    spanQuantidade.textContent = quantidade.value
    span.className = "px-8 py-2"

    lista.appendChild(spanProduto)
    lista.appendChild(spanCodigo)
    lista.appendChild(spanQuantidade)

}

// function validarCampos(){
//     if(produto.value == "" || codigo.value == ""|| quantidade.value == ""){
//         console.log("arroz com batatinha")
//     }
// }