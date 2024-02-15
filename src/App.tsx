import { useState } from 'react'
import { CardNotas } from './Componentes/CardNotas'
import { NovoCardNotas } from './Componentes/NovoCardNotas'
import Logo from './assets/LogoNlw.svg'
//o componente é renderizado sempre que o estado muda

interface INote {
  notaID: string,
  date: Date,
  content: string,
}


export function App() {
  const [notas, setNotas] = useState<INote[]>([])

  function onCriandoAnotacao(content: string) {
    const novaAnotacao = {
      notaID: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    setNotas([novaAnotacao, ...notas])
  }

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt='text expert' />
      <form className='w-full'>
        <input type='text' placeholder='Busque em suas notas...'
          className='p-2 w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500' />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NovoCardNotas onCriandoAnotacao={onCriandoAnotacao} />
        {notas.map(note => {
          return <CardNotas key={note.notaID} anotacao={note} />
        })}
      </div>
    </div>
  )
}