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
        <section id="simbolos" className="py-20 bg-white animate-fade-in min-h-[70vh] flex items-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Identidad</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Himnos y Símbolos</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start max-w-5xl mx-auto">
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`text-left p-6 rounded-3xl border-2 transition-all duration-500 font-bold uppercase text-[10px] tracking-widest ${activeItem === item.id
                                    ? 'border-primary bg-primary text-white scale-105 shadow-xl shadow-primary/20'
                                    : 'border-gray-100 text-gray-500 hover:border-accent hover:bg-accent/5'
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    <div className="w-full lg:w-2/3 min-h-[300px] p-10 md:p-16 rounded-[3rem] bg-secondary border border-gray-100 flex items-center justify-center relative overflow-hidden group shadow-inner">
                        {activeItem ? (
                            <div className="animate-fade-in text-center lg:text-left relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary tracking-tight">
                                    {items.find(i => i.id === activeItem).title}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic font-light">
                                    "{items.find(i => i.id === activeItem).content}"
                                </p>
                            </div>
                        ) : (
                            <div className="text-gray-400 text-center relative z-10">
                                <p className="text-sm uppercase tracking-widest font-black opacity-50">Selecciona un elemento para descubrir su historia</p>
                            </div>
                        )}
                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[80px]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hymns
