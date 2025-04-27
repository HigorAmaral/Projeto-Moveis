const app = Vue.createApp({
    data() {
        return {
            mostrarCarrinho: false,
            carrinho: [],
            produtos: [
                { 
                    nome: 'Scooby-Doo', 
                    descricao: 'O famoso cão detetive que adora biscoitos Scooby.', 
                    preco: 49.90,
                    estoque: 10, 
                    imagemPadrao: 'assets/imagens/scob-1.png',
                    imagemHover: 'assets/imagens/scob-2.png',
                    imagemAtual: 'assets/imagens/scob-2.png'
                },
                { 
                    nome: 'Salsicha', 
                    descricao: 'O melhor amigo de Scooby, sempre com fome e medroso.', 
                    preco: 59.90,
                    estoque: 10, 
                    imagemPadrao: 'assets/imagens/sal-1.png',
                    imagemHover: 'assets/imagens/sal-2.png',
                    imagemAtual: 'assets/imagens/sal-2.png'
                },
                { 
                    nome: 'Fred', 
                    descricao: 'O líder da turma, conhecido por suas armadilhas engenhosas.', 
                    preco: 69.90,
                    estoque: 10, 
                    imagemPadrao: 'assets/imagens/fred-1.jpg',
                    imagemHover: 'assets/imagens/fred-2.jpg',
                    imagemAtual: 'assets/imagens/fred-2.jpg'
                },
                { 
                    nome: 'Velma', 
                    descricao: 'A mente brilhante da equipe, sempre resolvendo mistérios.', 
                    preco: 79.90,
                    estoque: 10, 
                    imagemPadrao: 'assets/imagens/velma-1.jpg',
                    imagemHover: 'assets/imagens/velma-2.jpg',
                    imagemAtual: 'assets/imagens/velma-2.jpg'
                },
                { 
                    nome: 'Daphne', 
                    descricao: 'A elegante e corajosa integrante da equipe Mistério S/A.', 
                    preco: 69.90,
                    estoque: 10, 
                    imagemPadrao: 'assets/imagens/daph-1.jpg',
                    imagemHover: 'assets/imagens/daph-2.jpg',
                    imagemAtual: 'assets/imagens/daph-2.jpg'
                },
                { 
                    nome: 'Scrappy-Doo', 
                    descricao: 'O pequeno e corajoso sobrinho de Scooby-Doo.', 
                    preco: 39.90,
                    estoque: 8, 
                    imagemPadrao: 'assets/imagens/scro-1.jpg',
                    imagemHover: 'assets/imagens/scro-2.jpg',
                    imagemAtual: 'assets/imagens/scro-2.jpg'
                },
                { 
                    nome: 'Scooby-Loo', 
                    descricao: 'Outro membro da família de Scooby, sempre animado.', 
                    preco: 44.90,
                    estoque: 7, 
                    imagemPadrao: 'assets/imagens/loo-1.jpg',
                    imagemHover: 'assets/imagens/loo-2.jpg',
                    imagemAtual: 'assets/imagens/loo-2.jpg'
                },
                { 
                    nome: 'Professor Pericles', 
                    descricao: 'O papagaio gênio e vilão recorrente.', 
                    preco: 89.90,
                    estoque: 5, 
                    imagemPadrao: 'assets/imagens/prof-1.jpg',
                    imagemHover: 'assets/imagens/prof-2.jpg',
                    imagemAtual: 'assets/imagens/prof-2.jpg'
                },
                { 
                    nome: 'Hex Girls', 
                    descricao: 'A banda de rock gótica que ajuda a turma em mistérios.', 
                    preco: 99.90,
                    estoque: 6, 
                    imagemPadrao: 'assets/imagens/hock-1.jpg',
                    imagemHover: 'assets/imagens/hock-2.jpg',
                    imagemAtual: 'assets/imagens/hock-2.jpg'
                },
                { 
                    nome: 'Monstro de Piche', 
                    descricao: 'Uma criatura assustadora coberta de piche.', 
                    preco: 74.90,
                    estoque: 4, 
                    imagemPadrao: 'assets/imagens/piche1.jpg',
                    imagemHover: 'assets/imagens/piche2.jpg',
                    imagemAtual: 'assets/imagens/piche2.jpg'
                },
                { 
                    nome: 'Cavaleiro Sem Cabeça', 
                    descricao: 'Um vilão clássico que assombra a turma.', 
                    preco: 84.90,
                    estoque: 3, 
                    imagemPadrao: 'assets/imagens/cava1.png',
                    imagemHover: 'assets/imagens/cava2.png',
                    imagemAtual: 'assets/imagens/cava2.png'
                },
                { 
                    nome: 'Creeper', 
                    descricao: 'O Creeper é um vilão clássico do Scooby-Doo', 
                    preco: 74.90,
                    estoque: 4, 
                    imagemPadrao: 'assets/imagens/crep1.jpg',
                    imagemHover: 'assets/imagens/crep2.jpg',
                    imagemAtual: 'assets/imagens/crep1.jpg'
                }
            ]
        };
    },
    computed: {
        totalCarrinho() {
            return this.carrinho.reduce((total, item) => total + (item.quantidade * item.preco), 0);
        }
    },
    methods: {
        adicionarAoCarrinho(index) {
            const produto = this.produtos[index];
            if (produto.estoque > 0) {
                produto.estoque--;
                const itemCarrinho = this.carrinho.find(item => item.nome === produto.nome);
                if (itemCarrinho) {
                    itemCarrinho.quantidade++;
                } else {
                    this.carrinho.push({ nome: produto.nome, quantidade: 1, preco: produto.preco });
                }
            }
        },
        removerDoCarrinho(index) {
            const item = this.carrinho[index];
            const produto = this.produtos.find(prod => prod.nome === item.nome);
            if (produto) {
                produto.estoque += item.quantidade;
            }
            this.carrinho.splice(index, 1);
        },
        alterarImagem(index, novaImagem) {
            this.produtos[index].imagemAtual = novaImagem;
        },
        finalizarCompra() {
            localStorage.setItem('carrinho', JSON.stringify(this.carrinho)); 
            window.location.href = 'carrinho.html'; 
        }
    }
});

app.mount('#app');