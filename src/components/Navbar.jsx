import { useState, useEffect } from 'react'

const Navbar = () => {
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
        { name: 'Inicio', href: '#inicio' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Símbolos', href: '#simbolos' },
        { name: 'Contacto', href: '#contacto' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className={`text-2xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                    Colegio Patria
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium hover:text-accent transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-primary' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-primary' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-primary' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                <div className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 font-medium hover:text-primary transition-colors text-lg"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
