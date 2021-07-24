
let msg = document.getElementById('msg')
const gerarBtn = document.querySelector('.gerar-btn')
let divDialog = document.getElementById('dialog')
let ClientInfos = new Object


function clear(){
    ClientInfos.nick = ''
    ClientInfos.gender = null

    document.querySelector('#nick').value = ''
    document.querySelector('.gender[name="gender"]:checked').checked = false
}



gerarBtn.addEventListener('click', function(ClientInfos){
    let nick = document.querySelector('#nick').value
    let gender = document.querySelector('.gender[name="gender"]:checked').value
       
    updateInfos(nick, gender)
    phraseGenerate(ClientInfos)

    function updateInfos(nick, gender){
        
        ClientInfos.nick = nick
        ClientInfos.gender = gender
        console.log(ClientInfos)
    }
    
    
    
    function randomNumber(){
        let i = Math.floor(Math.random()*3)
        return i
    }
    
    function phraseGenerate(ClientInfos){
    
        let malePhrase = [
            `Feliz aniversário, ${ClientInfos.nick}! Seu corno!`,
            `Parabéns meu amigo, ${ClientInfos.nick}! Tudo de bom para você!`,
            `A quanto tempos não nos vemos mano, ${ClientInfos.nick}! Espero que seu dia seja grandioso!`
        ]
        
    
        let femalePhrase = [
            `Feliz aniversário, ${ClientInfos.nick}! Sua corna!`,
            `Parabéns minha amiga, ${ClientInfos.nick}! Tudo de bom para você!`,
            `A quanto tempos não nos vemos mana, ${ClientInfos.nick}! Espero que seu dia seja grandioso!`
        ]
        
        phrase = selectPhrase(ClientInfos)



        function selectPhrase(){
            

            let phraseToShow = null

            if(ClientInfos.gender === 'masculino'){
                phraseToShow = randomNumber()
                console.log(malePhrase[phraseToShow])
                
                return malePhrase[phraseToShow]
                
                //confirm(malePhrase[phraseToShow])
                
            } else{
                phraseToShow = randomNumber()
                console.log(femalePhrase[phraseToShow])
                //confirm(femalePhrase[phraseToShow])

                return femalePhrase[phraseToShow]
            }
        }

        showPhrase(phrase)

        function showPhrase(phrase){
            document.getElementById('dialog').removeAttribute('style')
            msg.textContent = phrase
        }
        
    }   

})

let accBtn = document.querySelector('.accept')
let closeBtn = document.querySelector('.close')

accBtn.addEventListener('click', function(){
    document.getElementById('dialog').setAttribute('style', 'display: none;')
    clear()
})

closeBtn.addEventListener('click', function(){
    document.getElementById('dialog').setAttribute('style', 'display: none;')
    clear()
})
