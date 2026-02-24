const Contact = () => {
    const contactInfo = [
        {
            icon: "📍",
            title: "Dirección",
            content: "Av. Los Mangos, Los Chorros, estado Miranda, Caracas 1071.",
            link: "https://share.google/v4SQyMflvb5bni0qW"
        },
        {
            icon: "📞",
            title: "WhatsApp",
            content: "+58 412 177 2899",
            link: "https://wa.me/584121772899"
        },
        {
            icon: "✉️",
            title: "Email",
            content: "sccolegiopatria@gmail.com",
            link: "mailto:sccolegiopatria@gmail.com"
        },
        {
            icon: "🕒",
            title: "Administración",
            content: "Lun - Vie: 8:00 am - 2:00 pm"
        }
    ]

    return (
        <section id="contacto" className="py-20 bg-white animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Ubicación</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Estamos para Ayudarte</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="p-6 bg-secondary rounded-[2rem] border border-gray-100 group hover:border-primary transition-all duration-500 text-center sm:text-left hover:shadow-xl">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{info.icon}</div>
                                <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-lg">{info.title}</h4>
                                <p className="text-gray-600 text-[10px] md:text-sm mb-4 leading-relaxed font-light">{info.content}</p>
                                {info.link && (
                                    <a
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-bold text-[10px] uppercase tracking-wider hover:text-accent transition-colors flex items-center justify-center sm:justify-start gap-2"
                                    >
                                        Ir ahora <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative group border-8 border-white">
                        <img
                            src="https://via.placeholder.com/600x450?text=Ubicacion+Colegio+Patria"
                            alt="Mapa ubicación Colegio Patria"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
                        <a
                            href="https://share.google/v4SQyMflvb5bni0qW"
                            target="_blank"
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 text-white font-bold backdrop-blur-sm"
                        >
                            <span className="bg-white text-primary px-8 py-3 rounded-full shadow-2xl">Ver mapa real</span>
                        </a>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-12 h-12 bg-accent rounded-full animate-ping absolute"></div>
                            <div className="w-12 h-12 bg-accent rounded-full relative flex items-center justify-center text-white text-2xl shadow-xl shadow-accent/50">
                                📍
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
