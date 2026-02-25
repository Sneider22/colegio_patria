const Footer = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/sccolegiopatria?igsh=YXY5enN0dGR0aDQw',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/17LQTnR9hj/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            )
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/584121772899',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.099-.475-.15-.675.15-.199.299-.775.979-.95 1.174-.175.195-.349.215-.65.065-.301-.15-1.272-.469-2.422-1.493-.894-.798-1.498-1.784-1.674-2.083-.175-.299-.019-.462.132-.611.135-.134.301-.35.45-.525.15-.175.2-.299.3-.499.1-.199.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.503-.675-.512-.174-.008-.374-.01-.574-.01s-.524.075-.798.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.231 5.127 4.531.717.31 1.276.494 1.711.633.721.229 1.376.196 1.894.12.578-.085 1.779-.726 2.029-1.426.25-.7.25-1.299.175-1.424-.076-.125-.276-.199-.576-.349z" />
                </svg>
            )
        }
    ]

    return (
        <footer className="bg-footer-blue text-white py-10 border-t border-white/5 animate-fade-in relative overflow-hidden">
            {/* Ambient light effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[150px] bg-primary/10 blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand & Location */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <h3 className="text-xl font-black text-gold tracking-tighter">
                            Colegio<span className="text-white">Patria</span>
                        </h3>
                        <p className="text-[11px] text-white/40 uppercase tracking-[0.4em] font-black italic">
                            Caracas • Los Chorros
                        </p>
                    </div>

                    {/* Social Media - Compact */}
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/90 hover:text-white hover:bg-primary transition-all duration-500 border border-white/20 hover:border-primary group"
                                aria-label={social.name}
                            >
                                <div className="scale-90 group-hover:scale-100 transition-transform duration-500">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Copyright & Slogan - Highly Visible */}
                    <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
                        <p className="text-[10px] md:text-[9.5px] text-white/90 font-black uppercase tracking-[0.15em] italic mb-1 whitespace-nowrap">
                            "Una educación integral con ambiente familiar"
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-gold/30 hidden md:block"></span>
                            <p className="text-[12px] md:text-[10px] text-white/60 font-bold uppercase tracking-widest">
                                © {new Date().getFullYear()} Colegio Patria
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
