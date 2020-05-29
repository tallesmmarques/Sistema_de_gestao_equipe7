//TOPBARS
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
    { className: "container", id: "nav-container" },
    React.createElement(
      "nav",
      { className: "navbar navbar-expand-lg fixed-top navbar-dark" },
      React.createElement(
        "a",
        { href: "index.html", className: "navbar-brand" },
        React.createElement("img", { className: "brand", src: "imagens/logo.png", alt: "logo" })
      ),
      React.createElement(
        "button",
        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbar-links", "aria-controls": "navbar-links" },
        React.createElement("span", { className: "navbar-toggler-icon" })
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse justify-content-end", id: "navbar-links" },
        React.createElement(
          "div",
          { className: "navbar-nav" },
          React.createElement(
            "a",
            { className: "nav-item dropdown nav-link", href: "index.html" },
            "Home"
          ),
          React.createElement(
            "a",
            { className: "nav-item dropdown nav-link", href: "quem_somos.html" },
            "Quem somos"
          ),
          React.createElement(
            "a",
            { className: "nav-item nav-link dropdown-toggle center-content-end", href: "#", "data-toggle": "dropdown", "data-target": "navbarDropdown" },
            "Produtos",
            React.createElement("span", { className: "claret" })
          ),
          React.createElement(
            "div",
            { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
            React.createElement(
              "a",
              { className: "dropdown-item ", href: "remedios-vacinas.html" },
              "Rem\xE9dios e Vacinas"
            ),
            React.createElement("div", { className: "dropdown-divider" }),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "mudas-sementes.html" },
              "Mudas e Sementes"
            ),
            React.createElement("div", { className: "dropdown-divider" }),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "racoes.html" },
              "Ra\xE7\xF5es"
            ),
            React.createElement("div", { className: "dropdown-divider" }),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "graos.html" },
              "Gr\xE3os"
            ),
            React.createElement("div", { className: "dropdown-divider" }),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "maquinario.html" },
              "Maquin\xE1rio"
            ),
            React.createElement("div", { className: "dropdown-divider" }),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "variados.html" },
              "Variados"
            )
          ),
          React.createElement(
            "a",
            { className: "nav-item nav-link", href: "sing_in.html" },
            "Entrar"
          ),
          React.createElement(
            "a",
            { className: "nav-item nav-link", href: "sing_up.html" },
            "Registrar"
          ),
          React.createElement(
            "a",
            { className: "nav-item nav-link", href: "carrinho.html" },
            "Meu carrinho   ",
            React.createElement("ion-icon", { name: "cart-outline" })
          )
        )
      )
    )
  );
}

//MENU
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

//RODAPÉ
function Footer() {
  return React.createElement(
    "div",
    { className: "footer-wrapper" },
    React.createElement(
      "div",
      { className: "row direita" },
      React.createElement(
        "div",
        { className: "col-2 navbar" },
        React.createElement(
          "a",
          { className: "nav-link active mx-auto", target: "_blank", href: "https://www.instagram.com/cpe.jr/" },
          React.createElement("ion-icon", { name: "logo-instagram", size: "large" })
        ),
        React.createElement(
          "a",
          { className: "nav-link active mx-auto", target: "_blank", href: "https://cpejr.com.br//site/" },
          React.createElement("img", { src: "./imagens/logo-cpe.png", alt: "logo-cpe", height: "30px", width: "30px" })
        ),
        React.createElement(
          "a",
          { className: "nav-link active mx-auto", target: "_blank", href: "https://github.com/TallesMMarques/Sistema_de_gestao_equipe7" },
          React.createElement("ion-icon", { name: "logo-github", size: "large" })
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));

//PARALLAX 
function Parallax() {
  return React.createElement(
    "div",
    { className: "contato parallax" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-12" },
          React.createElement(
            "div",
            { className: "titulo" },
            "ENTRE EM CONTATO CONOSCO"
          )
        ),
        React.createElement(
          "div",
          { className: "col-1 dados" },
          React.createElement("ion-icon", { name: "home-outline", "class": "icon_dados" })
        ),
        React.createElement(
          "div",
          { className: "col-5 dados" },
          "Avenida Presidente Ant\xF4nio Carlos, 6627 - Sala 112, Campus Pampulha, Belo Horizonte/MG."
        ),
        React.createElement(
          "div",
          { className: "col-1 dados" },
          React.createElement("ion-icon", { name: "time-outline", "class": "icon_dados" })
        ),
        React.createElement(
          "div",
          { className: "col-5 dados" },
          "Seg \xE0 Sex: 7:00 \xE0s 13:00 e 15:00 \xE0s 22:30",
          React.createElement("br", null),
          "S\xE1bado: 8:30 \xE0s 15:30"
        ),
        React.createElement(
          "div",
          { className: "col-1 dados" },
          React.createElement("ion-icon", { name: "call-outline", "class": "icon_dados" })
        ),
        React.createElement(
          "div",
          { className: "col-5 dados" },
          "(31) 3409-6695",
          React.createElement("br", null),
          "(31) 7284-0484"
        ),
        React.createElement(
          "div",
          { className: "col-1 dados" },
          React.createElement("ion-icon", { name: "mail-outline", "class": "icon_dados" })
        ),
        React.createElement(
          "div",
          { className: "col-5 dados" },
          "contato@copperpe.com.br/"
        ),
        React.createElement(
          "div",
          { className: "col-12 dados_central" },
          React.createElement(
            "p",
            null,
            "Voc\xEA pode tamb\xE9m estar preenchendo um formul\xE1rio com sua d\xFAvida"
          ),
          React.createElement(
            "a",
            { type: "submit", className: "btn btn-primary", href: "fale_conosco.html" },
            "Fale Conosco"
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Parallax, null), document.getElementById('parallax'));