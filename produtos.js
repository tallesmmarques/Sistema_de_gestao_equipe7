function Produto(props) {
    var nome = props.nome;
    var tipo = props.tipo;
    var quant = props.quant;
    var preco = props.preco;
    var valid = props.valid;
    var imagPath = props.imgPath;

    var imagPathRe = 'imagens/produtos/' + imagPath;
    return React.createElement(
        'div',
        { className: 'produto' },
        React.createElement('img', { src: imagPathRe, width: '300px' }),
        React.createElement(
            'div',
            { className: 'textoadd' },
            React.createElement(
                'h3',
                { className: 'text-center' },
                nome
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'b',
                    null,
                    'Tipo: '
                ),
                tipo
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'b',
                    null,
                    'Quantidade: '
                ),
                quant
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'b',
                    null,
                    'Pre\xE7o: '
                ),
                'R$ ',
                preco
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'b',
                    null,
                    'Validade: '
                ),
                valid,
                ' meses'
            )
        )
    );
}

function Painel() {
    return React.createElement(
        'div',
        { className: 'painel' },
        React.createElement(Produto, {
            nome: 'Milho',
            tipo: 'Gr\xE3o',
            quant: '159',
            valid: '12',
            preco: '120,00',
            imgPath: 'graos/milho.jpg'
        }),
        React.createElement(Produto, {
            nome: 'Ra\xE7\xE3o de Galinha',
            tipo: 'Ra\xE7\xE3o',
            quant: '25',
            valid: '6',
            preco: '60,00',
            imgPath: 'racao/racao-galinha1.jpg'
        }),
        React.createElement(Produto, {
            nome: 'Anti inflamat\xF3rio',
            tipo: 'Remedio/Vacina',
            quant: '159',
            valid: '12',
            preco: '120,00',
            imgPath: 'remedio-vacina/antiinflamatorio1.jpg'
        })
    );
}

ReactDOM.render(React.createElement(Painel, null), document.getElementById('produtos'));