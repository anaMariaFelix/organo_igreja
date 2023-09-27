import Botao from '../Botao'
import { CampoTexto } from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import {useState} from 'react'
import './Formulario.css'

export const Formulario = (props) => {
    const [campoNome, setCampoNome] = useState('')
    const [campoImagem, setCampoImagem] = useState('')
    const [campoCargo, setCampoCargo] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.ColaboradorCadastrado({
            campoNome,
            campoImagem,
            campoCargo
        })
        setCampoNome('')
        setCampoImagem('')
        setCampoCargo('')
    }


    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h1>Cadastrar Membro</h1>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome:' 
                    placeholder='Digite seu Nome:'
                    valor={campoNome}
                    alteracoesCampo={campoNome => setCampoNome(campoNome)}
                />
                <CampoTexto 
                    label='Imagem' 
                    obrigatorio={true}
                    valor={campoImagem}
                    placeholder='Digite o endereço da imagem:' 
                    alteracoesCampo={campoImagem => setCampoImagem(campoImagem)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Cargo' 
                    cargo={props.cargosDisponiveis}
                    valor={campoCargo}
                    altalteracoesCampo={valor => setCampoCargo(valor)}
                />
                <Botao label='Salvar'/>
            </form>
        </section>
    )
}