import Link from 'next/link';
import React from 'react';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
			<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
				{/* Header Section */}
				<div className="bg-blue-600 text-white py-6 px-8">
					<h1 className="text-3xl font-bold text-center">
						Welcome to the <span className="text-red-500">CS50xNepal</span> AI
						Event!
					</h1>
					<p className="mt-4 text-lg text-center">
						Embark on a transformative six-week journey into the world of
						Artificial Intelligence with{' '}
						<span className="text-red-600">CS50xNepal</span>. From beginners to
						AI enthusiasts, there&apos;s something for everyone!
					</p>
				</div>
				{/* Event Overview Section */}
				<div className="py-8 px-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">
						Event Overview
					</h2>
					<p className="text-gray-700 text-lg mb-4">
						This event spans over <strong>six weeks</strong>, with a unique
						schedule each week designed to deepen your understanding of AI
						through expert sessions, workshops, and networking.
					</p>
					<ul className="text-gray-700 text-lg space-y-2">
						<li>
							<span className="font-semibold">📅 Start Date:</span> 22 December
							2024
						</li>
						<li>
							<span className="font-semibold">🗓️ Duration:</span> Six
							consecutive weekends
						</li>
						<li>
							<span className="font-semibold">📍 Venue:</span> Purwanchal
							Campus, Dharan
						</li>
						{/* <li>
                            <span className="font-semibold">⏰ Timing:</span> Saturdays and Sundays, 9:00 AM - 5:00 PM
                        </li> */}
					</ul>
				</div>
				{/* Weekly Highlights Section */}
				<div className="bg-blue-50 py-8 px-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">
						Weekly Highlights
					</h2>
					<ul className="text-gray-700 text-lg space-y-4">
						<li>
							📖{' '}
							<strong>Week 1: Python and Database Foundations and Setup</strong>{' '}
							- Explore the basics of artificial intelligence, including Python
							for Data Science, Object-Oriented Programming (overview), advanced
							Python concepts, SQL, and database querying with practical
							applications.
						</li>
						<li>
							📚 <strong>Week 2: Mathematics and Statistics</strong> - Build a
							strong foundation in linear algebra, vectors, matrices, calculus,
							set theory, logic, graph theory, and statistics using Python,
							including probability distributions and practical implementations.
						</li>
						<li>
							🔍 <strong>Week 3: Data Preprocessing and Exploration</strong> -
							Master skills in web scraping, advanced data preprocessing
							techniques (handling missing values, feature engineering,
							normalization), and data visualization with tools like Matplotlib,
							Seaborn, Tableau, and Power BI.
						</li>
						<li>
							🤖 <strong>Week 4: Machine Learning</strong> - Dive into core ML
							concepts with supervised learning techniques like regression
							(linear, polynomial) and unsupervised methods such as clustering
							(K-Means, DBSCAN) and PCA for dimensionality reduction.
						</li>
						<li>
							📝 <strong>Week 5: Practical Applications</strong> - Apply AI
							knowledge to real-world scenarios with end-to-end machine learning
							projects and team-based supervised implementations.
						</li>
					</ul>
					{/* add button to syllabus section */}
					<div className="py-8 px-8 text-center">
						<Link
							href="/syllabus"
							className="inline-block w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105">
							View Full Syllabus
						</Link>
					</div>
				</div>

				{/* Who can join */}
				<div className="py-8 px-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">
						Who Can Join?
					</h2>
					<ul>
						<li className="text-gray-700 text-lg mb-4">
							This event is open to all students, professionals, and AI
							enthusiasts who are eager to learn and explore the world of
							Artificial Intelligence.
						</li>
						<li className="text-gray-700 text-lg mb-4">
							No prior experience in AI is required. We welcome beginners and
							experienced learners alike.
						</li>
						<li className="text-gray-700 text-lg mb-4">
							Participants must have a basic understanding of programming
							concepts and a passion for AI.
						</li>
					</ul>
				</div>

				{/* Registration Section */}
				<div className="bg-blue-50 py-8 px-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">
						Registration Details
					</h2>
					<p className="text-gray-700 text-lg mb-4">
						Register now to secure your spot in this exclusive AI event. Limited
						seats available!
					</p>
					<Link
						href="/event/registration"
						className="inline-block w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105">
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}
