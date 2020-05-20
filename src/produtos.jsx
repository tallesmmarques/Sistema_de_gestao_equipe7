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
        <img src={imagPathRe} width='300px'/>
        <div className="textoadd">
            <h3 className="text-center">{nome}</h3>
            <p><b>Tipo: </b>{tipo}</p>
            <p><b>Quantidade: </b>{quant}</p>
            <p><b>Preço: </b>R$ {preco}</p>
            <p><b>Validade: </b>{valid} meses</p>
        </div>
      </div>
    );
}

function Painel () {
    return(
        <div className='painel'>
            <Produto 
                nome='Milho' 
                tipo='Grão' 
                quant='159' 
                valid='12' 
                preco='120,00' 
                imgPath='graos/milho.jpg'
            />
            <Produto 
                nome='Ração de Galinha' 
                tipo='Ração' 
                quant='25' 
                valid='6' 
                preco='60,00' 
                imgPath='racao/racao-galinha1.jpg'
            />
            <Produto 
                nome='Anti inflamatório' 
                tipo='Remedio/Vacina' 
                quant='159' 
                valid='12' 
                preco='120,00' 
                imgPath='remedio-vacina/antiinflamatorio1.jpg'
            />
        </div>
    );
}

ReactDOM.render(<Painel /> , document.getElementById('produtos'));

function funcao () {
    alert("Botão sem função definida");
}