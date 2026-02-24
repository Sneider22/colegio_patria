const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Fallback pattern + Image Overlay */}
            <div className="absolute inset-0 bg-primary-dark">
                <img
                    src="https://via.placeholder.com/1920x1080?text=Colegio+Patria"
                    alt="Colegio Patria Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                    Forjando el futuro con <span className="text-accent underline decoration-accent/30">Excelencia</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200 drop-shadow-md">
                    Una institución comprometida con la educación integral, los valores y el crecimiento de nuestros estudiantes desde Preescolar hasta 5to Año de Bachillerato.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contacto" className="btn-primary">
                        Solicitar Cupo
                    </a>
                    <a href="#nosotros" className="px-8 py-3 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-primary transition-all duration-300">
                        Nuestra Oferta
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
                <a href="#nosotros">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default Hero
