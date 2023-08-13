'use strict'

const vermelho = document.getElementById('sinal_vermelho')
const amarelo = document.getElementById('sinal_amarelo')
const verde = document.getElementById('sinal_verde')
const botaoAutomatico = document.getElementById('botao')
const botaoCancelar = document.getElementById('botao2')

///////////////////////////////MANUAL///////////////////////////

vermelho.addEventListener('click', ligarVermelho)
amarelo.addEventListener('click', ligarAmarelo)
verde.addEventListener('click', ligarVerde)

function ligarVermelho(){
    vermelho.classList.add('ligar')
    verde.classList.remove('ligar')
    amarelo.classList.remove('ligar')
}

function ligarAmarelo(){
    vermelho.classList.remove('ligar')
    verde.classList.remove('ligar')
    amarelo.classList.add('ligar')
}

function ligarVerde (){
    vermelho.classList.remove('ligar')
    amarelo.classList.remove('ligar')
    verde.classList.add('ligar')
}

//////////////////////////////AUTOMÁTICO/////////////////////////////////

botaoAutomatico.addEventListener('click', trocarCores)
botaoCancelar.addEventListener('click', pararAutomatico)

function trocarCores(){
    setInterval(()=>{
        if(vermelho.classList.contains('ligar') ){
            vermelho.classList.remove('ligar')
            verde.classList.add('ligar')
            amarelo.classList.remove('ligar')
        } else if(amarelo.classList.contains('ligar')){
            amarelo.classList.remove('ligar')
            vermelho.classList.add('ligar')
        } else{
            verde.classList.remove('ligar')
            amarelo.classList.add('ligar')
        }
    },1500)   
}

function pararAutomatico(){
    location.reload()
}