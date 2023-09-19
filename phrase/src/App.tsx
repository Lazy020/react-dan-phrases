import { useStat } from 'react'
import './App.css'
import Logo from "./assets/img1.jpg"

function App() {

const [texto, setTexto] = useState("")
const [categoria, setCategoria] = usestate(0)
const todasFrases = [
  {
    id: 1,
    nome: "Motivacional",
    phrase:["Você é espetacular!",
    "Tome um bom chá pela manhã!",
    "Lembre-se de que todos temos propósitos, nossa vida não é só o fim.",
    "Existem pessoas que se encantam com os talentos que têm!"]}
]

  return (
     <>
      <div className='container'>
      <img alt = "Logo Frases" src={Logo} className = 'logo'/>

      <h2 className='titulo'>Categorias</h2>
      <section className='area-categoria'>
        {todasFrases.map( (item, index) => (
        <button className='botao-categoria' key={item.id}
        style={{borderWidth: item.nome === todasFrases[categoriaSelecionada].nome? 2: 0, 
        borderColor: "blue"}}
        onClick={() => categoriaEscolhida(index)}
        >
         {item.nome}
        </button>
        ))}
      </section>
      <button className='botao-frase'>Gerar frase</button>

      {texto != '' && <p className='texto-frase'>{texto}</p>}
      
      </div>
    </>
  )
}

export default App
