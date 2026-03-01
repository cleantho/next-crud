import Cliente from "@/core/Cliente";
import { pencilSquare, trash } from "./IconeJsx";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

  function renderizarCabecalho() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
        {exibirAcoes ? <th>Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={i % 2 == 0 ? "bg-purple-200" : "bg-purple-100"}
        >
          <td className="p-4 text-right">{cliente.id}</td>
          <td className="p-4 text-left">{cliente.nome}</td>
          <td className="p-4 text-center">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="p-4 text-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className="text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
          >
            {pencilSquare}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className="text-red-500 rounded-full p-2 m-1 hover:bg-purple-50"
          >
            {trash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-md overflow-hidden">
      <thead
        className={`
        text-gray-100 
        bg-linear-to-r from-purple-500 to-purple-800`}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
