function Login() {
  var done=0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName('senha')[0].value;
  seha=senha.toLowerCase();
  if (usuario=="admin@exemplo.com" && senha=="123") {
    window.location="index.html";
    done=1;
  }
  if (done==0) { alert("Dados incorretos, tente novamente"); }
}
