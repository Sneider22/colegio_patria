import { useState, useEffect, useRef } from 'react'

const StatItem = ({ end, label, suffix = "" }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.5 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            if (countRef.current) observer.unobserve(countRef.current)
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [isVisible, end])

    return (
        <div ref={countRef} className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-black text-gold mb-2 tracking-tighter flex items-center transition-transform duration-500 group-hover:scale-110">
                {count}{suffix}
            </div>
            <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em] group-hover:text-white/60 transition-colors">
                {label}
            </div>
        </div>
    )
}

const About = ({ isFullView = false }) => {
    const [activeExtra, setActiveExtra] = useState(null)

    const levels = [
        { title: "Preescolar", detail: "1er Nivel - 3er Nivel", image: "/images/preescolar.jpg" },
        { title: "Primaria", detail: "1er Grado - 6to Grado", image: "/images/primaria.jpg" },
        { title: "Bachillerato", detail: "1er Año - 3er Año", image: "/images/bachillerato1.jpg" },
        { title: "Bachillerato", detail: "4to Año - 5to Año", image: "/images/bachillerato2.jpg" }
    ]

    const extras = [
        {
            id: 'futbol',
            title: "Fútbol",
            description: "Entrenamientos dirigidos para potenciar el trabajo en equipo y la disciplina deportiva.",
            image: "/images/extra_futbol.jpg"
        },
        {
            id: 'voleibol',
            title: "Voleibol",
            description: "Desarrollo de habilidades motrices y coordinación en un ambiente competitivo saludable.",
            image: "/images/extra_voleibol.jpg"
        },
        {
            id: 'baile',
            title: "Baile",
            description: "Expresión artística y rítmica que fomenta la confianza y la disciplina creativa.",
            image: "/images/extra_baile.jpg"
        },
        {
            id: 'tareas',
            title: "Tareas Dirigidas",
            description: "Refuerzo pedagógico personalizado para garantizar la excelencia académica.",
            image: "/images/extra_tareas.jpg"
        }
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
                            <div className="aspect-square bg-gray-100 relative">
                                <img
                                    src={level.image}
                                    alt={level.title}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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

                {/* Animated Stats Section */}
                <div className="mb-24 bg-footer-blue rounded-[3rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,86,179,0.1),transparent)]"></div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        <StatItem end={2000} label="Estudiantes Graduados" suffix="+" />
                        <StatItem end={1500} label="Familias Unidas" suffix="+" />
                        <StatItem end={60} label="Años de Historia" suffix="+" />
                        <StatItem end={100} label="Excelencia" suffix="%" />
                    </div>
                </div>

                {/* Extended "Our Team" Content - Only visible in full nosotros view */}
                {isFullView && (
                    <div className="mb-24 animate-slide-up">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">
                                    Nuestro <br />
                                    <span className="text-primary">Capital Humano</span>
                                </h3>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                    Contamos con un equipo de profesionales apasionados, comprometidos con la formación académica y humana de cada uno de nuestros estudiantes.
                                </p>
                            </div>
                            <div className="bg-primary/5 px-8 py-4 rounded-3xl border border-primary/10">
                                <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Vocación & Excelencia</span>
                            </div>
                        </div>

                        <div className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-200 aspect-[21/9]">
                            <img
                                src="/images/equipo.jpg"
                                alt="Nuestro Equipo"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 hidden items-center justify-center bg-gray-50 text-gray-300">
                                <div className="text-center">
                                    <p className="text-[10px] uppercase font-black tracking-widest mb-2">Subir Foto de Equipo a:</p>
                                    <p className="text-primary font-black text-sm">/images/equipo.jpg</p>
                                </div>
                            </div>
                            {/* Overlay info */}
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="font-black text-xs uppercase tracking-[0.4em] opacity-80 mb-2">Cuerpo Docente</p>
                                <div className="w-12 h-1 bg-gold rounded-full transition-all duration-700 group-hover:w-32"></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[-20px_20px_60px_#bebebe,20px_-20px_60px_#ffffff] border border-gray-50 mb-24">
                    <div className="text-center lg:text-left mb-16">
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase flex flex-col lg:flex-row lg:items-center gap-4">
                            <span className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-xl rotate-3 shrink-0 mx-auto lg:mx-0">✦</span>
                            Actividades Extracurriculares
                        </h3>
                        <p className="text-gray-500 font-medium max-w-2xl mx-auto lg:mx-0">Programas diseñados para potenciar el talento, la disciplina y el bienestar de nuestros estudiantes fuera del aula.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {extras.map((item) => (
                            <div key={item.id} className="group relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl bg-gray-900">
                                {/* Background Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />

                                {/* Fallback */}
                                <div className="absolute inset-0 hidden items-center justify-center bg-gray-800 text-gray-500">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-center px-6">
                                        Subir foto: {item.image}
                                    </p>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 transition-transform duration-500 translate-y-8 md:translate-y-12 group-hover:translate-y-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-8 h-1 bg-gold rounded-full transition-all duration-500 group-hover:w-16"></div>
                                        <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">{item.title}</h4>
                                    </div>
                                    <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Admisiones CTA - Separated and High Impact */}
                <div className="w-full bg-gray-900 p-12 md:p-16 rounded-[4rem] text-center text-white relative overflow-hidden group shadow-2xl flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="relative z-10 max-w-2xl">
                        <h4 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Admisiones</h4>
                        <p className="text-white/60 mb-10 font-bold tracking-widest uppercase text-xs">Forma parte de nuestra historia académica de excelencia.</p>
                        <a href="https://wa.me/584121772899" target="_blank" className="inline-block bg-white text-gray-900 font-black uppercase tracking-widest text-xs px-12 py-5 rounded-full hover:bg-gold transition-all duration-500 shadow-2xl active:scale-95">
                            CONSULTAR CUPO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
