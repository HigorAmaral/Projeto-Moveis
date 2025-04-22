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
            if (confirm('Tem certeza de que deseja finalizar a compra?')) {
                alert('Compra finalizada com sucesso!');
                this.carrinho = []; 
            }
        },
        aplicarDesconto() {
            const cupom = document.getElementById('cupom').value;
            if (cupom === 'DESCONTO10') {
                this.totalCarrinho *= 0.9; 
                alert('Cupom aplicado com sucesso!');
            } else {
                alert('Cupom inválido.');
            }
        }
    }
});

app.mount('#app');