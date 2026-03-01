import { useEffect, useState } from "react";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import useVisivel from "./useVisivel";

export default function useClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const repo: ClienteRepositorio = new ColecaoCliente();

    const { exibirTabela, exibirFormulario, tabelaVisivel } = useVisivel()

    useEffect(obterTodos);

    function obterTodos() {
        repo.obterTodos().then(setClientes);
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    function novoCliente() {        
        setCliente(Cliente.vazio());
        exibirFormulario();        
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
        exibirTabela();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
    }

    return {
        cliente,
        clientes,
        selecionarCliente, 
        novoCliente, 
        salvarCliente, 
        excluirCliente,
        tabelaVisivel,
        exibirTabela
    }
}