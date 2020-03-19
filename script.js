const visor = document.querySelector('#visor')
const botoes = document.querySelector('#botoes')

const btn_value = ['ac','+/-','%','&divide;','7','8','9','&times;','4','5','6','&minus;','1','2','3','&plus;','0',',','=']

btn_value.map(value=>{
    const btn = document.createElement('button')
    btn.innerHTML = value
    btn.classList = 'botao'
    
    if(value=='0')
        btn.classList = btn.classList + '-largo'

    botoes.appendChild(btn)
})