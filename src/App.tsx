import logo from './assets/logo-nlw.svg'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="NLW Expert" />

      <form className='w-full'>
        <input 
        type="text" 
        placeholder='Busque em suas notas...'
        className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500'/>
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-200'>Adicionar Nota</span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>
        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-200'>Há 2 dias</span>
          <p className='text-sm leading-6 text-slate-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, enim suscipit expedita officia esse quas placeat eveniet consequuntur vitae repellat aspernatur recusandae voluptates natus pariatur iste quod doloremque, provident nobis.
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'></div>

        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-200'>Há 4 dias</span>
          <p className='text-sm leading-6 text-slate-300'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi illo, aut sunt earum voluptas beatae velit modi veniam nulla a harum sequi quasi quia cum ipsa. Labore, sapiente expedita. Blanditiis.
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'></div>
        </div>
        
      </div>
    </div>
  )
}

