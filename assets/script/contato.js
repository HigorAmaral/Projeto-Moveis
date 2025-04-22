
function enviarFormulario(event) {
    event.preventDefault(); 
    const notificacao = document.getElementById('notificacao');
    notificacao.style.display = 'block'; 

    
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 2000); 
}