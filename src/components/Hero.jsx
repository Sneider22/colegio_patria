import { useState } from 'react'

const Hero = ({ onNavigate }) => {
    return (
        <section className="relative h-[calc(100vh-80px)] mt-20 flex items-center justify-center text-white overflow-hidden animate-fade-in">
            {/* Fallback pattern + Image Overlay */}
            <div className="absolute inset-0 bg-primary-dark">
                <img
                    src="https://via.placeholder.com/1920x1080?text=Colegio+Patria"
                    alt="Colegio Patria Background"
                    className="w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl animate-slide-up">
                    Excelencia <br />
                    <span className="text-gold underline decoration-gold/30 decoration-8 underline-offset-8 uppercase tracking-tighter">Educativa</span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 drop-shadow-lg max-w-2xl mx-auto font-light leading-relaxed animate-slide-up [animation-delay:200ms]">
                    Formando líderes con propósito desde hace más de 30 años en el corazón de Caracas.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up [animation-delay:400ms]">
                    <button onClick={() => onNavigate('contacto')} className="btn-primary text-lg shadow-xl shadow-primary/20">
                        Inscripciones Abiertas
                    </button>
                    <button onClick={() => onNavigate('nosotros')} className="px-10 py-4 rounded-full font-bold border-2 border-white/50 hover:border-white hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm">
                        Nuestra Historia
                    </button>
                </div>
            </div>

            <div
                onClick={() => onNavigate('nosotros')}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group transition-all"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 group-hover:text-white transition-colors">Descubrir</span>
                    <svg className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Hero
