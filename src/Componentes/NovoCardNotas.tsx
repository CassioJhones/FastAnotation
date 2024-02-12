import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

export function NovoCardNotas() {
  return (
    <Dialog.Root>
      <button className='rounded-md bg-slate-700 p-5 space-y-3'>
        <span className='text-sm font-medium text-slate-200'>
          Adicionar Nota</span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota usando o microfone, que será convertido para texto</p>
      </button>
    </Dialog.Root>

  )
}