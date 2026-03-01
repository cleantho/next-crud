import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import db from "../config";
import {
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    collection,
    addDoc,
    getDocs,
    setDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

export default class ColecaoCliente implements ClienteRepositorio {
    #conversor: FirestoreDataConverter<Cliente> = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            };
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options?: SnapshotOptions): Cliente {
            const dados = snapshot.data(options)!;
            return new Cliente(dados.nome, dados.idade, snapshot?.id);
        },
    }

    private colecao = collection(db, "clientes").withConverter(this.#conversor);

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente.id) {
            const docRef = doc(db, "clientes", cliente.id).withConverter(this.#conversor);
            await setDoc(docRef, cliente);
            return cliente;
        } else {
            const docRef = await addDoc(this.colecao, cliente);
            return new Cliente(cliente.nome, cliente.idade, docRef.id);
        }

    }

    async excluir(cliente: Cliente): Promise<void> {
        if (!cliente.id) return;
        const docRef = doc(db, "clientes", cliente.id);
        await deleteDoc(docRef);
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.colecao);
        return querySnapshot.docs.map((doc) => doc.data());
    }
}