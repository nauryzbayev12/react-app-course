import { } from 'react'
import { QuestionCard } from '../../components/QuestionCard/QuestionCard'
import cls from './HomePage.module.css'

export const HomePage = () => 
{
	const homePageStyle = {cls};

	return(
		<div>
		<QuestionCard />
		</div>
	);

};