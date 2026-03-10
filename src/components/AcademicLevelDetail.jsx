import { useState } from 'react'

const AcademicLevelDetail = ({ levelData, onBack }) => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all mb-8 shadow-sm px-4 py-2 rounded-xl bg-primary/5 hover:bg-primary/10"
                >
                    <span className="text-lg">←</span> Volver a Oferta
                </button>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <span className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mb-3 block">Detalle Académico</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-none">
                            {levelData.title.split(' (')[0]}
                            {levelData.title.includes(' (') && (
                                <span className="block text-primary text-2xl md:text-3xl mt-2">{levelData.title.split(' (')[1].replace(')', '')}</span>
                            )}
                        </h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>

                        {levelData.description && (
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto text-justify px-4">
                                {levelData.description}
                            </p>
                        )}
                    </div>

                    {/* Requirements Section */}
                    <section className="mb-12 animate-slide-up">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-primary/10">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase">Requisitos de Inscripción</h3>
                        </div>

                        <div className="grid md:grid-cols-1 gap-6 mb-10">
                            <div className="bg-secondary/30 p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <ul className="space-y-3">
                                    {levelData.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                            <span className="text-gray-800 text-sm md:text-base font-bold leading-snug">
                                                {req}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Supplies Section */}
                        <div className="mt-10">
                            <div className="flex items-center gap-4 mb-6">
                                <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase">Lista de Útiles</h4>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {levelData.supplies.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-5 bg-white border-2 border-gray-100 rounded-[2rem] hover:border-primary hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-md"
                                    >
                                        <div className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-500">📄</div>
                                        <span className="font-black text-[11px] md:text-xs uppercase tracking-widest text-gray-700 group-hover:text-primary leading-tight">
                                            {item.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <p className="mt-6 text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                * Los archivos se abrirán en formato PDF para su descarga o impresión.
                            </p>
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
                                    <span className="font-bold text-[9px] md:text-[10px] tracking-tight text-gray-800">
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
