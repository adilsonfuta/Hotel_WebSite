
const botao=document.querySelector('#btn_enviar');
botao.addEventListener('click',Mostrar);

function Mostrar(){

    let nome=document.querySelector('#nome').value;
    let email=document.querySelector('#email').value;

     if(nome=='' && email==''){
         alert(" Por favor queira Preencher os Campos ");
     }
     else{
        alert(" Obrigado por Enviar a sua mensagem "+nome);

     }
 


}
