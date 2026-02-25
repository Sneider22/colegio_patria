const WhatsAppFAB = ({ isMenuOpen }) => {
    return (
        <a
            href="https://wa.me/584121772899"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-[160] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-center justify-center 
                ${isMenuOpen ? 'translate-y-0 opacity-100 scale-100 visible' : 'max-md:translate-y-20 max-md:opacity-0 max-md:invisible opacity-100 scale-100 visible'}`}
            aria-label="Contactar por WhatsApp"
        >
            {/* Tooltip - Desktop Only */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest rounded-xl opacity-0 translate-x-4 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-2xl border border-white/10 italic hidden md:block">
                Contáctanos ahora
            </div>

            {/* Pulsating background */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>

            {/* Main Button - More Compact */}
            <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-110 active:scale-90 group">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.099-.475-.15-.675.15-.199.299-.775.979-.95 1.174-.175.195-.349.215-.65.065-.301-.15-1.272-.469-2.422-1.493-.894-.798-1.498-1.784-1.674-2.083-.175-.299-.019-.462.132-.611.135-.134.301-.35.45-.525.15-.175.2-.299.3-.499.1-.199.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.503-.675-.512-.174-.008-.374-.01-.574-.01s-.524.075-.798.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.231 5.127 4.531.717.31 1.276.494 1.711.633.721.229 1.376.196 1.894.12.578-.085 1.779-.726 2.029-1.426.25-.7.25-1.299.175-1.424-.076-.125-.276-.199-.576-.349z" />
                </svg>
            </div>
        </a>
    )
}

export default WhatsAppFAB
