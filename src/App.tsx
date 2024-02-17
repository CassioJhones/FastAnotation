import { ChangeEvent, useState } from 'react'
import { CardNotas } from './Componentes/CardNotas'
import { NovoCardNotas } from './Componentes/NovoCardNotas'
import Logo from './assets/LogoNlw.svg'
//o componente é renderizado sempre que o estado muda

interface INote {
  id: string
  date: Date
  content: string
}

export function App() {
  const [busca, SetBusca] = useState('')
  const [notas, setNotas] = useState<INote[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    
    // processo inverso do stringfy usado antes
    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }
    
    return []
  })

  function UsuarioBuscandoCard(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    SetBusca(query)
  }

  function onCriandoAnotacao(content: string) {
    const novaAnotacao = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const ArrayNotas = [novaAnotacao, ...notas]
    setNotas(ArrayNotas)

    // localStorage nao aceita Array, por isso necessario converter o array para JSON
    localStorage.setItem('notes', JSON.stringify(ArrayNotas))
  }

  const NotasFiltradas = busca !== ''
    ? notas.filter(notas => notas.content.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))
    : notas

function DeletarAnotacao(id:string){
const ArrayNotas = notas.filter(note =>{
  return note.id!==id
})

setNotas(ArrayNotas)
localStorage.setItem('notaSalva', JSON.stringify(ArrayNotas))

}

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5 '>
      <img src={Logo} alt='text expert' />
      <form className='w-full'>
        <input
          onChange={UsuarioBuscandoCard}
          type='text' placeholder='Busque em suas notas...'
          className='p-2 w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500' />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-1 md:lg:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6'>
        <NovoCardNotas onCriandoAnotacao={onCriandoAnotacao} />
        {NotasFiltradas.map(note => {
          return <CardNotas key={note.id} note={note} DeletarAnotacao={DeletarAnotacao}/>
        })}
      </div>
    </div>
  )
}