import Pukar from './assets/pukar-karki.png';
import Mahesh from './assets/mahesh-chaudhary.png';
import Suraj from './assets/suraj-bhattarai.png';
import Muna from './assets/muna-bhattarai.png';
import Sudip from './assets/Sudip.jpg';
import Pujan from './assets/Pujan.jpg';
import Basanta from './assets/Basanta.jpg';
import Suwash from './assets/Suwash.jpg';
import Saurab from './assets/Saurab.jpg';
import Kishor from './assets/Kishor.jpg';
import BinilRaj from './assets/BinilRaj.jpeg';
import Dhiraj from './assets/Dhiraj.jpeg';
import Sunil from './assets/sunil-poudel.jpg';
import Saroj from './assets/Saroj.jpeg';
import Sujan from './assets/sujan.jpeg';
import Aashish from './assets/aashish.jpeg';
import James from './assets/james.jpeg';
import Pawan from './assets/pawan.jpeg';

import { IInstructorCard } from './Instructor_card_type';
import { MdUnarchive } from 'react-icons/md';

export const instructorList: IInstructorCard[] = [
	{
		title: 'Pukar Karki',
		description:
			'Proficient in Big Data technologies, Mr. Karki is a young and energetic computer engineering (Asst.) professor at IOE Purwanchal Campus.',
		avatar: Pukar,
	},
	{
		title: 'Mahesh Chaudhary',
		description:
			'Beta MLSA and a tech expert, Mr. Chaudhary is a final-year student at IOE Purwanchal Campus and the President at EXCESS. With strong leadership and vision, he guides his team through tech intuition, empowering them to embrace change and make bold decisions. ',
		avatar: Mahesh,
		badge: ['President at EXCESS', 'Beta MLSA'],
	},
	{
		title: 'Suraj Bhattarai',
		description:
			'Curious and insightful, Mr Bhattarai is an awesome tech community leader, mentor & instructor and equally a cloud enthusiast.',
		avatar: Suraj,
		badge: ['Liaison, LibreOffice Community', 'Beta MLSA'],
	},
	{
		title: 'Muna Bhattarai',
		description:
			'GitHub Campus Expert and a rising female leader in tech community, Ms. Bhattarai is a GitHub Campus Expert and beta MLSA.',
		avatar: Muna,
		badge: ['Github Campus Expert', 'Beta MLSA'],
	},
	{
		title: 'Sudip Parajuli',
		description:
			'Driven and enthusiastic, Mr. Parajuli is a passionate techie and educator with hands-on experience in IoT, robotics, Django, and machine learning, constantly exploring new technologies and empowering others to learn and grow. ',
		avatar: Sudip,
	},
	{
		title: 'Dhiraj K.C',
		description:
			'Dhiraj K.C. is a dedicated AI mentor with deep expertise in machine learning and data science. As Creative Operations @ Students For Liberty and Planning Head @ CS50xNepal, he drives impactful initiatives at the intersection of technology and education.',
		avatar: Dhiraj,
	},
	{
		title: 'Basanta Shrestha',
		description:
			'Inquisitive and passionate, Mr. Basanta Shrestha is a dedicated mentor and instructor who thrives on sharing knowledge, exploring tech innovations, and guiding others on their learning journey. ',
		avatar: Basanta,
	},
	{
		title: 'Sujan Karki',
		description:
			'Driven and enthusiastic,Mr. Sujan Karki is a dedicated lecturer at IOE, ERC, with a degree in computer engineering. Passionate about AI and machine learning, he guided students in unsupervised learning during CS50 AI classes,helping students learn about data-driven AI techniques and algorithms.',
		avatar: Sujan,
		badge: ['Engineer', 'Lecturer'],
	},
	{
		title: 'Sunil Paudel',
		description:
			'Extremely creative, Mr. Sunil Paudel is a skilled mentor in web development, API testing, and AI, with expertise in data science and automation. His analytical mindset meets artistry as the graphic designer of EXCESS, blending technology with design.',
		avatar: Sunil,
	},
	{
		title: 'Suwash Shrestha',
		description:
			'Curious and innovative, students of Electronic Communication and Information Engineering, passionate about robotics, AI, and driven by hands-on experience with ROS-based robotics systems and AI/ML solutions, are constantly pushing the boundaries of technology.',
		avatar: Suwash,
	},
	{
		title: 'Pawan Shah',
		description:
			'Aside from being a coordinator at Robotics Club ERC, Mr. Pawan Shah is an exceptional Python expert with deep knowledge of hardware technologies and data science. He excels at skimming through vast datasets to uncover meaningful insights, bridging technology and analytics seamlessly.',
		avatar: Pawan,
		badge: ['Coordinator at Robotics Club ERC'],
	},
	{
		title: 'Kishor Thagunna',
		description:
			'Mr. Kishor Thagunna is an AI Engineer passionate about giving intelligence and vision to machines, bringing cutting-edge technology to life with every line of code!',
		avatar: Kishor,
	},
	{
		title: 'Saroj Baniya',
		description:
			'Aside from being a Fuse Machines Fellow, Mr. Saroj Baniya is an industry professional in AI with exceptional expertise in Python and data science. Skilled in data wrangling, he seamlessly transforms raw data into valuable insights, bridging theory with real-world applications.',
		avatar: Saroj,
		badge: ['Engineer', 'Fuse Machine Fellow', 'Alumni'],
	},
	{
		title: 'Pujan Paudel',
		description:
			'Mr. Paudel is a final year computer engineering student and Fusemachine Fellow. Actively studying various AI domains and eager to build a career in AI.',
		avatar: Pujan,
	},
	{
		title: 'Saurab Baral',
		description:
			'Saurab Baral is a dedicated AI mentor with deep expertise in machine learning and NLP, specializing in large language models (LLMs) like GPT and BERT, empowering learners to master cutting-edge AI technologies. ',
		avatar: Saurab,
	},
	{
		title: 'Aashish Karn',
		description:
			'As a recent computer engineering graduate, Mr. Aashish Karn has brought his expertise in machine learning and data processing. Currently a Machine Learning Engineer at Docsumo, he specializes in AI-driven document automation and shared his knowledge as a guest lecturer in CS50 AI.',
		avatar: Aashish,
		badge: ['Engineer', 'Former ML Engineer at Docsumo'],
		role: 'Guest Speaker',
	},
	{
		title: 'Binil Raj Adhikari',
		description:
			'Mr. Binil Raj Adhikari brings extensive expertise in hardware solutions and AI. He is sharing his understanding of Natural Language Processing in CS50 AI Classes, sharing his knowledge to bridge the gap between language and technology.',
		avatar: BinilRaj,
		badge: [
			'Engineer',
			'President at Robotics Association of Nepal East',
			'PI Innovations CEO',
		],
		role: 'Guest Speaker',
	},
	{
		title: 'James Shrestha',
		description:
			'Mr. James Shrestha brings valuable insights into copyright, data ethics, and the legal boundaries of data collection. In CS50 AI, he shares his expertise on the nature of open-source data and technologies, helping students navigate the intersection of law and AI.',
		avatar: James,
		badge: ['COO at Open Knowledge Nepal'],
		role: 'Guest Speaker',
	},
];
