const catalagoProdutos = [
    {
        imagem: "assets/images/celulares/iphone.png",
        produto: 'iPhone 17 Pro Max',
        descricao: '256GB, 12GB de RAM, chip A19 Pro, tela OLED de 6,9"',
        tipo: 'Smartphone',
        data: '19/09/2025',
        preco: 'R$9875,86'
    },
    {
        imagem: "assets/images/celulares/Samsungs26.png",
        produto: 'Samsung Galaxy S25 Ultra',
        descricao: '256GB, 12GB de RAM, Snapdragon 8 Elite, tela AMOLED de 6,9"',
        tipo: 'Smartphone',
        data: '07/02/2025',
        preco: 'R$8499'
    },
    {
        imagem: "assets/images/celulares/googlePixel.png",
        produto: 'Google Pixel 10 Pro',
        descricao: '256GB, 16GB de RAM, chip Tensor G5, tela OLED de 6,3"',
        tipo: 'Smartphone',
        data: '28/08/2025',
        preco: 'R$8999'
    },
    {
        imagem: "assets/images/celulares/XiaomiUltra.png",
        produto: 'Xiaomi 15',
        descricao: '256GB, 12GB de RAM, Snapdragon 8 Elite, tela AMOLED de 6,36"',
        tipo: 'Smartphone',
        data: '02/03/2025',
        preco: 'R$5999'
    },
    {
        imagem: "assets/images/celulares/edgePro.png",
        produto: 'Motorola Edge 60 Pro',
        descricao: '512GB, 12GB de RAM, Dimensity 8350 Extreme, tela pOLED de 6,7"',
        tipo: 'Smartphone',
        data: '24/04/2025',
        preco: 'R$3999'
    },
    {
        imagem: "assets/images/celulares/OnePlus13.png",
        produto: 'OnePlus 13',
        descricao: '256GB, 12GB de RAM, Snapdragon 8 Elite, tela AMOLED de 6,82"',
        tipo: 'Smartphone',
        data: '10/01/2025',
        preco: 'R$5499'
    },
    {
        imagem: "assets/images/celulares/NothingPhone.png",
        produto: 'Nothing Phone (3)',
        descricao: '256GB, 12GB de RAM, Snapdragon 8s Gen 4, tela AMOLED de 6,67"',
        tipo: 'Smartphone',
        data: '15/07/2025',
        preco: 'R$5299'
    },
    {
        imagem: "assets/images/celulares/Oppo.png",
        produto: 'Oppo Find X8 Pro',
        descricao: '512GB, 16GB de RAM, Dimensity 9400, tela AMOLED de 6,78"',
        tipo: 'Smartphone',
        data: '21/11/2024',
        preco: 'R$7299'
    },
    {
        imagem: "assets/images/celulares/SonyXperia.png",
        produto: 'Sony Xperia 1 VII',
        descricao: '256GB, 12GB de RAM, Snapdragon 8 Elite, tela OLED de 6,5"',
        tipo: 'Smartphone',
        data: '13/05/2025',
        preco: 'R$9499'
    },
    {
        imagem: "assets/images/celulares/ROGPhone.png",
        produto: 'Asus ROG Phone 9 Pro',
        descricao: '512GB, 16GB de RAM, Snapdragon 8 Elite, tela AMOLED de 6,78"',
        tipo: 'Smartphone',
        data: '19/11/2024',
        preco: 'R$8999'
    },
    {
        imagem: "assets/images/celulares/HONOR.avif",
        produto: 'Honor Magic7 Pro',
        descricao: '512GB, 12GB de RAM, Snapdragon 8 Elite, tela OLED de 6,8"',
        tipo: 'Smartphone',
        data: '15/01/2025',
        preco: 'R$6499'
    },

    {
        imagem: "assets/images/consoles/PS5Pro.png",
        produto: 'PlayStation 5 Pro',
        descricao: '2TB de SSD, 16GB de RAM, GPU de 16,7 TFLOPs, saída 8K',
        tipo: 'Videogame',
        data: '07/11/2024',
        preco: 'R$6999'
    },
    {
        imagem: "assets/images/consoles/PS5Slim.png",
        produto: 'PlayStation 5 Slim',
        descricao: '1TB de SSD, 16GB de RAM, GPU de 10,3 TFLOPs, leitor 4K',
        tipo: 'Videogame',
        data: '10/11/2023',
        preco: 'R$3999'
    },
    {
        imagem: "assets/images/consoles/xboxX.png",
        produto: 'Xbox Series X',
        descricao: '1TB de SSD, 16GB de RAM, GPU de 12 TFLOPs, leitor 4K',
        tipo: 'Videogame',
        data: '10/11/2020',
        preco: 'R$4999'
    },
    {
        imagem: "assets/images/consoles/xboxS.png",
        produto: 'Xbox Series S',
        descricao: '512GB de SSD, 10GB de RAM, GPU de 4 TFLOPs, sem leitor',
        tipo: 'Videogame',
        data: '10/11/2020',
        preco: 'R$2799'
    },
    {
        imagem: "assets/images/consoles/switch2.png",
        produto: 'Nintendo Switch 2',
        descricao: '256GB, 12GB de RAM, tela LCD de 7,9", modo portátil e TV',
        tipo: 'Videogame',
        data: '05/06/2025',
        preco: 'R$4299'
    },
    {
        imagem: "assets/images/consoles/SteamDeck.png",
        produto: 'Steam Deck OLED',
        descricao: '512GB, 16GB de RAM, chip AMD customizado, tela OLED de 7,4"',
        tipo: 'Videogame',
        data: '16/11/2023',
        preco: 'R$4999'
    },
    {
        imagem: "assets/images/consoles/kv-box.png",
        produto: 'ROG Xbox Ally X',
        descricao: '1TB, 24GB de RAM, Ryzen Z2 Extreme, tela IPS de 7"',
        tipo: 'Videogame',
        data: '16/10/2025',
        preco: 'R$7999'
    },

    {
        imagem: "assets/images/jogos/GOWR.png",
        produto: 'God of War Ragnarök',
        descricao: 'Ação e aventura, PS5, 1 jogador, mídia física',
        tipo: 'Jogo',
        data: '09/11/2022',
        preco: 'R$199,90'
    },
    {
        imagem: "assets/images/jogos/EldenRing.png",
        produto: 'Elden Ring',
        descricao: 'RPG de ação, PS5, 1 a 4 jogadores, mídia física',
        tipo: 'Jogo',
        data: '25/02/2022',
        preco: 'R$229,90'
    },
    {
        imagem: "assets/images/jogos/Zelda.png",
        produto: 'Zelda',
        descricao: 'Aventura, Nintendo Switch, 1 jogador, mídia física',
        tipo: 'Jogo',
        data: '12/05/2023',
        preco: 'R$349,90'
    },
    {
        imagem: "assets/images/jogos/Silksong.png",
        produto: 'Hollow Knight: Silksong',
        descricao: 'Aventura 2D, Nintendo Switch, 1 jogador, mídia digital',
        tipo: 'Jogo',
        data: '04/09/2025',
        preco: 'R$69,90'
    },
    {
        imagem: "assets/images/jogos/BaldursGate.png",
        produto: "Baldur's Gate 3",
        descricao: 'RPG de turnos, PS5, 1 a 4 jogadores, mídia física',
        tipo: 'Jogo',
        data: '06/09/2023',
        preco: 'R$249,90'
    },

    {
        imagem: "assets/images/quadrinhos/Watchmen.jpg",
        produto: 'Watchmen',
        descricao: 'Edição definitiva, DC Comics, capa dura, 448 páginas',
        tipo: 'Quadrinho',
        data: '01/09/1986',
        preco: 'R$149,90'
    },
    {
        imagem: "assets/images/quadrinhos/Sandman.webp",
        produto: 'Sandman: Volume 1',
        descricao: 'Prelúdios e Noturnos, Neil Gaiman, Vertigo, capa dura',
        tipo: 'Quadrinho',
        data: '29/11/1989',
        preco: 'R$119,90'
    },
    {
        imagem: "assets/images/quadrinhos/batman.webp",
        produto: 'Batman: O Cavaleiro das Trevas',
        descricao: 'Frank Miller, DC Comics, edição de luxo, capa dura',
        tipo: 'Quadrinho',
        data: '01/02/1986',
        preco: 'R$129,90'
    },
    {
        imagem: "assets/images/quadrinhos/berserk.webp",
        produto: 'Berserk: Volume 1',
        descricao: 'Kentaro Miura, mangá, edição de luxo, capa dura',
        tipo: 'Quadrinho',
        data: '25/11/1989',
        preco: 'R$109,90'
    },

    {
        imagem: "assets/images/camisas/nirvana.png",
        produto: 'Camiseta Nirvana Smiley',
        descricao: '100% algodão, estampa frontal, modelagem regular, cor preta',
        tipo: 'Camisa',
        data: '10/03/2024',
        preco: 'R$89,90'
    },
    {
        imagem: "assets/images/camisas/zelda.png",
        produto: 'Camiseta Zelda Triforce',
        descricao: '100% algodão, estampa frontal, modelagem regular, cor verde',
        tipo: 'Camisa',
        data: '15/05/2024',
        preco: 'R$79,90'
    },
    {
        imagem: "assets/images/camisas/darthVader.png",
        produto: 'Camiseta Star Wars Darth Vader',
        descricao: 'Algodão e poliéster, estampa frontal, modelagem slim, cor preta',
        tipo: 'Camisa',
        data: '04/05/2024',
        preco: 'R$99,90'
    },
    {
        imagem: "assets/images/camisas/batmanCamisa.png",
        produto: 'Camiseta Batman Logo',
        descricao: '100% algodão, estampa frontal, modelagem regular, cor cinza',
        tipo: 'Camisa',
        data: '20/06/2024',
        preco: 'R$84,90'
    },
    {
        imagem: "assets/images/camisas/pikachu.png",
        produto: 'Camiseta Pokémon Pikachu',
        descricao: '100% algodão, estampa frontal, modelagem regular, cor amarela',
        tipo: 'Camisa',
        data: '27/02/2024',
        preco: 'R$74,90'
    },

    {
        imagem: "assets/images/actionfigures/Kratos.png",
        produto: 'Action Figure Kratos',
        descricao: 'God of War, 18 cm de altura, articulado, acompanha machado',
        tipo: 'Action Figure',
        data: '09/11/2022',
        preco: 'R$399,90'
    },
    {
        imagem: "assets/images/actionfigures/spiderman.png",
        produto: 'Action Figure Homem-Aranha',
        descricao: 'Marvel Legends, 15 cm de altura, articulado, com acessórios',
        tipo: 'Action Figure',
        data: '12/08/2023',
        preco: 'R$249,90'
    },
    {
        imagem: "assets/images/actionfigures/goku.png",
        produto: 'Action Figure Goku',
        descricao: 'Dragon Ball Z, 17 cm de altura, articulado, base inclusa',
        tipo: 'Action Figure',
        data: '18/03/2023',
        preco: 'R$299,90'
    },
    {
        imagem: "assets/images/actionfigures/batmanboneco.png",
        produto: 'Action Figure Batman',
        descricao: 'DC Multiverse, 18 cm de altura, articulado, com batarangues',
        tipo: 'Action Figure',
        data: '22/10/2023',
        preco: 'R$279,90'
    },
    {
        imagem: "assets/images/actionfigures/mario.png",
        produto: 'Action Figure Mario',
        descricao: 'Super Mario, 10 cm de altura, articulado, com cogumelo',
        tipo: 'Action Figure',
        data: '03/04/2023',
        preco: 'R$149,90'
    }
];
        const sectionCards = document.getElementById('container');
        const inputPesquisa = document.getElementById('texto');

        function criarProduto(produtos) {
            sectionCards.innerHTML = '';

            produtos.forEach(produtos => {
                const Caixa = document.createElement('div');
                const Produto = document.createElement('p');
                const Titulo = document.createElement('h2');
                const img = document.createElement('img');
                const comprar = document.createElement('button');

                Titulo.textContent = produtos.produto
                Produto.innerHTML = `<br> ${produtos.descricao} <br> ${produtos.tipo} <br> ${produtos.data} <br>`;
                comprar.textContent = produtos.preco;

                comprar.classList.add('buttonComprar');
                img.src = produtos.imagem;
                Caixa.classList.add('caixa');
                Caixa.appendChild(img);
                Caixa.appendChild(Titulo);
                Caixa.appendChild(Produto);
                Caixa.appendChild(comprar);
                sectionCards.appendChild(Caixa);
            })
        }
        function pesquisar() {
            const produtoDesejado = texto.value.trim();

            const produtosCorrespondentes = catalagoProdutos.filter((produto) => {
                return produto.produto.toLowerCase().includes(produtoDesejado.toLowerCase());
            })

            if (produtosCorrespondentes.length == 0) {
                sectionCards.innerHTML = '';

                const mensagem = document.createElement('P');
                let caixa = document.createElement('div')
                mensagem.textContent = 'Não há esse produto';

                caixa.classList.add('caixaNaoEncontrada');
                caixa.appendChild(mensagem)
                sectionCards.classList.add('containerCentralizado');
                sectionCards.appendChild(caixa);
                return;
            } else {
                criarProduto(produtosCorrespondentes);
                sectionCards.classList.remove('containerCentralizado');
            }
        }

        function pegarData(produto) {
            const [dia, mes, ano] = produto.data.split('/');
            return new Date(ano, mes - 1, dia);
        }
        function verificarData(ordem) {
           const copia = [...catalagoProdutos];

           copia.sort(function (a, b) {
             const dataA = pegarData(a);
             const dataB = pegarData(b);

             if (ordem == 'recentes') {
            return dataB - dataA;
        }
            if (ordem == 'antigos') {
            return dataA - dataB;
        }
    });

    criarProduto(copia);
    sectionCards.classList.remove('containerCentralizado');
}

function pegarPreco(produto) {
    const texto = produto.preco.replace('R$', '').replace(',', '.');
    return parseFloat(texto);
}

function verificarPreco(ordem) {
    const copia = [...catalagoProdutos];

    copia.sort(function (a, b) {
        const precoA = pegarPreco(a);
        const precoB = pegarPreco(b);

        if (ordem == 'caros') {
            return precoB - precoA;
        }
        if (ordem == 'baratos') {
            return precoA - precoB;
        }
    });

    criarProduto(copia);
    sectionCards.classList.remove('containerCentralizado');
}

        inputPesquisa.addEventListener('input', pesquisar);
        criarProduto(catalagoProdutos);