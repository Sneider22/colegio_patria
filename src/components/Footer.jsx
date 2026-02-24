const Footer = ({ onNavigate }) => {
    return (
        <footer className="bg-gray-950 text-white py-12 border-t border-gray-900 animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Brand & Tagline */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                        <h3 className="text-2xl font-black text-accent tracking-tighter">Colegio<span className="text-white">Patria</span></h3>
                        <span className="hidden md:block w-px h-6 bg-gray-800"></span>
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black">
                            Caracas • Los Chorros
                        </p>
                    </div>

                    {/* Minimal Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        <button onClick={() => onNavigate('inicio')} className="hover:text-accent transition-colors">Inicio</button>
                        <button onClick={() => onNavigate('nosotros')} className="hover:text-accent transition-colors">Nosotros</button>
                        <button onClick={() => onNavigate('simbolos')} className="hover:text-accent transition-colors">Símbolos</button>
                        <button onClick={() => onNavigate('contacto')} className="hover:text-accent transition-colors">Contacto</button>
                    </div>

                    {/* Copyright & Info */}
                    <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
                        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                            © {new Date().getFullYear()} Colegio Patria
                        </p>
                        <p className="text-[8px] text-gray-700 uppercase">Excelencia en Educación</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
