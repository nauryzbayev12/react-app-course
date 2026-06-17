import { } from 'react'
import cls from './AddQuestionPage.module.css'


export const AddQuestionPage = () => 
{
	return <>
		<h1 className= {cls.fromTitle}>Add new question</h1>
		<div className={cls.fromContainer}>
			<form action="" className={cls.form}>
				<label htmlFor="questionField">Question: </label>
				<textarea 
					name="" id="questionField"
				 	cols="30"
					 rows="2"
					required
					placeholder="pleace enter a placeholder"></textarea>
			</form>
		</div>
	</>;
}