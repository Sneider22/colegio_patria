import { useState, useEffect } from 'react'

const Navbar = ({ activeView, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Nosotros', id: 'nosotros' },
        { name: 'Símbolos', id: 'simbolos' },
        { name: 'Contacto', id: 'contacto' },
    ]

    const handleLinkClick = (id) => {
        onNavigate(id)
        setIsOpen(false)
        window.scrollTo(0, 0)
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || activeView !== 'home' ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button
                    onClick={() => handleLinkClick('inicio')}
                    className={`text-2xl font-black tracking-tighter transition-colors ${(scrolled || activeView !== 'home') ? 'text-primary' : 'text-white'}`}
                >
                    Colegio<span className="text-accent">Patria</span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`font-black uppercase text-[10px] tracking-[0.2em] hover:text-accent transition-all relative group ${(scrolled || activeView !== 'home') ? 'text-gray-900' : 'text-white'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transition-transform duration-300 origin-left ${activeView === link.id || (activeView === 'home' && (link.id === 'inicio' || link.id === 'nosotros')) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button - PREMIUM STYLE */}
                <button
                    className="md:hidden relative z-[60] p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-[2.5px] rounded-full transition-all duration-500 ${isOpen ? 'bg-primary rotate-45 translate-y-2' : (scrolled || activeView !== 'home' ? 'bg-primary' : 'bg-white')}`}></span>
                        <span className={`w-full h-[2.5px] rounded-full transition-all duration-500 ${isOpen ? 'opacity-0 -translate-x-2' : (scrolled || activeView !== 'home' ? 'bg-primary' : 'bg-white')}`}></span>
                        <span className={`w-full h-[2.5px] rounded-full transition-all duration-500 ${isOpen ? 'bg-primary -rotate-45 -translate-y-2' : (scrolled || activeView !== 'home' ? 'bg-primary' : 'bg-white')}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay - SLIDE DOWN PREMIUM */}
            <div className={`md:hidden fixed inset-0 z-50 bg-white transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col h-full justify-center px-10 space-y-8">
                    <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] opacity-100 mb-2">Navegación</span>
                    {navLinks.map((link, idx) => (
                        <button
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={`text-left text-4xl font-black uppercase tracking-tighter text-gray-900 hover:text-primary transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className={`mt-12 pt-8 border-t border-gray-100 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Información</p>
                        <p className="text-gray-900 font-bold text-sm">Av. Los Mangos, Los Chorros</p>
                        <p className="text-primary font-black text-sm mt-1">+58 412 177 2899</p>
                    </div>
                </div>

                {/* Decorative background in mobile menu */}
                <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl invisible md:visible"></div>
            </div>
        </nav>
    )
}

export default Navbar
