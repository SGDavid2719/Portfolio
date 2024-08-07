import useAppStore from "../../store/app-store";
import { LinkButton } from "../UI/LinkButton/LinkButton";
import Modal from "../UI/Modal/Modal";

export function ContactModal() {
	const { showSection, setShowSection } = useAppStore((state) => ({
		showSection: state.showSection,
		setShowSection: state.setShowSection,
	}));
	return (
		<Modal
			isOpen={showSection === "CONTACT"}
			onClose={() => setShowSection(null)}
			title="¡Buenas!"
		>
			<div className="max-w-[80%] [&>p]:mt-6 [&>p]:text-xl [&>p]:text-white">
				<p className="[&>strong]:text-[#eab676] [&>strong]:font-semibold">
					Me llamo <strong> David Santomé Galván</strong>, y con mis +3 años de
					experiencia como
					<strong> Ingeniero de Software</strong>, respaldados por mi titulación
					en <strong> Ingeniería Informática</strong>, pueden ser de gran
					interés para usted.
				</p>
				<p>
					A lo largo de mi trayecto profesional, he adquirido conocimientos en
					diversas áreas del mundo de la informática, que incluyen el desarrollo
					de interfaces de usuario, la creación de microservicios y la
					implementación de aplicaciones.
				</p>
				<p>
					Estoy convencido de que si considera la posibilidad de hablar conmigo,
					no perderá la oportunidad de contar con mi contribución al crecimiento
					de su empresa.
				</p>
				<nav className="flex flex-wrap gap-4 mt-8">
					<LinkButton href="https://www.linkedin.com/in/david-santom%C3%A9-galv%C3%A1n-8815021b8/">
						<>LinkedIn</>
					</LinkButton>
					<LinkButton href="mailto:santome.galvan.david@gmail.com">
						<>Contáctame</>
					</LinkButton>
				</nav>
			</div>
		</Modal>
	);
}
