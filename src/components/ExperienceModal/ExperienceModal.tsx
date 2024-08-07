import useAppStore from "../../store/app-store";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";
import Modal from "../UI/Modal/Modal";

export function ExperienceModal() {
	const { showSection, setShowSection } = useAppStore((state) => ({
		showSection: state.showSection,
		setShowSection: state.setShowSection,
	}));

	const EXPERIENCIE = [
		{
			date: "Febrero 2023 - Actualmente",
			title: "Front End Developer Associate Specialist",
			company: "Melia Hotels International",
			description:
				"Diseño, desarrollo, optimización y soporte de nuestro motor de reservas, esencial para la operación diaria de los hoteles.",
		},
		{
			date: "Junio 2022 - Febrero 2023",
			title: "Full Stack Developer",
			company: "CGI",
			description:
				"Desarrollador de interfaces de usuario utilizando React, y desarrollador de microservicios con Spring Boot.",
		},
		{
			date: "Agosto 2021 - Junio 2022",
			title: "Junior Full Stack Developer",
			company: "European Accounting",
			description:
				"Encargado de liderar la plataforma de contabilidad destinada a clientes extranjeros, realizando una mejora visual completa del aplicativo. Implementé medidas de integración continua para optimizar y agilizar los procesos de desarrollo y despliegue.",
		},
	];

	return (
		<Modal
			isOpen={showSection === "EXPERIENCE"}
			onClose={() => setShowSection(null)}
			title="Experiencia laboral"
		>
			<ol className="relative mt-6">
				{EXPERIENCIE.map((experiencie) => (
					<li key={experiencie.title}>
						<ExperienceItem {...experiencie} />
					</li>
				))}
			</ol>
		</Modal>
	);
}
