import { ReactNode } from "react";

interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: ReactNode;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "blue";

// Removido pós adicão do arquivo tailwind.config.js
//   const cores: Record<string, string> = {
//     blue: "from-blue-400 to-blue-700",
//     green: "from-green-400 to-green-700",
//     gray: "from-gray-400 to-gray-700",
//   };
//   bg-linear-to-r ${cores[cor]}

  return (
    <button
      className={`
            bg-linear-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md           
            ${props.className ?? ""}
        `}
    >
      {props.children}
    </button>
  );
}
