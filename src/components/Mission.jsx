const Mission = () => {
    const items = [
        {
            title: "Misión",
            text: "Brindar una educación de calidad que potencie las habilidades cognitivas, emocionales y sociales de nuestros alumnos en un ambiente de respeto.",
            image: "/images/mission.jpg",
            color: "bg-primary"
        },
        {
            title: "Visión",
            text: "Ser reconocidos como una institución líder en innovación educativa, formando ciudadanos globales, éticos y comprometidos con su entorno.",
            image: "/images/vision.jpg",
            color: "bg-accent"
        },
        {
            title: "Valores",
            text: "Promovemos la integridad, la responsabilidad, la solidaridad y el respeto mutuo como pilares fundamentales de nuestra comunidad.",
            image: "/images/values.jpg",
            color: "bg-emerald-600"
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden animate-fade-in">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 animate-slide-up">
                    <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Fundamentos</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Inspirando el Mañana</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {items.map((item, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-[3rem] bg-secondary border border-gray-100 transition-all duration-700 hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.12)] hover:-translate-y-4 animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
                            {/* Image Placeholder with Professional Overlay */}
                            <div className="h-64 bg-gray-100 relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />
                                <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 flex-col gap-4 p-8 text-center text-gray-400">
                                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-xl font-black">?</div>
                                    <p className="text-[9px] uppercase font-black tracking-widest leading-tight opacity-50">
                                        Subir imagen a:<br />
                                        <span className="text-primary mt-1 block">{item.image}</span>
                                    </p>
                                </div>
                                <div className={`absolute top-6 left-6 px-6 py-2 ${item.color} text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg`}>
                                    {item.title}
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-sm italic">
                                    "{item.text}"
                                </p>
                                <div className="mt-8 pt-8 border-t border-gray-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mission
