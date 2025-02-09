'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image, { type StaticImageData } from 'next/image';
import { type FC, useMemo, useRef } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

import Dharan from '@/app/madePossibleBy/assets/dharan.svg';
import IOE from '@/app/madePossibleBy/assets/tuuni.svg';
import Nepse from '@/app/madePossibleBy/assets/nepse.png';
import Leapfrog from '@/app/madePossibleBy/assets/leapfrog.svg';
import GithubEducation from '@/app/madePossibleBy/assets/gitedu.svg';
import DataCamp from '@/app/madePossibleBy/assets/datacamp_donates.png';
import MLSA from '@/app/madePossibleBy/assets/msLearn.png';
import Utthan from '@/app/madePossibleBy/assets/utthan.png';
import Vianet from '@/app/madePossibleBy/assets/vianet.png';
import SFL from '@/app/madePossibleBy/assets/sfl.png';
import NASO from '@/app/madePossibleBy/assets/naso.png';

type Props = {
	isReversed?: boolean;
	className?: string;
};

const ICONS: StaticImageData[] = [
	Dharan,
	IOE,
	Nepse,
	Leapfrog,
	GithubEducation,
	DataCamp,
	MLSA,
	Utthan,
	SFL,
	Vianet,
	NASO,
];

const ELEMENTS = [...ICONS, ...ICONS];

const TestimonialsMarquee: FC<Props> = ({ isReversed = false, className }) => {
	const movingContainer = useRef<HTMLDivElement>(null);
	const timeline = useRef<GSAPTimeline>();

	useGSAP(
		() => {
			// Translate the container half of its width to the left (the width of list)
			// Then set it back to the start, and repeat infinitely.
			const setupInfiniteMarqueeTimeline = () => {
				gsap.set(movingContainer.current, {
					xPercent: isReversed ? -50 : 0,
				});
				timeline.current = gsap
					.timeline({
						defaults: { ease: 'none', repeat: -1 },
					})
					.to(movingContainer.current, {
						xPercent: isReversed ? 0 : -50,
						duration: 20,
					})
					.set(movingContainer.current, { xPercent: 0 });
			};

			setupInfiniteMarqueeTimeline();
		},
		{ dependencies: [isReversed] }
	);

	const timelineTimeScaleTween = useRef<GSAPTween>();

	const onPointerEnter = () => {
		if (!timeline.current) return;
		timelineTimeScaleTween.current?.kill();
		timelineTimeScaleTween.current = gsap.to(timeline.current, {
			timeScale: 0.25,
			duration: 0.4,
		});
	};

	const onPointerLeave = () => {
		if (!timeline.current) return;
		timelineTimeScaleTween.current?.kill();
		timelineTimeScaleTween.current = gsap.to(timeline.current, {
			timeScale: 1,
			duration: 0.2,
		});
	};

	const list = useMemo(
		() => (
			<div className="flex w-fit items-center gap-10">
				{ELEMENTS.map((src, index) => {
					const isLast = index === ELEMENTS.length - 1;
					return (
						<div
							key={index}
							className={twJoin(
								'relative flex w-40 h-40 shrink-0 items-center justify-center',
								isLast && 'mr-10'
							)}>
							<Image
								src={src}
								alt="Technology icon"
								height={100}
								className="object-contain"
							/>
						</div>
					);
				})}
			</div>
		),
		[]
	);

	return (
		<div
			className={twMerge('max-w-full select-none overflow-hidden', className)}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
			style={{
				maskImage:
					'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
			}}>
			<div ref={movingContainer} className="flex w-fit">
				{list}
				{list}
			</div>
		</div>
	);
};

export default TestimonialsMarquee;
