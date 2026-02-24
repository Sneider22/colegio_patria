import { useState } from 'react'

const Hymns = () => {
    const [activeRing, setActiveRing] = useState('azul')
    const [activeAnthem, setActiveAnthem] = useState(null)

    const identityItems = [
        {
            id: 'azul',
            title: 'Misión',
            colorName: 'Azul',
            hex: '#0056b3',
            text: 'Lograr la excelencia academica utilizando los recursos humanos mas calificados que garanticen la formacion integral del estudiante basado en valores como la solidaridad, el respeto, la disciplina y la inclusion como herramientas necesarias para formar el ciudadano que queremos.',
            position: 'top'
        },
        {
            id: 'negro',
            title: 'Visión',
            colorName: 'Negro',
            hex: '#000000',
            text: 'Constituirnos en una institución referencial basado en una gestión de calidad integral: en la moral, social y cultura.',
            position: 'top'
        },
        {
            id: 'rojo',
            title: 'Símbolos',
            colorName: 'Rojo',
            hex: '#dc3545',
            text: 'La bandera y el escudo están representados por los aros olimpicos que simbolizan los 5 continentes que representan la unión sin distingo de razas ni fronteras. Un libro abierto con una pluma que se representa la búsqueda del saber cómo única manera de lograr la trascendencia y alcanzar los fines más excelsos de la cultura humana.',
            position: 'top'
        },
        {
            id: 'amarillo',
            title: 'Historia',
            colorName: 'Amarillo',
            hex: '#ffc107',
            text: 'La unidad educativa colegio patria es una institución de carácter privado fundado en 1958 por una familia de inmigrantes italianos de profesión docente: con la idea de expandir la cultura de su pais de origen emprendieron la ardua misión de hacerlo a través de una institución educativa que acogiera de forma amplia a todos aquellos estudiantes de diferentes nacionalidades, tratando una patria que les diera la posibilidad de alcanzar los altisimos fines que le proporciona la cultura de la humanidad.',
            position: 'bottom'
        },
        {
            id: 'verde',
            title: 'Valores',
            colorName: 'Verde',
            hex: '#198754',
            text: 'El himno del colegio se originó a través de un concurso, en el cual se debían de presentar los propuestas, en música y letra, desde 1985 se decretó como autora de la letra de los himnos que forman parte de la institución a la profesora Mirtha Cabezas y de la música a Antonella Geraci.',
            position: 'bottom'
        }
    ]

    const anthems = [
        {
            id: 'venezuela',
            title: 'Himno Nacional de Venezuela',
            subtitle: 'Gloria al Bravo Pueblo',
            author: 'Letra: Vicente Salias | Música: Juan José Landaeta',
            content: `Coro\n\n¡Gloria al bravo pueblo!\nque el yugo lanzó\nla Ley respetando\nla virtud y honor (bis).\n\nI\n\n¡Abajo cadenas! (bis)\ngritaba el señor (bis)\ny el pobre en su choza\nLibertad pidió:\nA este santo nombre\ntembló de pavor\nel vil egoísmo\nque otra vez triunfó.\n\n(Coro)\n\nII\n\n¡Gritemos con brío:! (bis)\n¡Muera la opresión! (bis)\nCompatriotas fieles,\nla fuerza es la unión;\ny desde el Empíreo\nel Supremo Autor,\nun sublime aliento\nal pueblo infundió.\n\n(Coro)\n\nIII\n\nUnida con lazos (bis)\nque el cielo formó, (bis)\nla América toda\nexiste en nación;\ny si el despotismo\nlevanta la voz,\nseguid el ejemplo\nque Caracas dio.\n\n(Coro)`
        },
        {
            id: 'italia',
            title: 'Himno de Italia',
            subtitle: 'Fratelli d\'Italia',
            author: 'Letra: Goffredo Mameli | Música: Michele Novaro',
            content: `Fratelli d'Italia,\nL'Italia s'è desta,\nDell'elmo di Scipio\nS'è cinta la testa.\nDov'è la Vittoria?\nLe porga la chioma,\nChé schiava di Roma\nIddio la creò.\n\nStringiamci a coorte,\nSiam pronti alla muerte,\nSiam pronti alla morte,\nL'Italia chiamò.\nSì!\n\nNoi fummo da secoli\nCalpesti, derisi,\nPerché non siam popolo,\nPerché siam divisi.\nRaccolgaci un'unica\nBandiera, una speme\nDi fonderci insieme.\nGià l'ora suonò.\n\nUniamoci, amiamoci.\nL'unione e l'amore\nRivelano ai Popoli\nLe vie del Signore.\nGiuriamo far libero\nIl suolo natìo.\nUniti per Dio,\nChi vincer ci può?`
        },
        {
            id: 'miranda',
            title: 'Himno del Estado Miranda',
            author: 'Letra: Jacinto Áñez | Música: Germán Lira',
            content: `Coro\n\nGloria al héroe inmortal que destaca\nSu bizarra figura de la historia\nDel cenit a la negra Carraca\nComo pródiga fuente de gloria\n\nI\n\nCruza el suelo infecundo Donde fuerzas arteras\nArrebatan al mundo\nSu don de libertad;\nNo respetan fronteras\nde los pueblos que gimen; Ante el odio y el crimen\nSu deber es luchar.\n\nII\n\nSi España le fulmina\ndetrás de sus altares\nInglaterra ilumina\nSu sendero inmortal; Desprecia de los zares\nLa codicia ofrenda\nPorque falta a su tienda\nLa dulce libertad.\n\nIII\n\nFrancia la abre sus brazos\nDespedazado el pecho, Porque a duros zarpazos Un trono derrumbo;\nY el humano derecho\nAl erguirse triunfante\nVio el esfuerzo pujante\nDe miranda en acción.`
        },
        {
            id: 'colegio',
            title: 'Himno del Colegio Patria',
            author: 'Letra: Mirtha Cabezas | Música: Antonella Geraci',
            content: `Coro\n\nGloria a tì ¡Oh! Colegio querido\nGloria a tì escuela del deber\nEres fuente de vida inagotable\nDe enseñanza, entusiasmo y saber\n\nI (Estrofa)\n\n¡Oh! Colegio Patria\nRefugio de nuestra juventud\nReunidos tus hijos te alabamos\nCon un canto de gratitud\n\n(Coro)\n\nII (Estrofa)\n\n¡Oh! Colegio Patria\nInstituto de digna admiración\nNombre que nos llega al corazón\nCon alegría y gran exaltación\n\n(Coro)\n\nIII (Estrofa)\n\n¡Oh! Colegio Patria\nHogar de nuestra formación\nAlgún día nuestras luces brillarán\nColegio Patria prosigue tu labor`
        }
    ]

    const activeItem = identityItems.find(i => i.id === activeRing)

    const RingButton = ({ item }) => (
        <button
            onClick={() => setActiveRing(item.id)}
            className={`group relative flex flex-col items-center transition-all duration-500 ${activeRing === item.id ? 'scale-110 md:scale-125' : 'hover:scale-110'}`}
        >
            <div
                className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-[5px] md:border-[6px] flex items-center justify-center transition-all duration-500 shadow-xl ${activeRing === item.id ? 'z-10 bg-white ring-8 ring-white/20' : 'bg-transparent opacity-40 hover:opacity-100 hover:bg-white/5'}`}
                style={{ borderColor: item.hex }}
            >
                <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${activeRing === item.id ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`}
                    style={{ backgroundColor: item.hex }}
                ></div>
            </div>
            <span
                className={`mt-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${activeRing === item.id ? 'text-gray-900 opacity-100 translate-y-0' : 'text-gray-400 opacity-60 group-hover:opacity-100 group-hover:text-gray-600'}`}
            >
                {item.title}
            </span>
        </button>
    )

    return (
        <section className="py-24 bg-white animate-fade-in min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Identidad Institucional</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-6">Nuestros Pilares</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium">La unión de los cinco continentes representada en nuestra esencia.</p>
                </div>

                {/* Olympic Rings Visual Layout - Optimized for Side-by-Side on Desktop */}
                <div className="max-w-6xl mx-auto mb-32 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left/Top: Rings Selector */}
                    <div className="w-full lg:w-[400px] bg-secondary/30 p-8 md:p-14 lg:p-10 rounded-[3rem] lg:rounded-[4rem] border border-gray-100 shadow-inner flex flex-col items-center justify-center gap-6 md:gap-8 min-h-[300px]">
                        <div className="flex justify-center gap-6 md:gap-12 lg:gap-8">
                            {identityItems.filter(i => i.position === 'top').map(item => (
                                <RingButton key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="flex justify-center gap-6 md:gap-12 lg:gap-8 -mt-2 lg:mt-0">
                            {identityItems.filter(i => i.position === 'bottom').map(item => (
                                <RingButton key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Right/Bottom: Information Card - Stabilized Height and Size */}
                    <div key={activeRing} className="flex-1 animate-slide-up bg-white p-8 md:p-14 lg:p-16 pt-16 md:pt-20 rounded-[3rem] lg:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 min-h-[550px] md:min-h-[500px] flex items-start justify-center relative overflow-hidden group self-stretch">
                        <div
                            className="absolute inset-0 opacity-[0.06] transition-all duration-1000 group-hover:scale-110"
                            style={{ backgroundColor: activeItem.hex }}
                        ></div>

                        <div className="relative z-10 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
                            <div className="flex flex-col items-center lg:items-start gap-5 mb-8 w-full">
                                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: activeItem.hex }}></div>
                                <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">{activeItem.title}</h3>
                                <div className="px-3 py-0.5 rounded-full bg-gray-50 border border-gray-100">
                                    <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.3em]">{activeItem.colorName}</span>
                                </div>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium text-balance mx-auto lg:mx-0 max-w-2xl">
                                "{activeItem.text}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Anthems Section */}
                <div className="max-w-4xl mx-auto pb-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Cultura</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">Identidad Sonora</h2>
                    </div>

                    <div className="grid gap-6">
                        {anthems.map((anthem) => (
                            <div key={anthem.id} className="group bg-secondary/50 border border-gray-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl">
                                <button
                                    onClick={() => setActiveAnthem(activeAnthem === anthem.id ? null : anthem.id)}
                                    className="w-full p-8 flex items-center justify-between text-left"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-500 ${activeAnthem === anthem.id ? 'bg-primary text-white' : 'bg-white text-primary group-hover:scale-110 shadow-sm'}`}>
                                            🎵
                                        </div>
                                        <div>
                                            <h4 className="font-black text-sm md:text-lg uppercase tracking-widest text-gray-900">{anthem.title}</h4>
                                            {anthem.subtitle && <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-none mt-1">{anthem.subtitle}</p>}
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                                                {activeAnthem === anthem.id ? 'Ocultar Letra' : 'Ver Letra'}
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`text-2xl transition-transform duration-500 ${activeAnthem === anthem.id ? 'rotate-180 text-primary' : 'text-gray-300'}`}>
                                        ↓
                                    </span>
                                </button>

                                <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeAnthem === anthem.id ? 'max-h-[3000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-10 md:p-16 bg-white/80">
                                        {anthem.author && (
                                            <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-50 pb-6">
                                                {anthem.author}
                                            </p>
                                        )}
                                        <p className="text-gray-700 md:text-xl leading-relaxed font-serif text-center whitespace-pre-line">
                                            {anthem.content}
                                        </p>
                                        <div className="mt-12 flex justify-center">
                                            <div className="w-20 h-1 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hymns
