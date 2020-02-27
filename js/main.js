
// CASO 1: USANDO O BOTÃO E UMA FUNCÃO TUDO FUNCIONA MUITO BEM

const botao=document.querySelector('#btn_enviar');
const mensagemSaida=document.querySelector('.mensagemSistema');

botao.addEventListener('click',Mostrar);

function Mostrar(){
    
    let nome=document.querySelector('#nome').value;
    let email=document.querySelector('#email').value;
    
   
    
    if(nome=='' && email==''){
        
        document.querySelector('.mensagemSistema').classList.add('InSucesso');
        mensagemSaida.innerText="Por favor Preencher os Campos";
        setTimeout( ()=>mensagemSaida.remove(),3000 );
    }
    else{
        document.querySelector('.mensagemSistema').classList.add('Sucesso');
        mensagemSaida.innerText="Obrigado por Enviar a sua mensagem "+nome;
        setTimeout( ()=> mensagemSaida.remove(), 8000 );
    }
 
}  

/*

// CASO 2: USANDO O FORM E FUNCIONA ANONIMA

const formulario=document.querySelector('#contact-form');
const mensagemSaida=document.querySelector('.mensagemSistema');

formulario.addEventListener('submit', enviarSMS_Submit);

function enviarSMS_Submit(){
    let nome=document.querySelector('#nome').value;
    let email=document.querySelector('#email').value;
    
    
    if(nome=='' && email==''){
        
        mensagemSaida.classList.add('InSucesso');
        mensagemSaida.innerText="Por favor Preencher os Campos";
        setTimeout( ()=>mensagemSaida.remove(),3000 );
    }
    else{
        mensagemSaida.classList.add('Sucesso');
        mensagemSaida.innerText="Obrigado por Enviar a sua mensagem "+nome;
        setTimeout( ()=>mensagemSaida.remove(),3000 );        
    }
}

*/