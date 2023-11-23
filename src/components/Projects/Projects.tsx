'use client'
import React, { useEffect, useState } from 'react';


export const Projects = () => {
    const [repos, setRepos] = useState([]);
    const username = 'igorsimoes4';

    useEffect(() => {
        async function fetchRepositories() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const repositories = await response.json();
        
                let newRepos = [];
        
                for (const repo of repositories) {
                    const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/contents`);
                    const repoContents = await response.json();
        
                    if (Array.isArray(repoContents)) {
                        const coverFile = repoContents.find(file => file.name === 'cover.png');
        
                        if (coverFile) {
                            newRepos.push({
                                name: repo.name,
                                description: repo.description,
                                html_url: repo.html_url,
                                cover_url: coverFile.download_url
                            });
                        }
                    }
                }
        
                setRepos(newRepos);
            } catch (error) {
                console.error('Erro ao buscar os repositórios:', error);
            }
        }
    
        fetchRepositories();
    }, []);

    return (
        <section id="Projects" className="p-14 w-full scroll-mt-16" >
            <div className='w-auto container'>
                <h1 className="text-4xl text-white text-center p-0 mb-5">Projetos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {repos.map((repo, index) => (
                        <div key={index} className=" bg-white rounded-xl shadow-md overflow-hidden">
                            <div className=" flex flex-col ">
                                <div className=" w-full md:shrink-0 sm:flex sm:justify-center flex justify-center items-center">
                                    <img src={repo.cover_url} alt="" className="w-full lg:h-1/2 h-[100%] p-1 justify-center items-center" />
                                </div>
                                <div className=" w-full p-8">                            
                                    <a href={repo.html_url} target="_blank" className="block mt-1 text-lg leading-tight font-medium capitalize text-black hover:underline">{repo.name}</a>
                                    <p className="mt-2 text-slate-500 text-justify indent-3">{repo.description || 'Descrição não disponível'}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
