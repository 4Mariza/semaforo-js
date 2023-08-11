'use strict'

const sinal_vermelho = document.getElementById('sinal_vermelho')
const sinal_amarelo = document.getElementById('sinal_amarelo')
const sinal_verde = document.getElementById('sinal_verde')

///////////////////////////////MANUAL///////////////////////////

sinal_vermelho.addEventListener('click', mudarParaVermelho)
sinal_amarelo.addEventListener('click', mudarParaAmarelo)
sinal_verde.addEventListener('click', mudarParaVerde)

function mudarParaVermelho(){
    sinal_vermelho.classList.toggle('vermelho')
    sinal_amarelo.classList('desligar')
    sinal_verde.classList('desligar')
}

function mudarParaAmarelo(){
    sinal_amarelo.classList.toggle('amarelo')
    sinal_vermelho.classList('desligar')
    sinal_verde.classList('desligar')
}

function mudarParaVerde (){
    sinal_verde.classList.toggle('verde')
    sinal_amarelo.classList('desligar')
    sinal_vermelho.classList('desligar')
}