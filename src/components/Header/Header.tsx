import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
    return (
        <header 
        className="w-full h-auto p-4 flex items-center justify-center scroll-mt-16"
        style={{
            backgroundImage: 'linear-gradient(to right, rgba(32, 35, 41, 0.73), rgba(32, 35, 41, 0.8)), url(/bg.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}
        >
            <div className="w-auto container flex flex-col items-center justify-center rounded-2xl p-10">
                <Image src='/images/profile.jpeg' className="profile-img rounded-full" width={300} height={300} alt="Igor personal headshot" />
                <div className="hero-text text-center mt-10">
                    <h1 className="text-4xl font-bold mb-2 text-white">Oi, eu sou Igor 👋</h1>
                    <p className="text-lg text-white text-justify mt-2 indent-3">
                    Como Desenvolvedor Back End e entusiasta da área de informática, estou focado no desenvolvimento de projetos web e na manutenção de computadores e infraestrutura de rede. Atualmente, estou aprimorando minhas habilidades em várias linguagens e ferramentas, buscando oportunidades para aplicar meus conhecimentos em projetos desafiadores e continuar crescendo profissionalmente. Estou determinado a enfrentar novos desafios com dedicação e entusiasmo.
                    </p>
                    <div className="social-icons flex justify-center space-x-4 mt-5">
                        <div className=" bg-[#1CA39E] flex flex-row justify-center items-center rounded-md w-[200px]">
                            <a
                                href="mailto:igor01silveira@gmail.com"
                                aria-label="Gmail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-slate-300  p-3 rounded-2xl hover:text-[#fff] "
                            >
                                <FontAwesomeIcon width={30} icon={faGoogle}/>
                            </a>
                            <a
                                href="https://github.com/igorsimoes4"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 p-3 rounded-2xl hover:text-[#fff] "
                            >
                                <FontAwesomeIcon width={30} icon={faGithub}/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/igorsimoesdasilveira/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300  p-3 rounded-2xl hover:text-[#fff] "
                            >
                                <FontAwesomeIcon width={30} icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}