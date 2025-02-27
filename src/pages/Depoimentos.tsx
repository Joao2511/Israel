export default function Depoimentos() {
    const depoimento = [
        {
            nome: "",
            cidade: "",
            descricao: "",
        }
    ]
    return (
        <>
            <div className="mt-12 px-16">
                <div className="border-b flex w-full mb-10">
                    <div className="w-1/2">
                        <p>DEPOIMENTOS</p>
                        <h1>O QUE OS CLIENTES FALAM</h1>
                        <p>NÚMERO TOTAL DE AVALIAÇÕES</p>
                        <p>323</p>
                    </div>
                    <div className="w-1/2">
                        <div className="flex gap-4 justify-end">
                            <div>
                                <button>⬅️</button>
                                <button>➡️</button>
                            </div>
                            <div>
                                <button>Ver todos os depoimentos</button>
                            </div>
                        </div>
                    </div>

                    <div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
