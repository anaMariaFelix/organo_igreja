import './Rodape.css'

const Rodape = (props) =>{
    return(
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/anaMariaFelix'>
                            <img src='/imagens/github.png' alt='icone do github'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/ana-maria-032614276/'>
                            <img src='/imagens/social.png' alt='icone do linkidin'/>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:anafelix0909@gmail.com?subject=Conteme mais'>
                            <img src='/imagens/envelope.png' alt='icone do email'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <p><strong>Desenvolvido por Ana Maria</strong></p>
            </section>
        </footer>
    )
}
export default Rodape