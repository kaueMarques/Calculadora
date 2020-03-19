const visor = document.querySelector('#visor')
const botoes = document.querySelector('#botoes')
const calculadora = document.querySelector('#calculadora')

const btn_value = ['ac','+/-','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','0',',','=']

btn_value.map(value=>{
    const btn = document.createElement('button')
    btn.innerHTML = value
    btn.classList = 'botao'
    
    if(value=='0')
        btn.classList = btn.classList + '-largo'
    if(value=='ac'|value=='+/-'|value=='%')
        btn.classList = btn.classList + '-cinza'
    if(value=='÷'|value=='×'|value=='−'|value=='+'|value=='=')
        btn.classList = btn.classList + '-laranja'
    
    if(value == '=')
        btn.type = 'submit'
    else if(value == 'ac')
        btn.addEventListener('click', btn=>{
            btn.preventDefault()
            visor.innerHTML = ''
        })
    else
        btn.addEventListener('click', btn=>{
            btn.preventDefault()
            visor.innerHTML = visor.innerHTML + value
        })
        
    botoes.appendChild(btn)
})

calculadora.addEventListener('submit',form=>{
    form.preventDefault()
    
    visor.innerHTML = calcular(visor.value)
})

function calcular(query){
    query = query.replace('÷','/')
    query = query.replace('×','*')
    query = query.replace('−','-')
    query = query.replace('+','+')

    try {
        var resposta = eval(query)
    } catch (error) {
        var resposta = 'Error'
    }
    return resposta
}
