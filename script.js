function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos} horas !`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manhã2.png'
        document.body.style.background='#F3CC9E'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'img/tarde2.png'
        document.body.style.background='#E59177'
    }else{
        //boa noite
        img.src = 'img/noite2.png'
        document.body.style.background='#303030'
    }
}

