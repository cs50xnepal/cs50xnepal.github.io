import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { ITeam } from '@/app/local_team/team_list_type';
import { Chip } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { h1 } from 'framer-motion/client';
import cn from 'classnames';

export default function App({ Teams }: { Teams: ITeam[] }) {
	const past_coordinator = {
		image: 'suraj_bhattrai.png',
		badge: 'CS50xNepal',
		name: 'Suraj Bhattarai',
		role: 'Coordinator',
	};
	return (
		<>
			<div className="overflow-hidden mt-4 px-6">
				<h1 className="flex text-4xl text-center font-black items-center justify-center  text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Meet Our Local Team
				</h1>
				<p className="text-sm py-2 px-6 sm:px-28 lg:w-[80%] mx-auto  text-center text-textBlue ">
					Our local CS50 AI team is committed to leading in innovation,
					excellence, and growth, equipping students with the skills to shape a
					transformative future in artificial intelligence.
				</p>
				<div className="flex flex-col justify-center items-center mt-8 mb-4">
					<div className="flex flex-row flex-wrap gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20 mx-auto justify-center items-center sm:mt-0 mb-6 sm:mb-12">
						{Teams.map((team, index) =>
							team.role === 'Advisor' ? (
								<Card
									key={`${index + 1} - ${team.name}`}
									className={`bg-bg-effect bg-cover bg-center bg-offWhite px-1 py-1 max-w-max max-h-max ${
										index === 2 ? 'lg:col-span-1 justify-self-center' : ''
									}`}>
									<CardBody>
										<Image
											alt={`${team.name} Image`}
											className="object-cover rounded-lg"
											src={
												team.image
													? `/images/team/${team.image}`
													: '/images/team/default.jpg'
											}
											width={270}
											height={200}
											loading="eager"
										/>
									</CardBody>
									<CardHeader className="flex-col items-start">
										<h4 className="font-semibold text-regular uppercase text-primaryPurple">
											{team.name}
										</h4>
										<div className="flex flex-row items-left gap-2 flex-wrap">
											<small className="text-textBlue pt-1 text-sm">
												{team.role}
											</small>
											{team.badge && (
												<Chip className="bg-textBlue  text-white text-xs text-center flex justify-center items-center">
													{team.badge}
												</Chip>
											)}
										</div>
									</CardHeader>
								</Card>
							) : null
						)}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20mx-auto justify-center items-center sm:mt-0">
						{Teams.map((team, index) =>
							team.role === 'Advisor' ? null : (
								<Card
									key={`${index + 1} - ${team.name}`}
									className="bg-bg-effect bg-cover bg-center bg-offWhite px-1 py-1 max-w-max max-h-max">
									<CardBody>
										<Image
											alt={`${team.name} Image`}
											className="object-cover rounded-lg"
											src={
												team.image
													? `/images/team/${team.image}`
													: '/images/team/default.jpg'
											}
											width={270}
											height={200}
											loading="eager"
										/>
									</CardBody>
									<CardHeader className="flex-col items-start">
										<h4 className="font-semibold text-regular uppercase text-primaryPurple">
											{team.name}
										</h4>
										<div className="flex flex-row items-left gap-2 flex-wrap">
											<small className="text-textBlue pt-1 text-sm">
												{team.role}
											</small>
											{team.badge && (
												<Chip className="bg-textBlue  text-white text-xs text-center flex justify-center items-center">
													{team.badge}
												</Chip>
											)}
										</div>
									</CardHeader>
								</Card>
							)
						)}
					</div>
				</div>
				<div className="flex flex-col justify-center items-center mt-8 mb-4">
					<h1 className="flex text-4xl text-center font-black items-center justify-center  text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950 mt-4 mb-8">
						Meet Our Past Coordinator
					</h1>
					<div className="flex justify-center items-center">
						<Card className="bg-bg-effect bg-cover bg-center bg-offWhite px-1 py-1 max-w-max max-h-max">
							<CardBody>
								<Image
									alt={` ${past_coordinator.name} Image`}
									className="object-cover rounded-lg"
									src={
										past_coordinator.image
											? `/images/team/${past_coordinator.image}`
											: '/images/team/default.jpg'
									}
									width={270}
									height={200}
									loading="eager"
								/>
							</CardBody>
							<CardHeader className="flex-col items-start">
								<h4 className="font-semibold text-regular uppercase text-primaryPurple">
									{past_coordinator.name}
								</h4>
								<div className="flex flex-row items-left gap-2 flex-wrap">
									<small className="text-textBlue pt-1 text-sm">
										{past_coordinator.role}
									</small>
									{past_coordinator.badge && (
										<Chip className="bg-textBlue  text-white text-xs text-center flex justify-center items-center">
											{past_coordinator.badge}
										</Chip>
									)}
								</div>
							</CardHeader>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
