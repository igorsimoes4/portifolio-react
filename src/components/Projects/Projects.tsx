'use client'
import React, { useEffect, useState } from 'react';


export const Projects = () => {
    interface Repo {
        name: string;
        description: string;
        html_url: string;
        cover_url: string;
    }
    
    const [repos, setRepos] = useState<Repo[]>([]);
    const username = 'igorsimoes4';
    
    useEffect(() => {
        async function fetchRepositories() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const repositories: any[] = await response.json();
        
                let newRepos: Repo[] = [];
        
                for (const repo of repositories) {
                    const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/contents`);
                    const repoContents: any[] = await response.json();
        
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
                        <div key={index} className="bg-projects rounded-xl shadow-md overflow-hidden p-[10px]">
                            <div className=" flex flex-col ">
                                <div className=" w-full md:shrink-0 sm:flex sm:justify-center flex justify-center items-center">
                                    <img src={repo.cover_url} alt="" className="w-full lg:h-1/2 h-[100%] p-1 justify-center items-center" />
                                </div>
                                <div className=" w-full p-8">                            
                                    <a href={repo.html_url} target="_blank" className="block mt-1 text-lg leading-tight font-medium capitalize text-white hover:underline">{repo.name}</a>
                                    <p className="mt-2 text-slate-100 text-justify indent-3">{repo.description || 'Descrição não disponível'}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

