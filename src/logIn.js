let entrar = document.getElementById('botonEntrar')
//Al momento de dar click en el botón entrar se ejecuta la función
entrar.addEventListener('click', () =>{
    usuario= document.getElementById('inputP1').value
    contraseña= document.getElementById('inputP2').value
    audio = document.getElementById('login')
    bcs = document.getElementById('login')
    console.log(usuario,contraseña)
//Y se redirige a las Listas de Proósitos 2022    
    if(usuario=="JazitoAir" && contraseña=="123") {
        window.location.href = "./listas.html"
       
//Si no es el "id" y la "contraseña" reproducirá un audio y se mostrara el video de error        
    } else {    
        audio.innerHTML = `
        <audio autoplay><source src="../assets/audio/palabramagica.mp3" type="video/mp4"></audio>
        <div id="alertD">
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </symbol>
      </svg>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          CONTRASEÑA Y/O ID INCORRECTOS, VUELVE A INTENTAR
        </div>
      </div>
            `
        console.log(error)
    }
})