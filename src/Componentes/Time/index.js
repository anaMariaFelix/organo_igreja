import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) =>{
    const css = {backgroundColor: props.corSecundaria}
    return(
        props.colaboradoreCadastrados.length > 0 && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nomeCargo}</h3>

            <div className='colaboradores'>
                 {props.colaboradoreCadastrados.map(colaborador => <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.campoNome}
                    nome={colaborador.campoNome}
                    cargo={colaborador.campoCargo}
                    imagem={colaborador.campoImagem}/>)}  
            </div>
        </section>
    )
}
export default Time