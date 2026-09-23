function ProcurarJogador ( props ) {
    return(
    <div>
        {props.jogadorEncontrado ? (
            <p>{props.jogadorEncontrado.nome} jogou no time {props.jogadorEncontrado.time}.</p>
        ) : (
            <p>Jogador não encontrado.</p>
        )}
    </div>
    )
}

export default ProcurarJogador;