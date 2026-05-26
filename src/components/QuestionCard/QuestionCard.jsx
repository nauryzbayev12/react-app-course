import { } from "react"
import { Button } from "../Button/Button"
import cls from "./QuestionCard.module.css"
export const QuestionCard = () => 
{
	return(
		<div className={cls.card}>
			<div className={cls.cardLabeles}>
				<div>Level: 1</div>
				<div>Not Completed</div>
			</div>
			<h5 className={cls.cardTitle}>
				Кто ты войн ?
			</h5>	
			<div className={cls.cardAnswers}>
				<label>Короткий ответ:</label>
				<p className={cls.cardAnswer}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nihil?
				</p>
			</div>
			<Button onClick = { () => {}}> View </Button>
		</div>
	);

};