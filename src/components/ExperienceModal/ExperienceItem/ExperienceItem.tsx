interface ExperienceItem {
	title: string;
	company: string;
	description: string;
	date: string;
}

export function ExperienceItem({
	title,
	company,
	description,
	date,
}: ExperienceItem) {
	return (
		<div className="relative mx-12 pb-16 grid grid-cols-6 gap-12 before:absolute before:left-[-2.7em] before:block before:h-full before:border-l-2 before:border-white before:content-['']">
			<div className="relative col-span-3">
				<div className="sticky top-0">
					<span className="text-[#eab676] -left-[1em] absolute rounded-full text-5xl">
						&bull;
					</span>
					<h2 className="text-3xl font-bold text-[#eab676]">{title}</h2>
					<h3 className="font-semibold text-2xl text-white">{company}</h3>
					<time className="p-0 m-0 text-lg text-white">{date}</time>
				</div>
			</div>
			<p className="pb-4 text-white text-base col-span-3">{description}</p>
		</div>
	);
}
