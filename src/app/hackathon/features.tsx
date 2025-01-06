import { cn } from '@/lib/utils';
import {
	IconAdjustmentsBolt,
	IconCloud,
	IconCurrencyDollar,
	IconEaseInOut,
	IconHeart,
	IconHelp,
	IconRouteAltLeft,
	IconTerminal2,
} from '@tabler/icons-react';
import Image from 'next/image';
import { FaLightbulb } from 'react-icons/fa6';
import Build from '@/app/hackathon/assets/Build.svg';
import Tracks from '@/app/hackathon/assets/Track.svg';
import Submit from '@/app/hackathon/assets/Submit.svg';
import Idea from '@/app/hackathon/assets/Idea.svg';
import { div } from 'framer-motion/client';

export default function Track() {
	const features = [
		{
			title: '1. Understand the Challenge',
			description:
				'Choose from various AI-focused prompts across multiple tracks. Each prompt will provide background information, but you’re encouraged to research independently.',
			icon: <Image src={Idea} alt="Build Light" width={100} height={100} />,
		},
		{
			title: '2. Ideate & Plan Your Solution',
			description:
				'Once you understand the problem, brainstorm ideas with your team. Sketch algorithms, design prototypes, and craft innovative solutions to tackle the challenge.',
			icon: <Image src={Tracks} alt="Build Light" width={100} height={100} />,
		},
		{
			title: '3. Build Your AI Solution',
			description:
				'Leverage Python, or other tools to bring your idea to life. Train machine learning models, integrate APIs, and create interactive solutions to solve real-world problems. Push the limits of your coding skills while applying concepts learned from CS50.',
			icon: <Image src={Build} alt="Build Light" width={100} height={100} />,
		},
		{
			title: '4. Submit & Compete for Prizes',
			description:
				'Submit your AI-powered project for evaluation by our panel of industry experts. Top teams will win exciting prizes and recognition!',
			icon: <Image src={Submit} alt="Build Light" width={100} height={100} />,
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
			{features.map((feature, index) => (
				<Feature key={feature.title} {...feature} index={index} />
			))}
		</div>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div className="flex justify-center">
			<div
				className={cn(
					'flex flex-col lg:border-r  py-10 relative group/feature',
					(index === 0 || index === 4) && 'lg:border-l ',
					index < 4 && 'lg:border-b'
				)}>
				{index < 4 && (
					<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
				)}
				{index >= 4 && (
					<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100  to-transparent pointer-events-none" />
				)}
				<div className="mb-4 relative z-10 px-10 text-cs50Yellow">{icon}</div>
				<div className="text-lg font-bold mb-2 relative z-10 px-10">
					<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-primaryRed transition-all duration-200 origin-center" />
					<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ">
						{title}
					</span>
				</div>
				<p className="text-sm text-neutral-500 max-w-xs relative z-10 px-10">
					{description}
				</p>
			</div>
		</div>
	);
};
