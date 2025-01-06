'use client';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { teamType } from './Team';

export default function App({ teams }: { teams: teamType[] }) {
	return (
		<>
			{teams.map((team, index) => (
				<Card isFooterBlurred className="border-none" radius="lg" key={index}>
					<Image
						alt={team.title}
						className="object-cover w-96 h-96"
						height={300}
						src={`/images/team/${team.image}`}
						width={400}
					/>
					<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="text-md text-offWhite">{team.title}</p>
						<Button
							className="text-tiny text-white bg-primaryRed"
							color="default"
							radius="lg"
							size="md"
							variant="flat">
							{team.role}
						</Button>
					</CardFooter>
				</Card>
			))}
		</>
	);
}
