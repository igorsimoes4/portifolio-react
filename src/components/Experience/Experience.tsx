export const Experience = () => {
    return (
        <section id="Experience" className="p-14 scroll-mt-16">
            <div className='w-auto'>
                <h1 className="text-4xl text-white  text-center p-0 mb-5">Experiência</h1>
                <div className="grid grid-cols-1 gap-4">                    
                    <div className=" bg-experience rounded-xl shadow-md overflow-hidden">
                        <div className="w-full flex flex-col lg:flex-row">
                            <div className="lg:w-1/4 w-full sm:justify-center flex justify-center">
                                <img src="/images/logo_guanella.jpg" alt="" className=" w-[100%] justify-center items-center" />                                    
                            </div>
                            <div className="lg:w-3/4 w-full p-8">                            
                                <h3 className="block mt-1 text-lg leading-tight font-medium text-white">Técnico de TI - Programador PHP</h3>
                                <p className="mt-2 text-slate-50">Associação Servos da Caridade - Escola São Luís Guanella</p>
                                <p className=" text-slate-50">maio de 2017 - outubro de 2022 · 5 anos 6 meses</p>
                                <p className=" text-slate-50">Porto Alegre, Rio Grande do Sul, Brasil · Presencial</p>
                                <p className="mt-2 text-slate-100 text-justify indent-3">Eu era responsável pela administração do site da empresa, utilizando HTML5, CSS3, JavaScript,
                                    WordPress e PHP com o Framework Laravel. Além disso, desempenhei um papel ativo na criação do
                                    sistema online da biblioteca, utilizando as mesmas tecnologias mencionadas anteriormente. Também tive a oportunidade de ensinar informática para crianças do Ensino Fundamental ao Ensino Médio, onde introduzi conceitos básicos de programação usando linguagens como Scratch e Python. Além disso, prestei serviços técnicos de informática na empresa, realizando manutenção de computadores e solucionando problemas técnicos com conhecimentos em diversas linguagens de programação e sistemas operacionais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
