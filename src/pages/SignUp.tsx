import { Input } from "../components/Input"
import { Button } from "../components/Button"

import { useState } from "react"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwdConfirm, setPwdConfirm] = useState("")
  const [isLoading, setIsloading] = useState(false)
  
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(name, email, pwd, pwdConfirm)

    if(pwd !== pwdConfirm){
      return alert("Senhas diferentes")
    }

    setEmail("")
    setPwd("")
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
       required
       name="Nome"
       type="name"
       placeholder="Seu nome"
       onChange={(e) => setName(e.target.value)}
       value={name}
      />

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

      <Input
       required
       name="Confirmação da Senha"
       type="password"
       placeholder="1234567"
       onChange={(e) => setPwdConfirm(e.target.value)}
       value={pwdConfirm}
      />

      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  )
}
