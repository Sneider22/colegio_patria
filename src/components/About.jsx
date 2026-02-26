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
        const duration = 4000
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
            <div className="text-[12px] font-black uppercase text-white/40 tracking-[0.3em] group-hover:text-white/60 transition-colors">
                {label}
            </div>
        </div>
    )
}

const CarouselSection = ({ title, tag, description, images, isReversed = false, aspect = "aspect-square", rounded = "rounded-[3.5rem]" }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)

    useEffect(() => {
        if (isPaused) return
        const timer = setInterval(nextSlide, 18000)
        return () => clearInterval(timer)
    }, [images.length, isPaused])

    return (
        <div
            className={`mb-20 animate-slide-up flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-10 lg:gap-10 max-w-6xl mx-auto`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="w-full lg:w-5/12">
                <div className={`space-y-5 text-center ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block bg-primary/5 px-6 py-2 rounded-2xl border border-primary/10">
                        <span className="text-primary font-black text-[13px] md:text-xs uppercase tracking-[0.3em]">{tag}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                        {title.split(' ')[0]} <span className="text-primary">{title.split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <p className={`text-gray-600 text-lg font-medium leading-relaxed max-w-lg mx-auto ${isReversed ? 'lg:ml-auto lg:mr-0 lg:text-right' : 'lg:mx-0'}`}>
                        {description}
                    </p>
                    <div className={`w-20 h-1.5 bg-gold rounded-full mx-auto ${isReversed ? 'lg:ml-auto lg:mr-0' : 'lg:mx-0'}`}></div>
                </div>
            </div>

            <div className={`w-full ${aspect === 'aspect-square' ? 'lg:w-5/12' : 'lg:w-6/12'} flex justify-center`}>
                <div className={`relative group ${rounded} overflow-hidden shadow-2xl bg-black w-full ${aspect === 'aspect-square' ? 'max-w-[450px]' : 'max-w-[650px]'} ${aspect} flex items-center justify-center transition-all duration-700 hover:-translate-y-2 cursor-pointer`}>
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
                        >
                            <img
                                src={img}
                                alt={`${title} ${idx + 1}`}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 hidden items-center justify-center bg-gray-50 text-gray-300">
                                <div className="text-center">
                                    <p className="text-[10px] uppercase font-black tracking-widest mb-2">Subir Foto a:</p>
                                    <p className="text-primary font-black text-sm">{img}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={prevSlide}
                        className="absolute left-3 md:left-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110 z-30"
                    >
                        <span className="text-lg">←</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 md:right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110 z-30"
                    >
                        <span className="text-lg">→</span>
                    </button>

                    <div className="absolute bottom-4 inset-x-0 flex justify-center gap-3 z-20">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-8 bg-gold' : 'w-2 bg-white/50 hover:bg-white'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="absolute top-6 right-6 z-20">
                        <div className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            <p className="text-white text-[11px] font-black uppercase tracking-[0.2em]">
                                {currentSlide + 1} / {images.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const About = ({ isFullView = false, onNavigate }) => {
    const levels = [
        { title: "Preescolar", detail: "1er Nivel - 3er Nivel", image: "/images/preescolar.jpg", id: 'preescolar' },
        { title: "Primaria", detail: "1er Grado - 6to Grado", image: "/images/primaria.jpg", id: 'primaria' },
        { title: "Bachillerato", detail: "1er Año - 3er Año", image: "/images/bachillerato1.jpg", id: 'bachillerato' },
        { title: "Bachillerato", detail: "4to Año - 5to Año", image: "/images/bachillerato2.jpg", id: 'bachillerato' }
    ]

    const teamImages = [
        "/images/equipo.jpg",
        "/images/equipo2.jpg",
        "/images/equipo3.jpg",
        "/images/equipo4.jpg",
        "/images/equipo5.jpg",
        "/images/equipo6.jpg",
        "/images/equipo7.jpg",
        "/images/equipo8.jpg",
        "/images/equipo9.jpg",
        "/images/equipo10.jpg"
    ]

    const culturalImages = [
        "/images/cultural1.jpg",
        "/images/cultural2.jpg",
        "/images/cultural3.jpg",
        "/images/cultural4.jpg",
        "/images/cultural5.jpg",
        "/images/cultural6.jpg",
        "/images/cultural7.jpg"
    ]

    const gradoImages = [
        "/images/grado1.jpg",
        "/images/grado2.jpg",
        "/images/grado3.jpg",
        "/images/grado4.jpg",
        "/images/grado5.jpg",
        "/images/grado6.jpg"
    ]

    const carteleraImages = [
        "/images/cartelera1.jpg",
        "/images/cartelera2.jpg",
        "/images/cartelera3.jpg",
        "/images/cartelera4.jpg",
        "/images/cartelera5.jpg"
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
            description: "Desarrollo de habilidades motrices y coordination en un ambiente competitivo saludable.",
            image: "/images/extra_voleibol.jpg"
        },
        {
            id: 'ajedrez',
            title: "Ajedrez",
            description: "Desarrollo del pensamiento estratégico, la concentración y la resolución de problemas.",
            image: "/images/extra_ajedrez.jpg"
        },
        {
            id: 'baile',
            title: "Danza",
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
        <section id="nosotros" className="py-24 bg-white animate-fade-in outline-none">
            <div className="container mx-auto px-6">
                {/* Educational Levels Grid */}
                <div className="mb-24">
                    <div className="text-center mb-20">
                        <span className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mb-4 block">Formación Académica</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6">Nuestra Oferta</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {levels.map((level, idx) => (
                            <div
                                key={idx}
                                onClick={() => onNavigate && onNavigate(`academic-${level.id}`)}
                                className="group relative bg-white rounded-[2.5rem] shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                    <img
                                        src={level.image}
                                        alt={level.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <div className="absolute inset-0 hidden items-center justify-center bg-gray-50 p-6 text-center text-gray-300">
                                        <p className="text-[11px] md:text-[8px] uppercase font-black tracking-widest">Subir: {level.image}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="bg-white/90 backdrop-blur-md text-primary font-black uppercase text-[10px] tracking-widest px-6 py-3 rounded-full shadow-xl">Ver más detalles</span>
                                    </div>
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-black text-gray-900 mb-1 tracking-tight transition-colors group-hover:text-primary">{level.title}</h3>
                                    <p className="text-[#0056b3] text-[12px] md:text-[11px] font-black uppercase tracking-widest opacity-100">{level.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Marker - ONLY IN INICIO/HOME VIEW */}
                {!isFullView && (
                    <div className="mb-24 bg-footer-blue rounded-[3rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,86,179,0.1),transparent)]"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            <StatItem end={2000} label="Estudiantes Graduados" suffix="+" />
                            <StatItem end={1500} label="Familias Unidas" suffix="+" />
                            <StatItem end={60} label="Años de Historia" suffix="+" />
                            <StatItem end={100} label="Excelencia" suffix="%" />
                        </div>
                    </div>
                )}

                {/* FULL VIEW SECTIONS */}
                {isFullView && (
                    <div className="space-y-24">
                        <CarouselSection
                            title="Nuestro Equipo"
                            tag="Vocación & Excelencia"
                            description="Contamos con un equipo de profesionales apasionados, comprometidos con la formación académica y humana de cada uno de nuestros estudiantes."
                            images={teamImages}
                        />

                        <CarouselSection
                            title="Actos Culturales"
                            tag="Tradición & Talento"
                            description="Encuentros donde celebramos nuestras raíces y fomentamos la expresión artística, fortaleciendo la identidad cultural de nuestros estudiantes."
                            images={culturalImages}
                            isReversed={true}
                        />

                        <CarouselSection
                            title="Actos de Grado"
                            tag="Éxito & Futuro"
                            description="Celebración solemne del logro académico, donde honramos el esfuerzo y la dedicación de nuestros graduandos al culminar su etapa escolar."
                            images={gradoImages}
                        />

                        <CarouselSection
                            title="Nuestra Galería"
                            tag="Arte & Creatividad"
                            description="Espacios dedicados a la expresión del talento, donde se plasman conocimientos, valores y creatividad a través de trabajos manuales y artísticos."
                            images={carteleraImages}
                            isReversed={true}
                            aspect="aspect-[4/3]"
                            rounded="rounded-3xl"
                        />
                    </div>
                )}

                {/* Extracurriculars Grid (Visible in both views often, but usually bottom-heavy) */}
                <div className="bg-white rounded-[4rem] p-6 md:p-20 shadow-[-20px_20px_60px_#bebebe,20px_-20px_60px_#ffffff] border border-gray-50 mb-16 md:mb-24 mt-20 md:mt-40">
                    <div className="text-center lg:text-left mb-10 md:mb-16">
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase flex flex-col lg:flex-row lg:items-center gap-4">
                            <span className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent text-xl rotate-3 shrink-0 mx-auto lg:mx-0">✦</span>
                            Actividades Extracurriculares
                        </h3>
                        <p className="text-gray-500 font-medium max-w-2xl mx-auto lg:mx-0">Programas diseñados para potenciar el talento, la disciplina y el bienestar de nuestros estudiantes fuera del aula.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {extras.map((item) => (
                            <div key={item.id} className="group relative w-full md:w-[calc(50%-16px)] h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl bg-gray-900">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-100 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-80"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="absolute inset-0 hidden items-center justify-center bg-gray-800 text-gray-500">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-center px-6">
                                        Subir foto: {item.image}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 transition-transform duration-500 translate-y-8 md:translate-y-12 group-hover:translate-y-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-8 h-1 bg-gold rounded-full transition-all duration-500 group-hover:w-16"></div>
                                        <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">{item.title}</h4>
                                    </div>
                                    <p className="text-white/70 text-sm md:text-base font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {!isFullView && (
                    <div className="max-w-4xl mx-auto">
                        <div className="w-full bg-gray-900 p-12 md:p-16 rounded-[4rem] text-center text-white relative overflow-hidden group shadow-2xl flex flex-col items-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="relative z-10 max-w-2xl">
                                <h4 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Admisiones</h4>
                                <p className="text-white/60 mb-10 font-bold tracking-widest uppercase text-sm">Forma parte de nuestra historia académica de excelencia.</p>
                                <a href="https://wa.me/584121772899" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 font-black uppercase tracking-widest text-xs px-12 py-5 rounded-full hover:bg-gold transition-all duration-500 shadow-2xl active:scale-95">
                                    CONSULTAR CUPO
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default About
