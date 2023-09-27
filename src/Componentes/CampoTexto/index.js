import'./CampoTexto.css'

export const CampoTexto = (props) => {
    const ouvinte = (evento) =>{
        props.alteracoesCampo(evento.target.value)   
    }

    return(
        <div className='campo-texto'>
            <label><strong>{props.label}</strong></label>
            <input value={props.valor} onChange={ouvinte} required={props.obrigatorio} placeholder= {props.placeholder}/>
        </div>
    )
}