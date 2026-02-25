import { useState, useEffect } from 'react'

const Navbar = ({ activeView, onNavigate, isOpen, onToggle }) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Bloqueo de scroll cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navLinks = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Nosotros', id: 'nosotros' },
        { name: 'Identidad', id: 'identidad' },
        { name: 'Contacto', id: 'contacto' },
    ]

    const handleLinkClick = (id) => {
        onNavigate(id)
        onToggle(false)
        // Eliminado window.scrollTo(0,0) de aquí para no interferir con el scroll de App.jsx
    }

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-lg py-3">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button
                    onClick={() => handleLinkClick('inicio')}
                    className="flex items-center gap-3 group transition-all"
                >
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span className="text-xl md:text-2xl font-black tracking-tighter transition-colors text-primary items-center flex">
                        Colegio<span className="text-accent">Patria</span>
                    </span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`font-black uppercase text-[10px] tracking-[0.2em] transition-all relative group ${activeView === link.id ? 'text-primary' : 'text-primary/60 hover:text-primary'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${activeView === link.id || (activeView === 'home' && (link.id === 'inicio' || link.id === 'nosotros')) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </button>
                    ))}
                </div>

                {/* Botón de Menú Móvil - Optimizado */}
                <button
                    className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center focus:outline-none"
                    onClick={() => onToggle(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 relative">
                        <span className={`absolute left-0 w-full h-[3px] rounded-full transition-all duration-500 ease-in-out ${isOpen ? 'bg-primary rotate-45 top-2' : 'bg-primary top-0'}`}></span>
                        <span className={`absolute left-0 w-full h-[3px] rounded-full transition-all duration-500 ease-in-out top-2 ${isOpen ? 'opacity-0 -translate-x-full' : 'bg-primary'}`}></span>
                        <span className={`absolute left-0 w-full h-[3px] rounded-full transition-all duration-500 ease-in-out ${isOpen ? 'bg-primary -rotate-45 top-2' : 'bg-primary top-4'}`}></span>
                    </div>
                </button>
            </div>

            {/* Overlay de Menú Móvil - Robusto e Independiente */}
            <div className={`md:hidden fixed inset-0 w-full h-screen bg-white z-[100] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                <div className="flex flex-col h-full justify-center px-10 space-y-8">
                    <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-2">Navegación</span>
                    {navLinks.map((link, idx) => (
                        <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`text-left text-4xl font-black uppercase tracking-tighter text-primary hover:text-primary-dark transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className={`mt-12 pt-8 border-t border-gray-100 transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}`}>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Información</p>
                        <p className="text-gray-950 font-black text-sm uppercase tracking-tighter mb-1">Colegio ítalo-venezolano</p>
                        <p className="text-gray-600 font-medium text-xs leading-relaxed max-w-[250px]">
                            Av los mangos, los chorros estado Miranda, Caracas 1071
                        </p>
                    </div>
                </div>

                {/* Decorative background in mobile menu */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] -z-10 pointer-events-none"></div>
            </div>
        </nav>
    )
}

export default Navbar
