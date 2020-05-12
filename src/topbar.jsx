function Topbar () {
  return (
    <div className="topbar">
      <a href="./index.html" className="logo">COOPERPE</a>
      <div className="login_bar">
          <a href="./login/sing_in.html">Sing In</a>
          <a href="./login/sing_up.html">Sing Up</a>
      </div>
    </div>
    );
}

ReactDOM.render(<Topbar />, document.getElementById('topbar') );