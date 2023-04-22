 const titulo = document.querySelector('.digitando');

 function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    arrTexto.forEach((Letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += Letra;
        }, 120 * i)
    })
 }

 ativaLetra(titulo)

 function sobreMim(){
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li');
    
    const education = document.querySelectorAll('.education_content div');
    const botaoEducation = document.querySelectorAll('.education_content ul li')


    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    education[0].classList.add('ativo')
    botaoEducation[0].classList.add('ativo')

    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }

    function slideShow2(index){
        education.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botaoEducation.forEach((item)=>{
            item.classList.remove('ativo')
        });
        education[index].classList.add('ativo')
        botaoEducation[index].classList.add('ativo')
    }


    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    botaoEducation.forEach((div, index)=>{
        div.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })
}
sobreMim();