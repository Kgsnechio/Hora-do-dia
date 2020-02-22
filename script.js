function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var texto = document.getElementById('conteudotxt')
    var foto = document.getElementById('imagem')

    if(hora > 5 && hora < 13){
        texto.innerHTML = `<p>Agora são ${hora} horas. <br>Bom dia!</p>`
        foto.innerHTML = `<img src='manhã.png' alt='manhã' width='300px' height='300px'></img>`
        document.body.style.background = '#fbff55'
    }else if(hora < 18 && hora >= 13){
        texto.innerHTML = `<p>Agora são ${hora} horas. <br>Boa tarde!</p>`
        foto.innerHTML = `<img src='tarde.png' alt='tarde' width='300px' height='300px'></img>`
        document.body.style.background = '#23d0f5'
    }else{
        texto.innerHTML = `<p>Agora são ${hora} horas. <br>Boa noite!</p>`
        foto.innerHTML = `<img src='noite.png' alt='noite' width='300px' height='300px'></img>`
        document.body.style.background = '#000066'
    }
}