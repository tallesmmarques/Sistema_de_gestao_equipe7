function Produto(props) {
    var nome = props.nome;
    var tipo = props.tipo;
    var quant = props.quant;
    var preco = props.preco;
    var valid = props.valid;
    var imagPath = props.imgPath;

    var imagPathRe = 'imagens/produtos/' + imagPath;
    return React.createElement(
        "div",
        { className: "produto" },
        React.createElement("img", { src: imagPathRe }),
        React.createElement(
            "div",
            { className: "textoadd" },
            React.createElement(
                "h3",
                { className: "text-center" },
                "Milho"
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "b",
                    null,
                    "Nome: "
                ),
                nome
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "b",
                    null,
                    "Tipo: "
                ),
                tipo
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "b",
                    null,
                    "Quantidade: "
                ),
                quant
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "b",
                    null,
                    "Pre\xE7o: "
                ),
                "R$ ",
                preco
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "b",
                    null,
                    "Validade: "
                ),
                valid,
                " meses"
            )
        )
    );
}

ReactDOM.render(React.createElement(Produto, { nome: "Milho", tipo: "Gr\xE3o", quant: "159", valid: "12", preco: "120,00", imgPath: "graos/milho.jpg" }), document.getElementById('produtos'));

function funcao() {
    alert("Aqui");
}