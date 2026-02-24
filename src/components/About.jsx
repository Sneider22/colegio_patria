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
            <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em] group-hover:text-white/60 transition-colors italic">
                {label}
            </div>
        </div>
    )
}

const About = () => {
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
        },
        {
            id: 'canchas',
            title: "Canchas Deportivas",
            description: "Instalaciones de alto nivel para el esparcimiento y la práctica deportiva segura.",
            image: "/images/extra_canchas.jpg"
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

                {/* Animated Stats Section */}
                <div className="mb-24 bg-footer-blue rounded-[3rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,86,179,0.1),transparent)]"></div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        <StatItem end={2000} label="Estudiantes Gradas" suffix="+" />
                        <StatItem end={1500} label="Familias Unidas" suffix="+" />
                        <StatItem end={60} label="Años de Historia" suffix="+" />
                        <StatItem end={100} label="Excelencia" suffix="%" />
                    </div>
                </div>

                <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[-20px_20px_60px_#bebebe,20px_-20px_60px_#ffffff] flex flex-col lg:flex-row gap-16 items-start border border-gray-50">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 flex items-center gap-6">
                            <span className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-2xl rotate-3 group-hover:rotate-12 transition-transform">✦</span>
                            Cocurriculares
                        </h3>

                        <div className="grid grid-cols-1 gap-4">
                            {extras.map((item, idx) => (
                                <div key={item.id} className="relative">
                                    <button
                                        onClick={() => setActiveExtra(activeExtra === item.id ? null : item.id)}
                                        className={`w-full flex items-center justify-between p-3 px-6 rounded-2xl transition-all duration-500 text-left border ${activeExtra === item.id ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20' : 'bg-secondary/50 text-gray-900 border-transparent hover:bg-white hover:border-gray-100'}`}
                                    >
                                        <div className="flex items-center gap-4 text-gray-900 font-black uppercase text-[10px] tracking-widest group">
                                            <div className={`w-3 h-[2px] transition-all duration-500 ${activeExtra === item.id ? 'bg-accent w-6' : 'bg-accent group-hover:w-6'}`}></div>
                                            <span className={`${activeExtra === item.id ? 'text-white' : 'group-hover:text-primary'} transition-colors`}>{item.title}</span>
                                        </div>
                                        <span className={`text-lg transition-transform duration-500 ${activeExtra === item.id ? 'rotate-180 text-accent' : 'text-gray-300'}`}>↓</span>
                                    </button>

                                    {/* Expanded Detail Card */}
                                    <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${activeExtra === item.id ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="bg-secondary/50 rounded-[2rem] p-5 flex flex-col md:flex-row gap-5 border border-gray-100 italic">
                                            <div className="w-full md:w-1/4 h-32 bg-gray-200 rounded-xl overflow-hidden relative group">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                                />
                                                <div className="absolute inset-0 hidden items-center justify-center bg-gray-100 p-4 text-center text-gray-300">
                                                    <p className="text-[7px] uppercase font-black leading-tight">Subir foto a:<br />{item.image}</p>
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-col justify-center">
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    "{item.description}"
                                                </p>
                                                <div className="w-12 h-1 bg-accent rounded-full mt-4 opacity-50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 bg-gray-900 p-12 md:p-16 rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl lg:sticky lg:top-32">
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
