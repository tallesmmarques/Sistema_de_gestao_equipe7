function Produto() {
    var nome = 'Milho';
    var tipo = 'Grãos';
    var quant = 162;
    var preco = 80;
    var valid = 12;
    var imagPath = 'graos/milho.jpg';

    var imagPathRe = 'imagens/produtos/' + imagPath;
    return React.createElement(
        'div',
        { className: 'produto' },
        React.createElement('img', { src: imagPathRe }),
        React.createElement(
            'div',
            { className: 'textoadd' },
            React.createElement(
                'h3',
                { className: 'text-center' },
                'Milho'
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'b',
                    null,
                    'Nome: '
                ),
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
                preco,
                ' R$'
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

ReactDOM.render(React.createElement(Produto, null), document.getElementById('produtos'));

function funcao() {
    alert("Aqui");
}