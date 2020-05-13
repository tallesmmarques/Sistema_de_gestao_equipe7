function TopbarAntiga() {
  return React.createElement(
    "div",
    { className: "topbar wrapper" },
    React.createElement(
      "a",
      { href: "index.html", className: "logo" },
      "COOPERPE"
    ),
    React.createElement(
      "div",
      { className: "login_bar" },
      React.createElement(
        "a",
        { href: "quem_somos.html" },
        "Quem Somos"
      ),
      React.createElement(
        "a",
        { href: "produtos.html" },
        "Produtos"
      ),
      React.createElement(
        "a",
        { href: "sing_in.html" },
        "Sing In"
      ),
      React.createElement(
        "a",
        { href: "sing_up.html" },
        "Sing Up"
      )
    )
  );
}
function Topbar() {
  return React.createElement(
    "div",
    { className: "header-wrapper" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-2 navbar" },
        React.createElement(
          "a",
          { href: "index.html", className: "navbar-brand" },
          React.createElement("img", { className: "brand", src: "imagens/logo.png", alt: "logo" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-8 navbar" },
        React.createElement(
          "ul",
          { className: "nav justify-content-center" },
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "quem_somos.html" },
              "Quem Somos"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "produtos.html" },
              "Produtos"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "contato.html" },
              "Fale conosco"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "sing_in.html" },
              "Entrar"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "sing_up.html" },
              "Registrar"
            )
          )
        )
      )
    )
  );
}
ReactDOM.render(React.createElement(Topbar, null), document.getElementById('topbar'));