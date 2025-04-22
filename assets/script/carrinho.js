const app = Vue.createApp({
    data() {
        return {
            carrinho: JSON.parse(localStorage.getItem('carrinho')) || [],
            desconto: 0 // Armazena o valor do desconto aplicado
        };
    },
    computed: {
        totalCarrinho() {
            return this.carrinho.reduce((total, item) => total + (item.quantidade * item.preco), 0);
        },
        totalComDesconto() {
            return this.totalCarrinho - this.desconto; // Aplica o desconto ao total
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
                this.desconto = 0; // Reseta o desconto após finalizar a compra
                this.atualizarCarrinho();
            }
        },
        aplicarDesconto() {
            const cupom = document.getElementById('cupom').value;
            if (cupom === 'DESCONTO10') {
                this.desconto = this.totalCarrinho * 0.1; // Aplica 10% de desconto
                alert('Cupom aplicado com sucesso! Você recebeu 10% de desconto.');
            } else {
                alert('Cupom inválido.');
                this.desconto = 0; // Garante que o desconto seja zerado se o cupom for inválido
            }
        }
    }
});

app.mount('#app');