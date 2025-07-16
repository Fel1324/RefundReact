import { Input } from "../components/Input"
import { Button } from "../components/Button"

import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [isLoading, setIsloading] = useState(false)
  
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(email, pwd)

    setEmail("")
    setPwd("")
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
       required
       name="E-mail"
       type="email"
       placeholder="seu@email.com"
       onChange={(e) => setEmail(e.target.value)}
       value={email}
      />

      <Input
       required
       name="Senha"
       type="password"
       placeholder="1234567"
       onChange={(e) => setPwd(e.target.value)}
       value={pwd}
      />

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  )
}
