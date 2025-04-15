const app = Vue.createApp({
    data() {
        return {
            carrinho: JSON.parse(localStorage.getItem('carrinho')) || [] 
        };
    },
    computed: {
        totalCarrinho() {
            return this.carrinho.reduce((total, item) => total + (item.quantidade * item.preco), 0);
        }
    },
    methods: {
        removerDoCarrinho(index) {
            this.carrinho.splice(index, 1);
            this.atualizarCarrinho();
        },
        atualizarCarrinho() {
            localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
        },
        finalizarCompra() {
            alert('Compra finalizada com sucesso!');
            this.carrinho = [];
            this.atualizarCarrinho();
        }
    }
});

app.mount('#app');