const app = Vue.createApp({
    data() {
        const usuarioLocal = JSON.parse(localStorage.getItem('usuario')) || {};
        return {
            usuario: {
                nome: usuarioLocal.nome || 'Usuário',
                email: usuarioLocal.email || 'exemplo@email.com',
                dataCadastro: usuarioLocal.dataCadastro || new Date().toLocaleDateString(),
                endereco: usuarioLocal.endereco || '',
                cidade: usuarioLocal.cidade || '',
                estado: usuarioLocal.estado || '',
                cep: usuarioLocal.cep || ''
            },
            editarEndereco: false
        };
    },
    methods: {
        salvarEndereco() {
            alert("Endereço atualizado com sucesso!");
            localStorage.setItem("usuario", JSON.stringify(this.usuario));
            this.editarEndereco = false;
        }
    }
});

app.mount('#app');