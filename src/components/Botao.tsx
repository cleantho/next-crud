import { ReactNode } from "react"

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: ReactNode
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'blue'
    return (
        <button className={`
            bg-linear-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}