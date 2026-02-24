const Mission = () => {
    const items = [
        {
            title: "Misión",
            text: "Brindar una educación de calidad que potencie las habilidades cognitivas, emocionales y sociales de nuestros alumnos en un ambiente de respeto.",
            icon: "🎯",
            color: "bg-blue-500"
        },
        {
            title: "Visión",
            text: "Ser reconocidos como una institución líder en innovación educativa, formando ciudadanos globales, éticos y comprometidos con su entorno.",
            icon: "👁️",
            color: "bg-amber-500"
        },
        {
            title: "Valores",
            text: "Promovemos la integridad, la responsabilidad, la solidaridad y el respeto mutuo como pilares fundamentales de nuestra comunidad.",
            icon: "⚖️",
            color: "bg-emerald-500"
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Fundamentos</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Inspirando el Mañana</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Nuestro compromiso trasciende las aulas, forjando un camino de excelencia y valores sólidos para cada uno de nuestros estudiantes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="group relative p-8 rounded-3xl bg-secondary border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2">
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-${item.color.split('-')[1]}-200 transition-transform duration-500 group-hover:rotate-12`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-inter font-light">
                                {item.text}
                            </p>

                            {/* Línea decorativa inferior */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mission
