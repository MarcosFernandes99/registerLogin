import Link from "next/link";
import Head from "next/head";
import Swal from "sweetalert2"

export default function Login() {
  const login = () => {
    const inputNome: any = document.getElementById('nome')
    const inputEmail: any = document.getElementById('email')
    const inputSenha: any = document.getElementById('senha')
    const dadosArmazenados = localStorage.getItem("dados")
    const dadosObjeto = JSON.parse(dadosArmazenados || '{}')

    if(inputNome.value == dadosObjeto.nome && inputEmail.value == dadosObjeto.email && inputSenha.value == dadosObjeto.senha){
      
      Swal.fire(
        'Login feito com sucesso!',
        '',
        'success'
      )

      inputNome.value =""
      inputEmail.value =""
      inputSenha.value =""
    }
    else{
      Swal.fire(
        'Dados incorretos!',
        '',
        'error'
      )
    }
  }
    return(
        <>
          <Head>
            <title>Login!</title>
          </Head>
          <section className="font-mono font-semibold flex flex-col w-80 mx-auto mt-20 bg-indigo-700 rounded-xl p-3">
              <h1 className="h-10 flex items-center justify-center text-7x1 text-white underline font-bold">Faça o login!</h1>
              <input className="h-10 mt-20 rounded-xl px-2" id="nome" type="text" placeholder="Insira o seu nome" />
              <input className="h-10 mt-5 rounded-xl px-2" id="email" type="text" placeholder="Email" />
              <input className="h-10 mt-5 rounded-xl px-2" id="senha" type="text" placeholder="Senha"/>
              <button className="h-10 mt-10 text-xl bg-violet-400 rounded-xl p-2 font-bold" type="submit" onClick={login}>Login!</button>
              <Link className="flex items-center justify-center mx-auto mt-20 h-10 w-60 bg-indigo-50 text-xl rounded-xl font-bold p-2" href="/">Registar nova conta!</Link>
          </section>
        </>
      )
}