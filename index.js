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
      { className: "d-flex flex-row justify-content-between" },
      React.createElement(
        "div",
        { className: "navbar" },
        React.createElement(
          "a",
          { href: "index.html", className: "navbar-brand" },
          React.createElement("img", { className: "brand", src: "imagens/logo.png", alt: "logo" })
        )
      ),
      React.createElement(
        "div",
        { className: "navbar" },
        React.createElement(
          "ul",
          { className: "nav justify-content-end" },
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "quem_somos.html" },
              "Quem Somos"
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "navbar-nav ml-auto" },
          React.createElement(
            "li",
            { className: "nav-item dropdown" },
            React.createElement(
              "a",
              { className: "nav-link dropdown-toggle", href: "produtos.html", "data-toggle": "dropdown", id: "navDrop" },
              "Produtos"
            ),
            React.createElement(
              "div",
              { className: "dropdown-menu" },
              React.createElement(
                "a",
                { className: "dropdown-item", href: "produtos.html" },
                "Latic\xEDnios"
              ),
              React.createElement(
                "a",
                { className: "dropdown-item", href: "alimentos-organicos.html" },
                "Alimentos Org\xE2nicos"
              ),
              React.createElement(
                "a",
                { className: "dropdown-item", href: "#" },
                "Produto 3"
              ),
              React.createElement(
                "a",
                { className: "dropdown-item", href: "#" },
                "Produto 4"
              )
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "nav justify-content-end" },
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "a",
              { className: "nav-link active", href: "fale_conosco.html" },
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
function Menu() {
  return React.createElement(
    "div",
    { className: "panel-group" },
    React.createElement(
      "div",
      { className: "panel panel-default" },
      React.createElement(
        "div",
        { className: "panel-heading" },
        React.createElement(
          "h4",
          { className: "panel-title" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              { className: "nav-link" },
              React.createElement(
                "a",
                { className: "link-menu", "data-toggle": "collapse", href: "#collapse1" },
                React.createElement(
                  "svg",
                  { className: "bi bi-list", width: "1.5em", height: "1.5em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
                  React.createElement("path", { "fill-rule": "evenodd", d: "M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z", "clip-rule": "evenodd" })
                ),
                "Menu"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { id: "collapse1", className: "panel-collapse collapse" },
        React.createElement(
          "ul",
          { className: "list-group" },
          React.createElement(
            "li",
            { className: "list-group-item" },
            "One"
          ),
          React.createElement(
            "li",
            { className: "list-group-item" },
            "Two"
          ),
          React.createElement(
            "li",
            { className: "list-group-item" },
            "Three"
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Topbar, null), document.getElementById('topbar'));

function Footer() {
  return React.createElement(
    "div",
    { "class": "footer-wrapper" },
    React.createElement(
      "div",
      { "class": "row" },
      React.createElement(
        "div",
        { "class": "col-10 navbar" },
        React.createElement(
          "ul",
          { "class": "nav justify-content-center" },
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              "a",
              { "class": "nav-link active", href: "quem_somos" },
              "Sobre n\xF3s"
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              "a",
              { "class": "nav-link active", href: "fale_conosco" },
              "Fale conosco"
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              "a",
              { "class": "nav-link active", href: "#" },
              "alguma coisa"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "col-2 navbar" },
        React.createElement(
          "a",
          { "class": "nav-link active mx-auto", target: "_blank", href: "https://www.instagram.com/cpe.jr/" },
          React.createElement("ion-icon", { name: "logo-instagram", size: "large" })
        ),
        React.createElement(
          "a",
          { "class": "nav-link active mx-auto", target: "_blank", href: "https://cpejr.com.br/site/" },
          React.createElement("img", { src: "./imagens/logo-cpe.png", alt: "logo-cpe", height: "30px", width: "30px" })
        ),
        React.createElement(
          "a",
          { "class": "nav-link active mx-auto", target: "_blank", href: "https://github.com/TallesMMarques/Sistema_de_gestao_equipe7" },
          React.createElement("ion-icon", { name: "logo-github", size: "large" })
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));