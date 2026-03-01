"use client";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 20, "2"),
    new Cliente("Carlos", 50, "3"),
    new Cliente("Pedro", 32, "4"),
  ];
  
  function selecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form")
  }

  function excluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel("form")
  }

  function salvarCliente(cliente:Cliente){
    console.log(cliente)
    setVisivel("tabela")
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
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className={`mb-4`}
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionado}
              clienteExcluido={excluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
