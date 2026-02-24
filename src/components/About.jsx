const About = () => {
    const levels = [
        { title: "Preescolar", detail: "1er Nivel - 3er Nivel", image: "/images/preescolar.jpg" },
        { title: "Primaria", detail: "1er Grado - 6to Grado", image: "/images/primaria.jpg" },
        { title: "Bachillerato", detail: "1er Año - 3er Año", image: "/images/bachillerato1.jpg" },
        { title: "Bachillerato", detail: "4to Año - 5to Año", image: "/images/bachillerato2.jpg" }
    ]

    const extras = [
        "Fútbol", "Voleibol", "Baile", "Tareas Dirigidas", "Canchas Deportivas"
    ]

    return (
        <section id="nosotros" className="py-24 bg-secondary animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter uppercase">Nuestra Oferta</h2>
                    <div className="w-16 h-2 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {levels.map((level, idx) => (
                        <div key={idx} className="group relative bg-white rounded-[2.5rem] shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                            <div className="h-48 bg-gray-100 relative">
                                <img
                                    src={level.image}
                                    alt={level.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />
                                <div className="absolute inset-0 hidden items-center justify-center bg-gray-50 p-6 text-center text-gray-300">
                                    <p className="text-[8px] uppercase font-black tracking-widest">Subir: {level.image}</p>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-primary transition-colors">{level.title}</h3>
                                <p className="text-primary text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{level.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[-20px_20px_60px_#bebebe,20px_-20px_60px_#ffffff] flex flex-col lg:flex-row gap-16 items-center border border-gray-50">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 flex items-center gap-6">
                            <span className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-2xl rotate-3 group-hover:rotate-12 transition-transform">✦</span>
                            Cocurriculares
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                            {extras.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-gray-900 font-black uppercase text-[10px] tracking-widest group cursor-default">
                                    <div className="w-3 h-[3px] bg-accent group-hover:w-8 transition-all duration-500"></div>
                                    <span className="group-hover:text-primary transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray-900 p-12 md:p-16 rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full -mr-24 -mt-24 blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
                        <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">Admisiones</h4>
                        <p className="text-white/60 mb-10 font-bold tracking-widest uppercase text-[10px]">Forma parte de nuestra historia académica.</p>
                        <a href="https://wa.me/584121772899" target="_blank" className="inline-block bg-white text-gray-900 font-black uppercase tracking-widest text-[11px] px-12 py-5 rounded-full hover:bg-accent transition-all duration-500 shadow-2xl active:scale-95">
                            CONSULTAR CUPO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
