import { CardNotas } from './Componentes/CardNotas'
import { NovoCardNotas } from './Componentes/NovoCardNotas'
import Logo from './assets/LogoNlw.svg'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt='text expert' />
      <form className='w-full'>
        <input type='text' placeholder='Busque em suas notas...'
          className='p-2 w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>
      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>

        <NovoCardNotas />
        <CardNotas note={{
          date: new Date(),
          content: 'Comprar Ração para os cachorros, e remedio para os gatos beber'
        }} />

        <CardNotas note={{
          date: new Date(),
          content: 'Instalar Ar-Condicionado no eldorado'
        }} />


      </div>
    </div>
  )
}