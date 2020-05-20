function Produto () {
    return (
      <div className="produto">
        <img src="imagens/produtos/graos/milho.jpg"/>
        <div className="textoadd">
            <h3 className="text-center">Milho</h3>
            <p><b>Nome: </b>Milho</p>
            <p><b>Tipo: </b>Grãos</p>
            <p><b>Quantidade: </b>1000</p>
            <p><b>Preço: </b>100,00 R$</p>
            <p><b>Validade: </b>N/A</p>
        </div>
      </div>
    );
  }

ReactDOM.render(<Produto /> , document.getElementById('produtos'));

function funcao () {
    alert("Aqui")
}