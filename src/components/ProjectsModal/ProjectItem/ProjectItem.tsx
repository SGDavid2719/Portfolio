import { LinkButton } from "../../UI/LinkButton/LinkButton";

interface ProjectItem {
	image: string;
	title: string;
	description: string;
	github: string;
}

export function ProjectItem({
	image,
	title,
	description,
	github,
}: ProjectItem) {
	return (
		<article className="flex flex-row group space-x-8">
			<div className="w-1/2 border border-[#333] rounded-xl overflow-clip">
				<img
					alt={`${title} image`}
					className="object-cover object-top h-64 w-full transition duration-700 group-hover:scale-105"
					loading="lazy"
					src={image}
				/>
			</div>

			<div className="w-1/2">
				<h2 className="text-3xl font-bold text-[#eab676]">{title}</h2>
				<div className="mt-2">
					<p className="mt-4 text-base text-white">{description}</p>
					<footer className="flex mt-6">
						<LinkButton href={github}>
							<>Code</>
						</LinkButton>
					</footer>
				</div>
			</div>
		</article>
	);
}
