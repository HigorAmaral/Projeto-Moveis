const app = Vue.createApp({
    data() {
        return {
            tela: 'login', 
            login: {
                email: '',
                senha: ''
            },
            cadastro: {
                nome: '',
                email: '',
                senha: ''
            },
            usuarios: [] 
        };
    },
    methods: {
        verificarLogin() {
            const usuario = this.usuarios.find(user => user.email === this.login.email && user.senha === this.login.senha);
            if (usuario) {
                alert(`Bem-vindo, ${usuario.nome}!`);
                localStorage.setItem('usuario', JSON.stringify(usuario));
                window.location.href = 'index.html';
            } else {
                alert('E-mail ou senha incorretos.');
            }
        },
        cadastrarUsuario() {
            const usuarioExistente = this.usuarios.find(user => user.email === this.cadastro.email);
            if (usuarioExistente) {
                alert('E-mail já cadastrado.');
            } else {
                this.usuarios.push({ ...this.cadastro });
                alert('Cadastro realizado com sucesso!');
                this.tela = 'login';
            }
        }
    }
});

app.mount('#app');