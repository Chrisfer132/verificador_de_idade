function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Masculino"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './img/bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './img/jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', './img/adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', './img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './img/bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './img/jovem-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', './img/adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', './img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}