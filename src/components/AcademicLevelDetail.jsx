import { useState } from 'react'

const AcademicLevelDetail = ({ levelData, onBack }) => {
    const [openRequirement, setOpenRequirement] = useState(null);

    const toggleRequirement = (idx) => {
        setOpenRequirement(openRequirement === idx ? null : idx);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all mb-8"
                >
                    ← Volver a Oferta
                </button>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <span className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mb-3 block">Detalle Académico</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6">{levelData.title}</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </div>

                    {/* Requirements Section */}
                    <section className="mb-12 animate-slide-up">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-primary/10">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase">Requisitos y Útiles</h3>
                        </div>
                        <div className="space-y-2">
                            {levelData.requirements.map((req, idx) => (
                                <div key={idx} className="border-b border-gray-100 last:border-0">
                                    <button
                                        onClick={() => toggleRequirement(idx)}
                                        className="w-full py-6 flex items-center justify-between text-left group transition-all"
                                    >
                                        <span className={`text-base md:text-xl font-black transition-colors ${openRequirement === idx ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                                            {req.title}
                                        </span>
                                        <span className={`text-2xl transition-transform duration-500 ${openRequirement === idx ? 'rotate-180 text-gold' : 'text-gray-300'}`}>
                                            ↓
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${openRequirement === idx ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="p-8 bg-secondary/30 rounded-[2rem] border border-gray-50">
                                            <p className="text-gray-800 text-sm md:text-base leading-relaxed font-bold whitespace-pre-line">
                                                {req.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Subjects Section */}
                    <section className="mb-12 animate-slide-up [animation-delay:200ms]">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-primary/10">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase">Materias</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {levelData.subjects.map((subject, idx) => (
                                <div
                                    key={idx}
                                    className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-sm border border-black/5`}
                                    style={{ backgroundColor: subject.color }}
                                >
                                    <span className="text-sm md:text-base">{subject.icon}</span>
                                    <span className="font-bold text-[10px] md:text-[11px] tracking-tight text-gray-800">
                                        {subject.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Uniform Section */}
                    <section className="animate-slide-up [animation-delay:400ms]">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-primary/10">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase">Uniforme Escolar</h3>
                        </div>
                        <div className="bg-footer-blue p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    {levelData.uniform.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                                            <p className="text-white text-sm md:text-base font-bold leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Ambiente Familiar</p>
                                    <p className="text-gold font-black text-lg md:text-xl uppercase tracking-tighter">Identidad Patria</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AcademicLevelDetail;
