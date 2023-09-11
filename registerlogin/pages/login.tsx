import Head from "next/head";
import Swal from "sweetalert2"
import { useState } from "react";
import NewsTopHeadlines from "./newsTopHeadlines";
import ButtonRegister from "@/components/ButtonRegister";


export default function Login() {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('')
  const [controlLogin, setControlLogin] = useState(false)

  const login = () => {
    const storeddata = localStorage.getItem("dados")
    const dataObject = JSON.parse(storeddata || '{}')

    if (emailLogin === dataObject.email && passwordLogin === dataObject.password) {

      Swal.fire(
        'Login feito com sucesso!',
        '',
        'success'
      )
      setEmailLogin('');
      setPasswordLogin('')
      setControlLogin(true)

    }
    else {
      Swal.fire(
        'Dados incorretos!',
        '',
        'error'
      )
    }
  }

  return (
    <>
      {!controlLogin ? (
        <>
          <Head>
            <title>Login!</title>
          </Head>
          <section className="font-mono font-semibold flex flex-col w-80 mx-auto mt-20 bg-white rounded-xl p-3">
            <h1 className="h-10 flex items-center justify-center text-3xl text-black font-bold">ACESSE SUA CONTA</h1>
            <input className="h-10 mt-5 rounded-xl px-2 bg-sky-100" type="text" placeholder="Email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
            <input className="h-10 mt-5 rounded-xl px-2 bg-sky-100" type="text" placeholder="Senha" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
            <ButtonRegister label="LOGIN" onClick={login}/>
          </section>
        </>
      ) : <NewsTopHeadlines />}
    </>
  )
}