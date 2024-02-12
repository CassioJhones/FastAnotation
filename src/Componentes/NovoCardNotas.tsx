import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

export function NovoCardNotas() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex flex-col text-left rounded-md bg-slate-700 p-5 gap-3 hover:ring-2 hover:ring-slate-600 focus-visible:ring-lime-400 focus-visible:ring-2 ' >
        <span className='text-sm font-medium text-slate-200'>
          Adicionar Nota</span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota usando o microfone, que será convertido para texto</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="overflow-hidden outline-none max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  h-[60vh]  " >

          <Dialog.Close className="absolute right-2 top-2 bg-slate-800 p-1.5 text-slate-400 hover:bg-slate-900  hover:text-red-400"  >
            <X className="size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className='text-sm font-medium text-slate-300'>
              Adicionar Nota
            </span>
            <p className='text-sm leading-6 text-slate-400'>
              <button className="font-bold text-lime-400 hover:underline"> Grave uma nota</button> em audio usando o microfone, ou se preferir <button className="font-bold text-lime-400 hover:underline"> utilize apenas texto</button>
            </p>
          </div>

          <button type="button" className=" hover:bg-lime-600 outline-none text-lime-950 text-sm w-full bg-lime-400 py-5 text-center font-bold">
            Salvar Nota </button>
        </Dialog.Content>
      </Dialog.Portal>


    </Dialog.Root>
  )
}