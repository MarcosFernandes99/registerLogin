import Head from "next/head"
import "../app/globals.css"
import Swal from "sweetalert2"
import { useState } from "react";
import Login from "./login";
import Viveo from "../public/viveo.png"
import Image from "next/image";
import ButtonRegister from "@/components/ButtonRegister";

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [controlRegister, setControlRegister] = useState(false)

  const handleButtonClick = () => {

    if (name && email && password) {
      const data = {
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
      setControlRegister(true)
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
    <>     {!controlRegister ? (
      <>
        <Head>
          <title>Register Login!</title>
        </Head>
        <section className="font-mono font-semibold flex flex-col w-80 mx-auto mt-20 bg-white p-3 rounded-xl">
          <h1 className="h-10 flex items-center justify-center text-3xl text-black font-bold">CRIAR NOVA CONTA</h1>
          <div className="flex flex-col justify-center items-center mt-6">
            <Image src={Viveo} alt="LogoViveo"></Image>
          </div>
          <input className="h-10 mt-10 rounded-xl px-2 bg-sky-100" type="text" placeholder="Insira o seu nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="h-10 mt-5 rounded-xl px-2 bg-sky-100" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="h-10 mt-5 rounded-xl px-2 bg-sky-100" type="text" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <ButtonRegister label="REGISTRAR"onClick={handleButtonClick}/>
        </section>
      </>
    ) : <Login />}

    </>
  )
}