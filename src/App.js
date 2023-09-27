import { Banner } from './Componentes/Banner';
import { Formulario } from './Componentes/Formulario';
import {useState} from 'react'
import Time from './Componentes/Time';
import Rodape from './Componentes/rodape';

function App() {
  const cargos = [
    {
      nome: 'Auxiliar',
      corPrimaria: '#8b5942',
      corSecundaria:'#854a2f'
    },
    {
      nome: 'Diacono(a)',
      corPrimaria: '#d08e54',
      corSecundaria:'#8b5942'
      
    },
    {
      nome: 'Evangelista',
      corPrimaria: '#ff914d',
      corSecundaria:'#d08e54'
      
    },
    {
      nome: 'Membro',
      corPrimaria: '#ffbd59',
      corSecundaria:'#ff914d'
      
      
    },
    {
      nome:'Pastor',
      corPrimaria: '#c47923',
      corSecundaria:'#ffbd59'
    },
    {
      nome:'Misionario(a)',
      corPrimaria: '#ffbd59',
      corSecundaria:'#c47923'
    }]

  var aux = [
    {campoNome: "Carlos Emanuel", campoImagem: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', campoCargo: "Auxiliar"},
    {campoNome: "Robson Santos",campoImagem: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  campoCargo: "Evangelista"},
    {campoNome: "Francisco Claúdino",campoImagem: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  campoCargo: "Diacono(a)"},
    {campoNome: "Nathalia Maria",campoImagem: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  campoCargo: "Membro"},
    {campoNome: "Ramos de Morais",campoImagem: 'https://images.pexels.com/photos/3831569/pexels-photo-3831569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  campoCargo: "Pastor"},
    {campoNome: "Jaqueline Aumeida",campoImagem: 'https://images.pexels.com/photos/8317651/pexels-photo-8317651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  campoCargo: "Misionario(a)"}
]

  const [colaboradores, setColaboradores] = useState(aux)
  
  const novocolaboradorCadastrado = (colaborador) =>{
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    
    <div className="App">
    
      <Banner />
      <Formulario cargosDisponiveis={cargos.map(cargo => cargo.nome)} 
        ColaboradorCadastrado={colaborador => novocolaboradorCadastrado(colaborador)}/>

      {cargos.map(cargo => <Time 
        key={cargo.nome}
        nomeCargo={cargo.nome}
        corPrimaria={cargo.corPrimaria}
        corSecundaria={cargo.corSecundaria}
        
        colaboradoreCadastrados={colaboradores.filter(colaborador =>  colaborador.campoCargo === cargo.nome)}
        />)}

        <Rodape/>
    </div>
  );
}

export default App;
