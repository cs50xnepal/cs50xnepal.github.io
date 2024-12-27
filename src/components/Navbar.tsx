'use client';
import React, { useEffect, useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from '@nextui-org/react';
import { CS50Logo } from '@/components/CS50Logo';
import { usePathname } from 'next/navigation';
import '../app/globals.css';

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const pathname = usePathname();

	const menuItems = [
		['/', 'Home'],
		['/#about', 'About Us'],
		['/syllabus', 'Syllabus'],
		['/local_team', 'Local Team'],
		['/#faqs', 'FAQs'],
		['/code-of-conduct', 'Code of Conduct'],
	];

	// IntersectionObserver for setting the active section
	useEffect(() => {
		if (typeof window === 'undefined') return; // Prevent SSR execution
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	// Function to check if a menu item is active
	const isActive = (href: string) => {
		if (href === '/') {
			return pathname === href && !activeSection;
		}
		if (href.startsWith('/#')) {
			const sectionId = href.split('#')[1];
			return activeSection === sectionId;
		}
		return pathname === href;
	};

	return (
		<Navbar
			maxWidth="full"
			className="navbar z-50 px-0 sm:px-0 md:px-6 font-medium bg-offYellow text-textBlue overflow-x-hidden"
			onMenuOpenChange={setIsMenuOpen}>
			{/* Navbar Brand */}
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href="/">
						<CS50Logo />
					</Link>
				</NavbarBrand>
			</NavbarContent>

			{/* Navbar Items */}
			<NavbarContent
				className="hidden sm:flex sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6"
				justify="center">
				{menuItems.map(([link, title], index) => (
					<NavbarItem
						className={`h-[40%] flex items-center text-textBlue transition-all duration-200 hover:text-primaryRed focus:text-primaryRed ${
							isActive(link)
								? 'border-b-3 rounded-sm border-primaryPurple text-primaryPurple hover:border-primaryRed focus:border-primaryRed'
								: ''
						} ${title === 'Syllabus' ? 'syllabus' : ''}`}
						key={`${title}-${index}`}>
						<Link className="sm:text-sm md:text-base text-base" href={link}>
							{title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			{/* Get Started Button */}
			<NavbarContent justify="end">
				<NavbarItem className="sm:px-0 sm:py-2 text-base px-4 py-1 rounded-md text-offWhite border-primaryPurple bg-primaryPurple border-3 transition-all duration-500 hover:bg-offWhite hover:text-primaryPurple hover:border-primaryPurple md:px-6 md:py-2 font-bold">
					Get Started 🔥
				</NavbarItem>
			</NavbarContent>

			{/* Navbar Menu for Mobile */}
			<NavbarMenu className="bg-offYellow text-textBlue font-medium h-auto-important">
				{menuItems.map(([link, title], index) => (
					<NavbarMenuItem
						className={`hover:text-primaryRed focus:text-primaryRed transition-all duration-200 px-2 ${
							isActive(link)
								? 'border-s-3 rounded-sm border-primaryPurple text-primaryPurple hover:border-primaryRed focus:border-primaryRed'
								: ''
						} ${title === 'Syllabus' ? 'syllabus2' : ''}`}
						key={`${title}-${index}`}>
						<Link className="w-full" href={link} size="md">
							{title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
