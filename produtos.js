function Produto() {
  return React.createElement(
    "div",
    { className: "produto" },
    React.createElement("img", { src: "imagens/produtos/graos/milho.jpg" }),
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
        "Milho"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          "Tipo: "
        ),
        "Gr\xE3os"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          "Quantidade: "
        ),
        "1000"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          "Pre\xE7o: "
        ),
        "100,00 R$"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          "Validade: "
        ),
        "N/A"
      )
    )
  );
}

ReactDOM.render(React.createElement(Produto, null), document.getElementById('produtos'));

function funcao() {
  alert("Aqui");
}