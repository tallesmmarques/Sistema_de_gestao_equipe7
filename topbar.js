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
          ),
          React.createElement(
            "li",
            null,
            React.createElement(Menu, null)
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