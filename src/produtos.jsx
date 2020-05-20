function Produto () {
    var nome = 'Milho';
    var tipo = 'Grãos';
    var quant = 162;
    var preco = 80;
    var valid = 12;
    var imagPath = 'graos/milho.jpg';
    
    var imagPathRe = 'imagens/produtos/' + imagPath;
    return (
      <div className="produto">
        <img src={imagPathRe}/>
        <div className="textoadd">
            <h3 className="text-center">Milho</h3>
            <p><b>Nome: </b>{nome}</p>
            <p><b>Tipo: </b>{tipo}</p>
            <p><b>Quantidade: </b>{quant}</p>
            <p><b>Preço: </b>{preco} R$</p>
            <p><b>Validade: </b>{valid} meses</p>
        </div>
      </div>
    );
  }

ReactDOM.render(
    <Produto /> , 
    document.getElementById('produtos')
);

function funcao () {
    alert("Aqui")
}