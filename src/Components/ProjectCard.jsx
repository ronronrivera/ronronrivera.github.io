import { Card } from 'flowbite-react'
import { FiExternalLink } from "react-icons/fi";
import SuspensionInfoCard from './Suspended';


const ProjectCard = ({project}) => {
    const isVideo = project.imgSrc?.endsWith('.mp4') || project.imgSrc?.endsWith('.webm');

    return (
        <div className='my-10 relative'>
            <Card
                className="max-w-lg transition duration-300 ease-in-out hover:shadow-2xl"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={!isVideo ? project.imgSrc : undefined}
            >
                {isVideo && (
                    <video
                        src={project.imgSrc}
                        autoPlay
                        muted
                        loop
                        className="absolute top-0 left-0 w-full rounded-t-lg object-cover border border-gray-200 dark:border-gray-700"
                        style={{ height: '200px' }}
                    />
                )}
                <h5 className={`text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${isVideo ? 'mt-52' : ''}`}>
                    {project.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {project.paragraph}
                </p>
                <div className='flex flex-1 text-gray-900 gap-4'>
                    <button className="max-w-xl px-4 py-2 flex gap-2 rounded-full text-center dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 text-gray-50 bg-gray-800 hover:bg-gray-950 transition duration-300 ease-in-out">
                        <svg className='w-5 h-5' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill='currentColor' d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        <a href={project.source} target='_blank'>Source</a>
                    </button>
                    
                    {project.hasUrl && (
                        <a
                            href={project.isSuspended ? undefined : project.link}
                            target={project.isSuspended ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-disabled={project.isSuspended}
                            onClick={(e) => {
                                if (project.isSuspended) e.preventDefault();
                            }}
                            className={`
max-w-xl px-4 py-2 flex gap-2 rounded-full transition duration-300 ease-in-out
${
project.isSuspended
? "bg-gray-400 text-gray-700 cursor-not-allowed"
: "bg-gray-800 dark:bg-gray-50 text-gray-50 dark:text-gray-800 hover:bg-gray-950"
}
`}
                        >
                            <FiExternalLink />
                            Visit
                        </a>
                    )}
                    {project.isSuspended && (
                        <div className="relative group">
                            {/* LEFT CARD */}
                            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden group-hover:block z-50">
                                <SuspensionInfoCard />
                            </div>

                            {/* BUTTON */}
                            <button
                                disabled
                                className="px-4 py-2 rounded-full text-white bg-red-900 cursor-not-allowed"
                            >
                                Currently Suspended
                            </button>
                        </div>
                    )}

                    {project.inDevelopment && (
                        <div className="relative group inline-flex items-center">
                            {/* STATUS BADGE */}
                            <span
                                className="
                                inline-flex items-center gap-2
                                px-4 py-2
                                rounded-full
                                text-xs font-medium
                                dark:text-amber-700 text-amber-400
                                bg-amber-950
                                border border-amber-200 dark:border-amber-900
                                cursor-default
                                select-none
                                "
                            >
                                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                In Development
                            </span>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default ProjectCard 
