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
      <div className="d-flex flex-row justify-content-between">
          <div className="navbar">
            <a href="index.html" className="navbar-brand"><img className="brand" src="imagens/logo.png" alt="logo"/></a>
          </div>
          <div className="navbar">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="quem_somos.html">Quem Somos</a>
              </li>
              <li className="nav-item dropdown navbar-nav ml-auto centralizar" >
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Produtos</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item tamanholetradropdown" href="remedios-vacinas.html">Remédios e Vacinas</a>
                  <a className="dropdown-item tamanholetradropdown" href="mudas-sementes.html">Mudas e Sementes</a>
                  <a className="dropdown-item tamanholetradropdown" href="racao.html">Rações</a>
                  <a className="dropdown-item tamanholetradropdown" href="graos.html">Grãos</a>
                  <a className="dropdown-item tamanholetradropdown" href="maquinario.html">Maquinário</a>
                  <a className="dropdown-item tamanholetradropdown" href="variados.html">Variados</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="fale_conosco.html">Fale conosco</a>
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
function Menu () {
  return (
    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <ul>
              <li className="nav-link">
                <a className="link-menu" data-toggle="collapse" href="#collapse1">
                  <svg className="bi bi-list" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                  </svg>
                  Menu
                </a>
              </li>
            </ul>
            
          </h4>
        </div>
        <div id="collapse1" className="panel-collapse collapse">
          <ul className="list-group">
            <li className="list-group-item">One</li>
            <li className="list-group-item">Two</li>
            <li className="list-group-item">Three</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


ReactDOM.render(<Topbar />, document.getElementById('topbar') );

function Footer () {
  return (
      <div class="footer-wrapper">
          <div class="row">
              <div class="col-10 navbar">
                  <ul class="nav justify-content-center">
                      <li class="nav-item">
                      <a class="nav-link active" href="quem_somos">Sobre nós</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link active" href="fale_conosco">Fale conosco</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link active" href="#">alguma coisa</a>
                      </li>
                  </ul>
              </div>
              <div class="col-2 navbar">
                <a class="nav-link active mx-auto" target="_blank" href="https://www.instagram.com/cpe.jr/"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                <a class="nav-link active mx-auto" target="_blank" href="https://cpejr.com.br/site/"><img src="./imagens/logo-cpe.png" alt="logo-cpe" height="30px" width="30px" /></a>
                <a class="nav-link active mx-auto" target="_blank" href="https://github.com/TallesMMarques/Sistema_de_gestao_equipe7"><ion-icon name="logo-github" size="large"></ion-icon></a>
              </div>
          </div>
      </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));

