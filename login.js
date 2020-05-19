function Login() {
  var done=0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName('senha')[0].value;
  senha=senha.toLowerCase();
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

function Register() {
    var nome = document.getElementsByName('nome')[0].value;
    var usuario = document.getElementsByName('usuario')[0].value;
    var senha= document.getElementsByName('senha')[0].value;
    var cargo= document.getElementsByName('cargo')[0].value;
    if (nome && usuario && senha && cargo) {
        alert("Seja bem vindo " + nome +", você terá privilégios de " + cargo);
    }
    else {
        alert('Existem campos vazios!');
    }
}