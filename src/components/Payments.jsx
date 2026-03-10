import { useState, useCallback } from 'react';

const Payments = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        representativeName: '',
        idNumber: '',
        originBank: '',
        reference: ''
    });
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const banks = [
        "Banesco",
        "Banco de Venezuela",
        "Provincial",
        "Mercantil",
        "BNC",
        "Pago Móvil",
        "Otro"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const onDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const onDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const onDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Formato del mensaje para WhatsApp
        const message = `*REGISTRO DE PAGO - COLEGIO PATRIA*\n\n` +
            `*Alumno:* ${formData.studentName}\n` +
            `*Representante:* ${formData.representativeName}\n` +
            `*Cédula:* ${formData.idNumber}\n` +
            `*Banco Origen:* ${formData.originBank}\n` +
            `*Referencia:* ${formData.reference}\n\n` +
            `_Adjunto comprobante de pago._`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "584121772899"; // Número del colegio

        // WhatsApp API url
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            setStatus('success');
            window.open(whatsappUrl, '_blank');
            // Reset status after a while
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    const BankAccount = ({ bank, details, holder, rif }) => (
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-4">{bank}</h4>
            <div className="space-y-3">
                <p className="text-gray-900 font-black text-lg md:text-2xl selection:bg-primary selection:text-white break-all tracking-tight">{details}</p>
                <div className="pt-4 border-t border-gray-50">
                    <p className="text-gray-500 text-[11px] uppercase font-black tracking-widest leading-none mb-2">Titular</p>
                    <p className="text-gray-700 text-sm md:text-base font-bold">{holder}</p>
                    <p className="text-gray-400 text-[11px] font-black">{rif}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section id="pagos" className="py-24 bg-white animate-fade-in relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mb-4 block">Gestión Administrativa</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6">Modalidades de Pago</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    {/* Information Column */}
                    <div className="space-y-12">
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl">🏦</div>
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">Cuentas Escolares</h3>
                            </div>
                            <p className="text-gray-600 font-bold text-base md:text-lg mb-10 leading-relaxed">
                                Realice sus pagos a través de depósitos en efectivo o transferencias electrónicas a nombre de:
                            </p>
                            <div className="grid gap-6">
                                <BankAccount
                                    bank="BANESCO"
                                    details="0134 0069 5106 9303 5023"
                                    holder="SC COLEGIO PATRIA"
                                    rif="RIF: J-30960099-0"
                                />
                                <BankAccount
                                    bank="VENEZUELA"
                                    details="0102 0278 7300 0332 1809"
                                    holder="SC COLEGIO PATRIA"
                                    rif="RIF: J-30960099-0"
                                />
                                <BankAccount
                                    bank="PROVINCIAL"
                                    details="0108 0010 2101 0009 7375"
                                    holder="SC COLEGIO PATRIA"
                                    rif="RIF: J-30960099-0"
                                />
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-10 md:p-14 rounded-[4rem] border border-primary/5">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold text-2xl">🎨</div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase">Uniformes y Tareas</h3>
                            </div>
                            <div className="grid gap-6 mb-8">
                                <BankAccount
                                    bank="BANCO DE VENEZUELA"
                                    details="0102 0278 7100 0101 5447"
                                    holder="Nahianytz Marcano"
                                    rif="CI: 10.111.260"
                                />
                            </div>
                            <div className="space-y-4 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
                                <p>📧 <span className="text-primary tracking-normal">sccolegiopatria@gmail.com</span> (Uniformes)</p>
                                <p>📧 <span className="text-primary tracking-normal">pagoscolegiopatria@gmail.com</span> (Tareas)</p>
                            </div>
                            <p className="mt-8 text-[11px] md:text-xs font-black text-gold uppercase tracking-[0.2em] leading-relaxed italic">
                                * Se agradece realizar los pagos por separado.
                            </p>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 animate-slide-up relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase mb-2">Registro de Pago</h3>
                            <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-10">Verificación inmediata vía WhatsApp</p>

                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="space-y-5">
                                    <div className="group">
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-4">Nombre del Alumno</label>
                                        <input
                                            required
                                            type="text"
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleInputChange}
                                            placeholder="Nombre Apellido"
                                            className="w-full px-7 py-5 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-gray-800 placeholder:text-gray-300 text-base"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-4">Nombre del Representante</label>
                                        <input
                                            required
                                            type="text"
                                            name="representativeName"
                                            value={formData.representativeName}
                                            onChange={handleInputChange}
                                            placeholder="Nombre de quien paga"
                                            className="w-full px-7 py-5 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-gray-800 placeholder:text-gray-300 text-base"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="group">
                                            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-4">Cédula del Titular</label>
                                            <input
                                                required
                                                type="text"
                                                name="idNumber"
                                                value={formData.idNumber}
                                                onChange={handleInputChange}
                                                placeholder="V-00.000.000"
                                                className="w-full px-7 py-5 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-gray-800 placeholder:text-gray-300 text-base"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-4">Banco de Origen</label>
                                            <select
                                                required
                                                name="originBank"
                                                value={formData.originBank}
                                                onChange={handleInputChange}
                                                className="w-full px-7 py-5 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-gray-800 appearance-none cursor-pointer text-base"
                                            >
                                                <option value="" disabled>Seleccione Banco</option>
                                                {banks.map(bank => (
                                                    <option key={bank} value={bank}>{bank}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-4">Número de Referencia</label>
                                        <input
                                            required
                                            type="text"
                                            name="reference"
                                            value={formData.reference}
                                            onChange={handleInputChange}
                                            placeholder="Últimos 6 u 8 dígitos"
                                            className="w-full px-7 py-5 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-gray-800 placeholder:text-gray-300 text-base"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-4">Comprobante de Pago</label>
                                        <div
                                            onDragOver={onDragOver}
                                            onDragLeave={onDragLeave}
                                            onDrop={onDrop}
                                            className={`relative w-full py-10 md:py-16 border-2 border-dashed rounded-[2.5rem] transition-all flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/40'}`}
                                            onClick={() => document.getElementById('fileInput').click()}
                                        >
                                            <input
                                                id="fileInput"
                                                type="file"
                                                hidden
                                                accept="image/*,.pdf"
                                                onChange={handleFileChange}
                                            />
                                            <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                                {file ? '📄' : '📸'}
                                            </div>
                                            <p className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 px-6 text-center">
                                                {file ? file.name : 'Click o Arrastra tu Comprobante'}
                                            </p>
                                            {file && (
                                                <div className="absolute top-6 right-6 text-xs bg-primary text-white px-3 py-1 rounded-full font-black animate-bounce shadow-lg">OK</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    className={`w-full py-6 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 shadow-2xl relative overflow-hidden group ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-gold hover:scale-[1.02] active:scale-95'}`}
                                >
                                    <span className={`relative z-10 flex items-center justify-center gap-3 transition-all duration-500 ${status === 'loading' ? 'opacity-0' : 'opacity-100'}`}>
                                        {status === 'success' ? '✓ Enviado con Éxito' : 'Enviar Registro'}
                                        <span className="text-lg">⚡</span>
                                    </span>
                                    {status === 'loading' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-24 max-w-4xl mx-auto bg-footer-blue p-10 md:p-14 rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl border border-primary/20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1),transparent)]"></div>
                    <p className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-gold mb-4 block">Nota de Seguridad</p>
                    <p className="relative z-10 text-base md:text-lg font-bold leading-relaxed text-white/90">
                        "No se aceptan pagos en cheques. Al realizar su transacción, asegúrese de guardar su comprobante para el registro final."
                    </p>
                    <div className="mt-8 flex justify-center gap-3 animate-bounce">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payments;
