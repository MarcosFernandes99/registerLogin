import Link from "next/link";
import Head from "next/head";
import Swal from "sweetalert2"
import { useState } from "react";


export default function Login() {
  const [nameLogin, setNameLogin] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('')

  const login = () => {
    const storeddata = localStorage.getItem("dados")
    const dataObject = JSON.parse(storeddata || '{}')

    if (emailLogin === dataObject.email && passwordLogin === dataObject.password) {

      Swal.fire(
        'Login feito com sucesso!',
        '',
        'success'
      )
      setNameLogin('');
      setEmailLogin('');
      setPasswordLogin('')
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
      <Head>
        <title>Login!</title>
      </Head>
      <section className="font-mono font-semibold flex flex-col w-80 mx-auto mt-20 bg-indigo-700 rounded-xl p-3">
        <h1 className="h-10 flex items-center justify-center text-7x1 text-white underline font-bold">Faça o login!</h1>
        <input className="h-10 mt-5 rounded-xl px-2" type="text" placeholder="Email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
        <input className="h-10 mt-5 rounded-xl px-2" type="text" placeholder="Senha" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
        <button className="h-10 mt-10 text-xl bg-violet-400 rounded-xl p-2 font-bold" type="submit" onClick={login}>Login!</button>

        <Link className="flex items-center justify-center mx-auto mt-20 h-10 w-60 bg-indigo-50 text-xl rounded-xl font-bold p-2" href="/">Registar nova conta!</Link>
      </section>
    </>
  )
}