import { useEffect, useId, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge } from '../../components/Badge/Badge'
import { Button } from '../../components/Button/Button'
import { Loader } from '../../components/Loader'
import { API_URL } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import cls from './QuestionPage.module.css'

export const QuestionPage = () => 
{
	const cls1 = cls;

	const checkboxId = useId();
	const [isChecked ,setIsChecked ] = useState(true); 
	const {id} = useParams();

	const [card,setCard] = useState(null);
	const navigate = useNavigate();
	
	const levelVariant = () => { return card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";}

	const completedVariant = () => { return card.completed ? "success" : "primary"; }

	const [fetchCard, isCardLoading] = useFetch( async () => {
			const responce = await fetch(`${API_URL}/react/${id}`);
			
			if (!responce.ok) {
				throw new Error(`Ошибка: ${responce.status}`);
			}
			
			const data = await  responce.json();
			setCard(data);
	});

	useEffect(() => 
	{
		fetchCard();
	},[]);

	const onCheckboxChangedHandler = () => 
	{

	}

	return(
		<>
		{isCardLoading && <Loader />}
		{
			card !== null &&
			<div className={cls.container}>
			
			<div className={cls.cardLabeles}>
				<Badge variant={levelVariant()} >Level: {card.level}</Badge>
				
				<Badge variant={completedVariant()} >{card.completed ? "Completed" : "Not Completed"}</Badge>
				{
					card?.editDate && <p className={cls.editDate} >Edited : {card.editDate}</p>
				}
			</div>
			
			<h5 className={cls.cardTitle}>
				{card.question}
			</h5>	
			
			<p className={cls.cardDescriptions}>
					{card.description}
			</p>

			<div className={cls.cardAnswers}>
				<label>short answer:</label>
				<p className={cls.cardAnswer}>
					{card.answer}
				</p>
			</div>

			<ul className={cls.cardLinks}>
			Resourses:
			{
				card.resources.map((link,index) => 
					{
						return (<li key={index}><a href={link.trim()} target="_blank" rel="noreferrer">{link}</a></li>)
					} )
			}
			</ul>

			<label htmlFor={checkboxId} className={cls.cardCheckBox}>
				<input 
				 	type="checkbox"
			  	id = {checkboxId}
					className={cls.checkbox} 
					checked ={isChecked}
					onChange={onCheckboxChangedHandler} disabled = {false}/>
				<span>mark questuions as completed</span>
			</label>
			<Button onClick = { () => navigate(`/editquestion/${card.id}`)}> Edit Question </Button>
			<Button onClick = { () => navigate("/")}> Back </Button>
		</div>

		}
		
	</>);
}