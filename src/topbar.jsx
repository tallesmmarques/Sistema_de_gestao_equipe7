function TopbarAntiga () {
  return (
    <div className="topbar wrapper">
      <a href="index.html" className="logo">COOPERPE</a>
      <div className="login_bar">
        <a href="quem_somos.html">Quem Somos</a>
        <a href="produtos.html">Produtos</a>
        <a href="sing_in.html">Sing In</a>
        <a href="sing_up.html">Sing Up</a>
      </div>
    </div>
    );
}
function Topbar () {
  return (
    <div className="header-wrapper">
      <div className="row">
          <div className="col-2 navbar">
            <a href="index.html" className="navbar-brand"><img className="brand" src="imagens/logo.png" alt="logo"/></a>
          </div>
          <div className="col-8 navbar">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="quem_somos.html">Quem Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="produtos.html">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="contato.html">Fale conosco</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="sing_in.html">Entrar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="sing_up.html">Registrar</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Topbar />, document.getElementById('topbar') );
