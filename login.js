function Login() {
  var done=0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName('senha')[0].value;
  seha=senha.toLowerCase();
  if (usuario=="cooperado@exemplo.com" && senha=="123") {
    window.location="produtos.html";
    done=1;
  }
  if (usuario=="gerente@exemplo.com" && senha=="123") {
    window.location="addproduto.html";
    done=1;
  }
  if (usuario=="cliente@exemplo.com" && senha=="123") {
    window.location="produtos.html";
    done=1;
  }
  if (done==0) { alert("Dados incorretos, tente novamente"); }
}
