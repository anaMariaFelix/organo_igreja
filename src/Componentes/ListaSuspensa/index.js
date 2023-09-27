import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-supensa'>
            <label><strong>{props.label}</strong></label>
            <select value={props.valor} onChange={evento => props.altalteracoesCampo(evento.target.value)} required={props.obrigatorio}>
                <option value="Selecione...">Selecione...</option>
                {props.cargo.map(item => {
                    return(
                        <option key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
        
    )
}

export default ListaSuspensa