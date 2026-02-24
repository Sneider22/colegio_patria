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
            title: "Horario Administrativo",
            content: "Lunes a Viernes: 8:00 am - 2:00 pm"
        }
    ]

    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contáctanos</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="p-4 md:p-6 bg-secondary rounded-2xl border border-gray-100 group hover:border-primary transition-colors text-center sm:text-left">
                                <div className="text-2xl md:text-3xl mb-3 md:mb-4">{info.icon}</div>
                                <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{info.title}</h4>
                                <p className="text-gray-600 text-[10px] md:text-sm mb-3 md:mb-4 leading-relaxed">{info.content}</p>
                                {info.link && (
                                    <a
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-bold text-xs uppercase tracking-wider hover:text-accent transition-colors"
                                    >
                                        {info.title === "Dirección" ? "Ver mapa" : info.title === "WhatsApp" ? "Enviar mensaje" : "Escribir correo"} →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl relative group border-8 border-white">
                        <img
                            src="https://via.placeholder.com/600x450?text=Ubicacion+Colegio+Patria"
                            alt="Mapa ubicación Colegio Patria"
                            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                        <a
                            href="https://share.google/v4SQyMflvb5bni0qW"
                            target="_blank"
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white font-bold"
                        >
                            Haz clic para ver la ubicación real
                        </a>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-8 h-8 bg-accent rounded-full animate-ping absolute"></div>
                            <div className="w-8 h-8 bg-accent rounded-full relative flex items-center justify-center text-white text-xl">
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
