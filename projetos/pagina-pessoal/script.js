let fotoPerfil = document.getElementById('fotoPerfil');

fotoPerfil.addEventListener('mouseover', function(){
    fotoPerfil.setAttribute('src', 'imagem/nina-solon.jpg');
    fotoPerfil.classList.add('foto-nina');
})

fotoPerfil.addEventListener('mouseout', function(){
    fotoPerfil.setAttribute('src', 'imagem/retrato10.jpg');
    fotoPerfil.classList.remove('foto-nina');
})

