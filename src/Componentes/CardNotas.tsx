export function CardNotas(){
    return(

        <button className='focus-visible:ring-2 outline-none focus-visible:ring-lime-400 rounded-md text-left bg-slate-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600'>
          <span className='text-sm font-medium text-slate-300'>
            Há 2 Dias</span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione non dolorum excepturi ipsum laudantium id? Accusantium sit veritatis laboriosam tenetur est illo dignissimos, neque dicta dolores autem, error, possimus similique!</p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </button>
    )
}