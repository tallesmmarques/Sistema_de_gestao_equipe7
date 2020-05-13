function Topbar () {
  return (
    <div className="topbar wrapper">
      <a href="index.html" className="logo">COOPERPE</a>
      <div className="login_bar">
        <a href="quem_somos.html">Quem Somos</a>
        <a href="sing_in.html">Sing In</a>
        <a href="sing_up.html">Sing Up</a>
      </div>
    </div>
    );
}

ReactDOM.render(<Topbar />, document.getElementById('topbar') );
