export function NotFound() {
  return (
    <div className="w-full min-h-screen h-auto flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">Ops! Essa página não existe. 🥲</h1>
        
        <a
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
          href="/"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  )
}
