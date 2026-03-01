'use client'
import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 20, "2"),
    new Cliente("Carlos", 50, "3"),
    new Cliente("Pedro", 32, "4"),
  ];

  function selecionado(cliente: Cliente) {
    console.log(cliente.nome) 
  }
  
  function excluido(cliente: Cliente) {
    console.log(cliente.nome) 
  }

  return (
    <div
      className={`
      flex min-h-screen justify-center items-center
      bg-linear-to-r from-blue-500 to-purple-400
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
        <Botao cor="green" className={`mb-4`}>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={selecionado} clienteExcluido={excluido}/>
      </Layout>
    </div>
  );
}
