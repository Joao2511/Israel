import Teste from "../assets/teste.png"

export default function Servicos() {
    const servico = [
        "✴ Coverage for weddings, parties, corporate functions, and more.",
        "✴ Skilled photographers who know how to seize the moment.",
        "✴ A mix of candid and posed shots for a comprehensive story.",
        "✴ Quick turnaround for you to relive the day's highlights.",

    ]
    return (
        <>
            <div className="mt-12 px-16">
                <div className="border-b">
                    <p>SERVIÇOS</p>
                    <div>
                        <h1>MEU SERVIÇOS DE FOTOGRAFIA</h1>
                        <div>
                            <button>⬅️</button>
                            <button>➡️</button>
                        </div>
                        <button>Ver todos os serviços</button>
                    </div>
                </div>

                <div>
                    <div className="w-full">
                        <h1>EVENTOS</h1>
                        <p>Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.</p>
                        <div className="flex">
                            <div className="w-1/2">
                                <p>SERVIÇOS EM ALTA</p>
                                <div>
                                    <div>
                                        {servico.map((item, index) => (
                                            <div key={index} className="border rounded-xl">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src={Teste} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
