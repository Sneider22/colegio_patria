import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-[14px] md:text-base font-black uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-700 group-hover:text-primary'}`}>
                    {question}
                </span>
                <span className={`text-xl transition-transform duration-500 ${isOpen ? 'rotate-180 text-gold' : 'text-gray-300'}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const Contact = () => {
    const contactInfo = [
        {
            icon: "📍",
            title: "Ubicación",
            content: "Av. Los Mangos, Los Chorros, Caracas 1071.",
            link: "https://maps.app.goo.gl/kTYyb83vgJTKnFa9A",
            color: "border-blue-500/20"
        },
        {
            icon: "📱",
            title: "WhatsApp",
            content: "+58 412 177 2899",
            link: "https://wa.me/584121772899",
            color: "border-green-500/20"
        },
        {
            icon: "✉️",
            title: "Correo",
            content: "sccolegiopatria@gmail.com",
            link: "mailto:sccolegiopatria@gmail.com",
            color: "border-red-500/20"
        },
        {
            icon: "⏰",
            title: "Horario",
            content: "Lun - Vie: 8:00am - 2:00pm",
            color: "border-amber-500/20"
        }
    ]

    const faqs = [
        {
            question: "¿CUÁLES SON LOS REQUISITOS DE INSCRIPCIÓN?",
            answer: "Los requisitos incluyen:\n\n• Partida de nacimiento (Original y copia).\n• 4 fotos tipo carnet del alumno.\n• 4 fotos tipo carnet de los representantes.\n• Notas certificadas (para bachillerato).\n• Solvencia administrativa del colegio de procedencia."
        },
        {
            question: "¿OFRECEN ACTIVIDADES EXTRACURRICULARES?",
            answer: "Sí, contamos con una amplia oferta que incluye futbol, voleibol, baile y tareas dirigidas, diseñadas para complementar la formación académica de nuestros estudiantes."
        },
        {
            question: "¿CUÁL ES EL HORARIO DE CLASES REGULAR?",
            answer: "El horario académico general es de 7:00 am a 1:00 pm para primaria y hasta las 2:00 pm para bachillerato, dependiendo de la carga académica del día."
        },
        {
            question: "¿CÓMO PUEDO SOLICITAR UNA CONSTANCIA?",
            answer: "Las constancias se solicitan directamente en la oficina de administración en horario de atención al público. El tiempo de entrega es de aproximadamente 48 a 72 horas hábiles."
        }
    ]

    return (
        <section id="contacto" className="py-24 bg-white animate-fade-in relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mb-4 block">Contacto Institucional</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6">Portal de Atención</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-24 items-center">
                    {/* Contact Info Column - Professional App-style Grid (First on Mobile) */}
                    <div className="lg:col-span-5 order-first lg:order-last">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            {contactInfo.map((info, idx) => {
                                const CardContent = (
                                    <div className="h-full flex flex-col items-center justify-center p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-primary/20 bg-secondary/40 transition-all duration-500 text-center hover:bg-white hover:border-primary/40 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3 cursor-pointer group">
                                        <div className="text-4xl md:text-6xl mb-6 flex items-center justify-center filter drop-shadow-lg group-hover:scale-110 transition-transform duration-700">
                                            {info.icon}
                                        </div>
                                        <h4 className="font-black text-gray-900 mb-2 uppercase tracking-tighter text-xs md:text-lg leading-none">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-500 text-[11px] md:text-xs font-bold leading-tight max-w-[120px] md:max-w-none">
                                            {info.content}
                                        </p>
                                    </div>
                                );

                                return info.link ? (
                                    <a
                                        key={idx}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full"
                                    >
                                        {CardContent}
                                    </a>
                                ) : (
                                    <div key={idx} className="h-full">
                                        {CardContent}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Maps Column (Second on Mobile, First on Desktop) */}
                    <div className="lg:col-span-7 order-last lg:order-first h-[400px] md:h-[650px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-gray-50 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.909068032704!2d-66.8331309252495!3d10.499446700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59c849f73bcf%3A0xf5f34e3cfacec42!2zVW5pZGFkIEVkdWNhdGl2YSBDb2xlZ2lvIFBhdHJpYSBMb3MgQ2hvcnJvcyBJbnN0aXR1c2lvbg!5e0!3m2!1ses!2sve!4v1740452356000!5m2!1ses!2sve"
                            className="w-full h-full border-0 transition-all duration-1000"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="absolute top-4 left-4 pointer-events-none md:top-8 md:left-8">
                            <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl flex items-center gap-4 md:gap-6 border-2 border-primary/20">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg text-xl md:text-3xl">
                                    📍
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-[11px] font-black uppercase text-primary tracking-[0.2em] leading-none mb-1.5">Nuestra Sede</p>
                                    <p className="text-[13px] md:text-[16px] font-black text-gray-900 tracking-tight">Los Chorros, Caracas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 border-b-2 border-primary/10 pb-6">
                        <div>
                            <span className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mb-2 block">Resolución de Dudas</span>
                            <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">Preguntas Frecuentes</h3>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-primary/10 text-7xl font-black">?</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] md:rounded-[3rem]">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} {...faq} />
                        ))}
                    </div>

                    <div className="mt-16 py-8 border-t border-gray-50 flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm mb-4">
                            ℹ️
                        </div>
                        <p className="text-gray-400 text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] max-w-md">
                            Si tienes consultas adicionales, nuestro equipo está a tu disposición a través de los canales oficiales.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
