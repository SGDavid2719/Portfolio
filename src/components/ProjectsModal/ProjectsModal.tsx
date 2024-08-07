import useAppStore from "../../store/app-store";
import Modal from "../UI/Modal/Modal";
import { ProjectItem } from "./ProjectItem/ProjectItem";

export function ProjectsModal() {
	const { showSection, setShowSection } = useAppStore((state) => ({
		showSection: state.showSection,
		setShowSection: state.setShowSection,
	}));

	const PROJECTS = [
		{
			title: "JSRunner",
			description:
				"Este proyecto es una aplicación de escritorio construida con Electron que permite a los usuarios escribir y ejecutar código JavaScript en un entorno local. Está diseñado para ser una herramienta sencilla y efectiva para los desarrolladores que desean experimentar con JavaScript en sus escritorios.",
			github: "https://github.com/SGDavid2719/JSRunner",
			image: "/projects/JSRunner.webp",
		},
		{
			title: "URLShortener",
			description:
				"Este proyecto es un acortador de URL completo, que incluye un backend construido con Java y Spring Boot, un frontend construido con React y una base de datos PostgreSQL. El proyecto está dockerizado para facilitar la implementación y el desarrollo local.",
			image: "/projects/URLShortener.webp",
			github: "https://github.com/SGDavid2719/URLShortener",
		},
		{
			title: "Santdorf",
			description:
				"Este proyecto está construido con React, Vite, Storybook y TypeScript, enfocándose en la accesibilidad y los principios de diseño atómico para lograr una biblioteca de componentes modular y escalable.",
			github: "https://github.com/SGDavid2719/Santdorf",
			image: "/projects/Santdorf.webp",
		},
		{
			title: "Retro Games",
			description:
				"Una serie de juegos clásicos implementados en HTML, CSS y JavaScript. La colección incluye Snake, Tetris, Pong y Space Invaders.",
			image: "/projects/RetroGames.webp",
			github: "https://github.com/SGDavid2719/Retro-Games",
		},
	];

	return (
		<Modal
			isOpen={showSection === "PROJECTS"}
			onClose={() => setShowSection(null)}
			title="Proyectos"
		>
			<ol>
				{PROJECTS.map((project, porjectIndex) => (
					<li
						key={project.title}
						className={porjectIndex === 0 ? "mt-6" : "mt-16"}
					>
						<ProjectItem {...project} />
					</li>
				))}
			</ol>
		</Modal>
	);
}
