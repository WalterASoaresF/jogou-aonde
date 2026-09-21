import { useState } from 'react';

function EncontrarJogador() {
    const jogadores = [
        {nome: "Gabigol", time: "Flamengo"},
        {nome: "Pele", time: "Santos"},
        {nome: "Zico", time: "Flamengo"},
        {nome: "Ronaldo", time: "Cruzeiro"},
        {nome: "Ronaldinho", time: "Grêmio"},
        {nome: "Kaká", time: "São Paulo"},
        {nome: "Garrincha", time: "Botafogo"},
        {nome: "Romário", time: "Vasco"},
        {nome: "Neymar", time: "Santos"},
        {nome: "Thiago Silva", time: "Fluminense"},
        {nome: "Roberto Carlos", time: "Corinthians"}
    ]
    const [nomejogador, setNomejogador] = useState('');
    const jogadorEncontrado = jogadores.find(jogador => jogador.nome.trim().toLowerCase() === nomejogador.trim().toLowerCase())

    return (
        <div>  
            <p>Informe um jogador para saber em qual time ele jogou:</p>
            <input type="text" 
                placeholder="Digite o nome do jogador"  
                value={nomejogador}
                onChange={(e) => setNomejogador(e.target.value)}/>
            <div>
                {jogadorEncontrado ? (
                    <p>{jogadorEncontrado.nome} jogou no time {jogadorEncontrado.time}.</p>
                ) : (
                    <p>Jogador não encontrado.</p>
                )}
            </div>
        </div>
    )

}

export default EncontrarJogador;