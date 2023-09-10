import Head from "next/head"
import "../app/globals.css"
import Link from "next/link"
import Swal from "sweetalert2"
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const register = () => {    

      if (name && email && password) {
        const data ={
          name,
          email,
          password
        }

      localStorage.setItem("dados", JSON.stringify(data))

      Swal.fire(
        'Conta registrada com sucesso!',
        '',
        'success'
      )
      setName('');
      setEmail('');
      setPassword('')
    }
    else {
      Swal.fire(
        'Verifique se todos os campos foram preenchidos!',
        '',
        'error'
      )

    }
  }
 

  return (
    <>     
        <Head>
          <title>Register Login!</title>
        </Head>
        <section className="font-mono font-semibold flex flex-col w-80 mx-auto mt-20 bg-sky-700 p-3 rounded-xl">
          <h1 className="h-10 flex items-center justify-center text-7x1 text-white underline font-bold">Registre sua conta!</h1>
          <input className="h-10 mt-20 rounded-xl px-2" type="text" placeholder="Insira o seu nome" onChange={(e) => setName(e.target.value)} />
          <input className="h-10 mt-5 rounded-xl px-2" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input className="h-10 mt-5 rounded-xl px-2" type="text" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
          <button className="h-10 mt-10 text-xl bg-sky-400 rounded-xl p-2 font-bold" type="submit" onClick={register}>Registrar!</button>
          <Link className="flex items-center justify-center mx-auto mt-20 h-10 w-48 bg-sky-50 text-xl rounded-xl font-bold" href="/posts/login">Fazer login!</Link>
        </section>
    </>
  )
}