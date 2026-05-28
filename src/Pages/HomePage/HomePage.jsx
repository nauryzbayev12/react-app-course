import { useEffect, useState } from 'react'
import { QuestionCard } from '../../components/QuestionCard/QuestionCard'
import { API_URL } from '../../constants'
import cls from './HomePage.module.css'

export const HomePage = () => 
{
	const homePageStyle = {cls};

  const[questions, setQuestions] = useState([]);

  const getQuestions = async() => 
  {
      try
      {
        const responce = await fetch(`${API_URL}react`);
        const questions = await  responce.json();
        setQuestions(questions);
      }
      catch(error)
      {
        console.log(error);
      }
  };

  useEffect(() => 
  {
    getQuestions();

  },[])

	return(
		<>
			{questions.map((card,index) => 
			{
				return <QuestionCard card = {card} key = {index} />
			})}
		</>
	);

};