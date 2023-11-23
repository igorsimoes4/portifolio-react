import Image from "next/image";

export const About = () => {
    return (
        <section id="About" className="w-full p-14 text-white scroll-mt-40">
            <div className="f">
                <h1 className="text-center text-4xl">SOBRE MIM</h1>
                <h3 className="text-center">Aqui você encontrará mais informações sobre mim, o que faço.</h3>
                <div className="w-full flex flex-col md:flex-row gap-7 mt-7 justify-around">
                    <div className=" w-full md:w-1/2 text-justify">
                        <p className="mb-2 indent-3">
                            Estou iniciando na área de informática e tenho grande interesse em me especializar em diversas áreas. Possuo conhecimentos básicos em desenvolvimento de projetos web, programação, manutenção de computadores e infraestrutura de redes. Estou aprendendo a utilizar linguagens como HTML5, CSS3, JavaScript, SASS, SQL, MYSQL, BOOTSTRAP 3, BOOTSTRAP 4, WORDPRESS, PHP e o framework Laravel.
                        </p>
                        <p className="mb-2 indent-3">
                            Estou buscando o aprimoramento acadêmico e profissional. Atualmente estou matriculado no curso de Engenharia da Computação da universidade, onde estou adquirindo conhecimentos teóricos e práticos para complementar minha formação inicial.
                        </p>
                        <p className="mb-2 indent-3">
                            Também estou dedicando meu tempo livre para aprimorar minhas habilidades em PHP, principalmente com o framework Laravel, que hoje é amplamente utilizado no desenvolvimento de aplicações web. Acredito que o processo contínuo de aprendizado e atualização é essencial para fornecer soluções inovadoras e eficientes aos futuros clientes.
                        </p>
                        <p className="mb-2 indent-3">
                            Portanto, se você procura um profissional de informática que esteja em início de carreira, mas que esteja empenhado em adquirir novos conhecimentos e enfrentar desafios, pode contar comigo. Estou ansioso por oportunidades para colocar em prática minhas habilidades e conhecimentos, visando o sucesso de meus clientes.
                        </p>
                    </div>
                    <Image src='/images/profile.jpeg' className="profile-img w-full md:w-1/2 rounded-l-[10%] object-cover" width={400} height={400} alt="Igor personal headshot" />
                </div>
            </div>
        </section>
    );
}