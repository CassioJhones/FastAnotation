import * as Dialog from "@radix-ui/react-dialog"
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from 'sonner'

interface PropsCardNovo {
  onCriandoAnotacao: (content: string) => void
}

export function NovoCardNotas({ onCriandoAnotacao }: PropsCardNovo) {
  const [deveAparecer, SetDeveAparecer] = useState(true)
  const [conteudo, SetConteudo] = useState('')
  const [gravando, SetGravando] = useState(false)

  function usuarioAtivouEditor() {
    SetDeveAparecer(false)
  }

  function usuarioDigitando(event: ChangeEvent<HTMLTextAreaElement>) {
    SetConteudo(event.target.value)
    if (event.target.value === '') {
      SetDeveAparecer(true)
    }
  }

  function usuarioSalvouNota(event: FormEvent) {
    // remove o comportamento padrao do botao
    event.preventDefault()

    if (conteudo === '') {
      toast.error('Nota Vazia nao Permitida')
      return
    }

    onCriandoAnotacao(conteudo)
    toast.success('Nota Criada com Sucesso')
    SetConteudo('')
    SetDeveAparecer(true)
  }

  function UsuarioIniciouGravacao() {
    SetGravando(true)
  }

  function UsuarioParouGravacao() {
    SetGravando(false)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex flex-col text-left rounded-md bg-slate-700 p-5 gap-3 hover:ring-2 hover:ring-slate-600 focus-visible:ring-lime-400 focus-visible:ring-2 ' >
        <span className='text-sm font-medium text-slate-200'>
          Adicionar Nota</span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota usando o microfone, que será convertido para texto</p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="overflow-hidden outline-none h-[70vh] max-w-[658px] w-full bg-slate-700 rounded-md flex flex-col fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2   " >
          <Dialog.Close className="absolute right-2 top-2 bg-slate-800 p-1.5 text-slate-400 hover:bg-slate-900  hover:text-red-400"  >
            <X className="size-5" />
          </Dialog.Close>

          <form className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className='text-sm font-medium text-slate-300'>
                Adicionar Nota
              </span>

              {deveAparecer ? (
                <p className='text-sm leading-6 text-slate-400'>
                  Comece <button type="button" onClick={UsuarioIniciouGravacao} className="font-medium text-lime-400 hover:underline"> gravando uma nota </button> em audio usando o microfone, ou se preferir <button type="button" onClick={usuarioAtivouEditor} className="font-medium text-lime-400 hover:underline">  utilize apenas texto</button>
                </p>)
                :
                (
                  <textarea autoFocus
                    className="resize-none text-slate-400 text-lg leading-6 bg-transparent flex-1 outline-none "
                    onChange={usuarioDigitando}
                    value={conteudo}
                  />
                )}
            </div>

            {gravando ?
              (<button
                onClick={UsuarioParouGravacao}
                type="button"
                className="flex items-center justify-center gap-2 hover:bg-lime-600 hover:text-slate-100 outline-none text-slate-300 text-sm w-full bg-slate-900 py-5 text-center font-bold">
                <div className="flex items-center justify-center rounded-full bg-red-600 size-3 animate-pulse" /> Gravando
              </button>) :
              (<button
                onClick={usuarioSalvouNota}
                type="button"
                className=" hover:bg-lime-600 outline-none text-lime-950 text-sm w-full bg-lime-400 py-5 text-center font-bold">
                Salvar Nota
              </button>)}


          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
