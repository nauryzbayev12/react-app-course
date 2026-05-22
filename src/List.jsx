import { } from 'react'

const items = [
	{
		task : "Выучить Рекат",
		icon : "😄",
		isCompleted : true
	},
		{
		task : "Pidr",
		icon : "😄",
		isCompleted : true
	},
		{
		task : "Kotak",
		icon : "😄",
		isCompleted : true
	},
		{
		task : "Выучить Рекат",
		icon : "😄",
		isCompleted : false
	}
]




export const List = () => 
{
	return(
		<div>
			{
				items.map((item, index) =>  
					{
						return(
							<section key={index} className={item.isCompleted ? "completed" : ""
							}>
								<span>{item.icon}</span>
								<h4>{item.task}</h4>
							</section>
						)
					})
			}
		</div>
	);

}