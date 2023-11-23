// components/Footer.js

import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bottom-0 w-full bg-[#202329] text-white flex justify-around items-center flex-col sm:flex-row p-3">
            <div className="foter_logo">
                <a href="/" className="flex flex-row leading-[80px]">
                    <Image src="/images/profile_logo.png" width={80} height={10} alt="" className="rounded-full" />
                    <h1 className='text-white ml-2'>Igor Simões da Silveira</h1>
                </a>
            </div>
            <div className="footer_copy mt-4 sm:mt-0">
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

