import useAppStore from "../../store/app-store";
import Modal from "../UI/Modal/Modal";

export function KnowledgeModal() {
	const { showSection, setShowSection } = useAppStore((state) => ({
		showSection: state.showSection,
		setShowSection: state.setShowSection,
	}));
	return (
		<Modal
			isOpen={showSection === "KNOWLEDGE"}
			onClose={() => setShowSection(null)}
			title="Conocimientos"
		>
			<article>
				<p className="mt-6 text-xl [&>strong]:text-[#eab676]">
					Tengo el título de <strong> Ingeniero de Software </strong> con una
					sólida formación en desarrollo Full Stack y{" "}
					<strong>especialización en Front End</strong>.
				</p>

				<ul className="mt-16 [&>li]:mt-6 [&>li]:text-xl [&>li>strong]:text-[#eab676]">
					<li>
						<strong>Idiomas: </strong> Comunicación fluida en español e inglés,
						y actualmente estoy aprendiendo chino para ampliar mis capacidades
						de comunicación en un contexto global.
					</li>
					<li>
						<strong>Desarrollo Front End: </strong> Especializado en la creación
						de interfaces de usuario intuitivas y responsivas, utilizando
						tecnologías como HTML, CSS, JavaScript y librerías/frameworks como
						React o Angular.
					</li>
					<li>
						<strong>Desarrollo Back End: </strong> Competente en el diseño y la
						implementación de soluciones de servidor utilizando lenguajes y
						frameworks como Node.js, Java, Python, C# y Go.
					</li>
					<li>
						<strong>Estructuras de Datos y Algoritmos: </strong> Actualmente me
						estoy formando en la comprensión y aplicación de diversas
						estructuras de datos y algoritmos para mejorar la eficiencia y el
						rendimiento de las aplicaciones.
					</li>
					<li>
						<strong>Patrones de Diseño: </strong> Estudio patrones de diseño
						para crear soluciones de software más robustas, reutilizables y
						mantenibles.
					</li>
					<li>
						<strong>Arquitectura de Software: </strong> Formación en la
						planificación y desarrollo de arquitecturas de software escalables y
						eficientes que soporten las necesidades actuales y futuras de las
						aplicaciones.
					</li>
				</ul>
			</article>
		</Modal>
	);
}
