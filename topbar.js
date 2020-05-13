function Topbar() {
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

ReactDOM.render(React.createElement(Topbar, null), document.getElementById('topbar'));