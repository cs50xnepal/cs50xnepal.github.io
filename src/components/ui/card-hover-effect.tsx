'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import { div } from 'framer-motion/client';
export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		avatar: StaticImport;
		title: string;
		description: string;
		badge?: string[];
		role?: string;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-content-center place-items-center py-4',
				className
			)}>
			{items.map((item, idx) => (
				<div
					key={idx + 1}
					className={`relative group  block p-2 h-full w-full`}
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-textBlue block  rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{ duration: 0.3, ease: 'linear', delay: 0.2 }}
							/>
						)}
					</AnimatePresence>
					<Card>
						<Image
							src={item.avatar}
							alt={item.title}
							width={150}
							height={150}
							loading="eager"
							className="bg-textBlue w-48 h-48 rounded-full"
						/>
						{item.role && (
							<Chip className="bg-textBlue text-white text-xs text-center flex justify-center items-center mt-2">
								{item.role}
							</Chip>
						)}
						<CardTitle>{item.title}</CardTitle>
						{item.badge && (
							<div className="flex flex-wrap gap-2 justify-center items-center mt-2">
								{item.badge.map((badge, idxBadge) => (
									<p
										className="bg-cs50Yellow rounded px-2 text-white flex flex-wrap justify-center items-center text-sm"
										key={idxBadge}>
										{badge}
									</p>
								))}
							</div>
						)}
						<CardDescription>{item.description}</CardDescription>
					</Card>
				</div>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'rounded-2xl h-full w-full p-4 overflow-hidden bg-offWhite shadow-lg border border-transparent group-hover:border-textBlue relative z-20',
				className
			)}>
			<div className="relative justify-center z-50">
				<div className="p-4 flex flex-col justify-center items-center">
					{children}
				</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				'text-textBlue text-xl font-bold tracking-wide mt-2',
				className
			)}>
			{children}
		</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				'mt-4 text-gray-400 tracking-wide font-medium leading-relaxed text-sm',
				className
			)}>
			{children}
		</p>
	);
};
