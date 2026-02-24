const About = () => {
    const levels = [
        { title: "Preescolar", detail: "1er Nivel - 3er Nivel", icon: "🎨" },
        { title: "Primaria", detail: "1er Grado - 6to Grado", icon: "📚" },
        { title: "Bachillerato", detail: "1er Año - 3er Año", icon: "🔬" },
        { title: "Bachillerato", detail: "4to Año - 5to Año", icon: "🎓" }
    ]

    const extras = [
        "Fútbol", "Voleibol", "Baile", "Tareas Dirigidas", "Canchas Deportivas"
    ]

    return (
        <section id="nosotros" className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Oferta Educativa</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Contamos con niveles educativos completos y actividades que complementan la formación integral de nuestros alumnos.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
                    {levels.map((level, idx) => (
                        <div key={idx} className="card group text-center p-4 md:p-6 hover:scale-105 transition-transform">
                            <div className="text-3xl md:text-4xl mb-3 md:mb-4">{level.icon}</div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">{level.title}</h3>
                            <p className="text-primary text-xs md:text-sm font-medium mt-1 md:mt-2">{level.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                <span className="text-accent">★</span> Actividades Extra-Curriculares
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {extras.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary/5 rounded-2xl p-8 border-2 border-dashed border-primary/20 text-center">
                            <span className="inline-block px-4 py-1 bg-accent text-primary text-sm font-bold rounded-full mb-4">
                                INSCRIPCIONES ABIERTAS
                            </span>
                            <h4 className="text-2xl font-bold text-primary mb-2">Cupos Disponibles</h4>
                            <p className="text-gray-600 mb-6">Únete a nuestra comunidad educativa para el próximo período escolar.</p>
                            <a href="https://wa.me/584121772899" target="_blank" className="btn-primary inline-block">
                                Consultar Disponibilidad
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
