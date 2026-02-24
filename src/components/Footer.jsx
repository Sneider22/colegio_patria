const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">

                    {/* Brand & Tagline */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-accent tracking-tight">Colegio Patria</h3>
                        <span className="hidden md:block w-px h-4 bg-gray-800"></span>
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                            Los Chorros, Caracas
                        </p>
                    </div>


                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-[10px] text-gray-600 font-medium">
                            © {new Date().getFullYear()} Colegio Patria.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
