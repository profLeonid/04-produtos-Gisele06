"use strict"

function adicionarProduto(){

const produto = document.getElementById('produto').value
const codigo = document.getElementById('codigo').value
const quantidade = document.getElementById('quantidade').value

const lista = document.getElementById('lista')

const linha = document.createElement('tr')

const colunaProduto = document.createElement('td')
const colunaCodigo = document.createElement('td')
const colunaQuantidade = document.createElement('td')

colunaProduto.textContent = produto
colunaCodigo.textContent = codigo
colunaQuantidade.textContent = quantidade

colunaProduto.className = "border px-4 py-2"
colunaCodigo.className = "border px-4 py-2"
colunaQuantidade.className = "border px-4 py-2"

linha.appendChild(colunaProduto)
linha.appendChild(colunaCodigo)
linha.appendChild(colunaQuantidade)

lista.appendChild(linha)
limparCampos()

}

function limparCampos(){
    document.getElementById('lista').value = ''
    document.getElementById('produto').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('codigo').value = ''

}






