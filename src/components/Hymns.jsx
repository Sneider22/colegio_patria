import { useState } from 'react'

const Hymns = () => {
    const [activeItem, setActiveItem] = useState(null)

    const items = [
        {
            id: 1,
            title: "Himno del Colegio",
            content: "Coro: ¡Oh Colegio Patria, luz de saber! Estrofa I: En tus aulas se forjan los sueños, con la pluma y la fe por blasón... (Contenido detallado del himno aquí)."
        },
        {
            id: 2,
            title: "Nuestro Escudo",
            content: "El escudo simboliza la fortaleza del conocimiento mediante el libro abierto, y la esperanza del futuro con el sol naciente en su centro."
        },
        {
            id: 3,
            title: "Bandera Institucional",
            content: "Sus colores azul y blanco representan la transparencia del espíritu y la profundidad de la búsqueda de la verdad."
        }
    ]

    return (
        <section id="simbolos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Himnos y Símbolos</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`text-left p-4 rounded-lg border-2 transition-all duration-300 ${activeItem === item.id
                                        ? 'border-primary bg-primary/5 text-primary scale-105'
                                        : 'border-gray-100 hover:border-accent hover:bg-accent/5'
                                    }`}
                            >
                                <span className="font-bold">{item.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="w-full lg:w-2/3 min-h-[250px] p-8 rounded-2xl bg-secondary border border-gray-100 flex items-center justify-center relative overflow-hidden">
                        {activeItem ? (
                            <div className="animate-fade-in text-center lg:text-left">
                                <h3 className="text-2xl font-bold mb-6 text-primary">
                                    {items.find(i => i.id === activeItem).title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed italic">
                                    "{items.find(i => i.id === activeItem).content}"
                                </p>
                            </div>
                        ) : (
                            <div className="text-gray-400 text-center">
                                <p>Selecciona un símbolo o himno para ver su historia y significado.</p>
                            </div>
                        )}
                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hymns
