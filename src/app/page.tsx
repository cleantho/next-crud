import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-linear-to-r from-blue-500 to-purple-400
      text-white
    `}>
     <Layout titulo="Cadastro Simples">
      <span>Conteudo</span>
     </Layout>
    </div>
  );
}
