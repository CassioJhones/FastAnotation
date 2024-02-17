import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'
interface PropsDoCardNotas {
  note: {
    id:string
    date: Date
    content: string
  }
  DeletarAnotacao: (id:string) =>void
}
export function CardNotas({ note,DeletarAnotacao }: PropsDoCardNotas) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className=' outline-none flex flex-col  rounded-md text-left bg-slate-700 p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-lime-400 focus-visible:ring-2 '>
        <span className='text-sm font-medium text-slate-300'>
          {note.date.toISOString()}
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          {note.content}
        </p>
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
      </Dialog.Trigger>

      {/* Modal ao clicar no card */}
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="inset-0 md:inset-auto overflow-hidden outline-none md:max-w-[640px] w-full bg-slate-700 md:rounded-md flex flex-col fixed md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2  md:h-[60vh]  " >

          <Dialog.Close className="absolute right-2 top-2 bg-slate-800 p-1.5 text-slate-400 hover:bg-slate-900  hover:text-red-400"  >
            <X className="size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className='text-sm font-medium text-slate-300'>
              {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
            </span>
            <p className='text-sm leading-6 text-slate-400'>
              {note.content}
            </p>
          </div>

          <button onClick={()=> DeletarAnotacao(note.id)} 
          type="button" className=" hover:bg-slate-900 outline-none text-red-400 text-lg md:text-sm w-full bg-slate-800 py-9 md:py-5 text-center font-medium">
            Apagar essa nota </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

//addSuffix: true coloca um prefixo na marcacao do tempo dentro do modal