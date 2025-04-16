const app = Vue.createApp({
    data() {
        return {
            usuario: JSON.parse(localStorage.getItem('usuario')) || { 
                nome: 'Usuário', 
                email: 'exemplo@email.com', 
                dataCadastro: 'N/A' 
            }
        };
    }
});

app.mount('#app');