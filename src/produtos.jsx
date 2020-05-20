function Produto (props) {
    var nome = props.nome;
    var tipo = props.tipo;
    var quant = props.quant;
    var preco = props.preco;
    var valid = props.valid;
    var imagPath = props.imgPath;
    
    var imagPathRe = 'imagens/produtos/' + imagPath;
    return (
      <div className="produto">
        <img src={imagPathRe}/>
        <div className="textoadd">
            <h3 className="text-center">Milho</h3>
            <p><b>Nome: </b>{nome}</p>
            <p><b>Tipo: </b>{tipo}</p>
            <p><b>Quantidade: </b>{quant}</p>
            <p><b>Preço: </b>R$ {preco}</p>
            <p><b>Validade: </b>{valid} meses</p>
        </div>
      </div>
    );
  }

ReactDOM.render(
    <Produto nome='Milho' tipo='Grão' quant='159' valid='12' preco='120,00' imgPath='graos/milho.jpg'/> , 
    document.getElementById('produtos')
);

function funcao () {
    alert("Aqui")
}