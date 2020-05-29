//TOPBARS
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
    <div className="container" id="nav-container">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
          
        <a href="index.html" className="navbar-brand"><img className="brand" src="imagens/logo.png" alt="logo"/></a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" >
          <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
          <div className="navbar-nav">

            <a className="nav-item dropdown nav-link" href="index.html">Home</a>
            <a className="nav-item dropdown nav-link" href="quem_somos.html">Quem somos</a>

                 
            <a className="nav-item nav-link dropdown-toggle center-content-end" href="#" data-toggle="dropdown" data-target="navbarDropdown" >Produtos<span className="claret"></span></a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item " href="remedios-vacinas.html">Remédios e Vacinas</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="mudas-sementes.html">Mudas e Sementes</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="racoes.html">Rações</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="graos.html">Grãos</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="maquinario.html">Maquinário</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="variados.html">Variados</a>
              
            </div>
            <a className="nav-item nav-link" href="sing_in.html">Entrar</a>
            <a className="nav-item nav-link" href="sing_up.html">Registrar</a>
            <a className="nav-item nav-link" href="carrinho.html">Meu carrinho   <ion-icon name="cart-outline"></ion-icon></a>

          </div>
        </div>
      </nav>
    </div>
  );
}

//MENU
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

//RODAPÉ
function Footer () {
  return (
      <div className="footer-wrapper">
          <div className="row">
              <div className="col-12 d-flex navbar justify-content-end">
                <ul className="nav">
                  <a className="nav-link active mx-auto" href="https://www.instagram.com/cpe.jr/"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                  <a className="nav-link active mx-auto" href="https://cpejr.com.br//site/"><img src="./imagens/logo-cpe.png" alt="logo-cpe" height="30px" width="30px" /></a>
                  <a className="nav-link active mx-auto" href="https://github.com/TallesMMarques/Sistema_de_gestao_equipe7"><ion-icon name="logo-github" size="large"></ion-icon></a>
                </ul>
              </div>
          </div>
      </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));

//PARALLAX 
function Parallax () {
  return (
    <div className="contato parallax">
      <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="titulo">ENTRE EM CONTATO CONOSCO</div>
        </div>
        <div className="col-1 dados"><ion-icon name="home-outline" class="icon_dados"></ion-icon></div>
        <div className="col-5 dados">Avenida Presidente Antônio Carlos, 6627 - Sala 112, Campus Pampulha, Belo Horizonte/MG.</div>
        <div className="col-1 dados"><ion-icon name="time-outline" class="icon_dados"></ion-icon></div>
        <div className="col-5 dados">Seg à Sex: 7:00 às 13:00 e 15:00 às 22:30<br/>Sábado: 8:30 às 15:30</div>
        <div className="col-1 dados"><ion-icon name="call-outline" class="icon_dados"></ion-icon></div>
        <div className="col-5 dados">(31) 3409-6695<br/>(31) 7284-0484</div>
        <div className="col-1 dados"><ion-icon name="mail-outline" class="icon_dados"></ion-icon></div>
        <div className="col-5 dados">contato@copperpe.com.br/</div>

        <div className="col-12 dados_central">
          <p>Você pode também estar preenchendo um formulário com sua dúvida</p>
          <a type="submit" className="btn btn-primary" href="fale_conosco.html">Fale Conosco</a>
        </div>
      </div>
      </div>
    </div>
  );
} 

ReactDOM.render(<Parallax />, document.getElementById('parallax'));