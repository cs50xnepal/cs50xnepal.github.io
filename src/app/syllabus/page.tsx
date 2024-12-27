import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import cs50A01 from './assets/cs50A01.png';
import cs50A02 from './assets/cs50A02.png';
import cs50A03 from './assets/cs50A03.png';
import cs50A04 from './assets/cs50A04.png';
import cs50B01 from './assets/cs50B01.png';
import cs50B02 from './assets/cs50B02.png';
import cs50B03 from './assets/cs50B03.png';
import cs50B04 from './assets/cs50B04.png';
import cs50C01 from './assets/cs50C01.png';
import cs50C02 from './assets/cs50C02.png';
import cs50C03 from './assets/cs50C03.png';
import cs50C04 from './assets/cs50C04.png';
import cs50D01 from './assets/cs50D01.png';
import cs50D02 from './assets/cs50D02.png';
import cs50D03 from './assets/cs50D03.png';
import cs50D04 from './assets/cs50D04.png';
import cs50E01 from './assets/cs50E01.png';
import cs50E02 from './assets/cs50E02.jpg';
import cs50E03 from './assets/cs50E03.png';
import cs50E04 from './assets/cs50E04.png';
import { ul } from 'framer-motion/client';

type timelineEntry = {
	title: string;
	description: string;
	items: string[][];
	primaryHeading?: string[];
	images: StaticImport[];
};
const timelineData: timelineEntry[] = [
	{
		title: 'Week 1: Python and Database Foundations and Setup',
		description:
			'Week 1 introduces the basics of artificial intelligence, covering key concepts like problem-solving and intelligent agents to set the foundation for AI learning.',
		primaryHeading: ['Day 1: Python Foundation', 'Day 2: Data Management'],
		items: [
			[
				'Setting up a development environment',
				'Introduction to Python for Data Science',
				'Object-Oriented Programming in Python(over View matra)',
				'Best practices and advanced Python concepts',
				'Error Handling and Debugging',
				'Assessment and Feedback(Instructor Should design)',
			],
			[
				'Introduction to SQL',
				'Database Design',
				'Database Querying',
				'Practical',
			],
		],
		images: [cs50A01, cs50A02, cs50A03, cs50A04],
	},
	{
		title: 'WEEK 2: Mathemematics and Statistics',
		description:
			'In Week 2, we build a strong foundation in the mathematical and statistical concepts essential for machine learning and AI.',
		primaryHeading: ['Day 1: Mathematics for ML', 'Day 2: Statistics for ML'],
		items: [
			[
				'Linear Algebra',
				'Vectors and Matrices',
				'Calculus',
				'Set Theory and Logic',
				'Graph Theory',
			],
			[
				'Introduction to Statistics with Python of AI',
				'Descriptive Statistics',
				'Inferential Statistics',
				'Probability Distributions',
				'Practical',
			],
		],
		images: [cs50B01, cs50B02, cs50B03, cs50B04],
	},
	{
		title: 'WEEK 3: Data Preprocessing and Exploration',
		description:
			'Master essential skills in web scraping, advanced data preprocessing techniques, and data visualization to prepare and analyze data effectively for AI applications.',
		primaryHeading: [
			'Day 1: Web Scraping',
			'Day 2: Data Preprocessing Techniques',
			'Day 3: Data Visualization',
		],
		items: [
			[],
			[
				'Advanced data Preprocessing with Python',
				'Handling Missing Values',
				'Feature Engineering',
				'PCA',
				'Outlier Detection and Treatment',
				'Normalisation and Scaling',
			],
			[
				'Understanding Data Visualtization',
				'Introduction to MatPlotLib',
				'Introduction to Seaborn',
				'Advanced-Data Visualization Techniques',
				'Storytelling with Data',
				'Visualization Tools: (Introduction to Tableau, PowerBI, etc.)',
			],
		],
		images: [cs50C01, cs50C02, cs50C03, cs50C04],
	},
	{
		title: 'WEEK 4: Machine Learning',
		description:
			'In Week 4, Dive into core machine learning concepts, exploring supervised learning techniques like regression and classification, and unsupervised learning methods such as clustering and dimensionality reduction.',
		primaryHeading: [
			'Day 1: Supervised Learning: Regression and Classification Algorithms',
			'Day 2: Unsupervised Learning: Clustering and Dimensionality Reduction',
		],
		items: [
			[
				'Introduction to Regression',
				'Linear Regression',
				'Polynomial Regression',
				'Mean Absolute Error and Mean Squared Error',
			],
			['K-Means Clustering', 'Hierarchical Clustering', 'DBSCAN', 'PCA'],
		],
		images: [cs50D01, cs50D02, cs50D03, cs50D04],
	},
	{
		title: 'WEEK 5: Practical Applications',
		description:
			'In Week 5, Apply your knowledge to real-world scenarios with an end-to-end machine learning project and team-based supervised project implementation.',
		primaryHeading: ['Day 1: End to End Project', 'Day 2: Supervised Project'],
		items: [
			['Machine Learning Project'],
			['Team Based Project Implementation'],
		],
		images: [cs50E01, cs50E02, cs50E03, cs50E04],
	},
];
export default function TimelineDemo() {
	const data = timelineData.map((entry) => ({
		title: entry.title,
		content: (
			<div>
				<p className="text-textBlue text-xs md:text-sm font-normal mb-8">
					{entry.description}
				</p>
				<ul className="list-none mb-8">
					{entry.primaryHeading?.map((heading, index) => (
						<li key={index} className="mb-4">
							<h4 className="text-md font-semibold text-textBlue mb-2">
								{heading}
							</h4>
							<div className="flex flex-col gap-2 items-left text-textBlue text-xs md:text-sm ml-4">
								{entry.items[index]?.map((item, idx) => (
									<div
										key={idx}
										className="flex gap-2 items-center text-xs md:text-sm">
										🔥 {item}
									</div>
								))}
							</div>
						</li>
					))}
				</ul>
				<div className="grid grid-cols-2 gap-4">
					{entry.images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.1)]"
						/>
					))}
				</div>
			</div>
		),
	}));

	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}
