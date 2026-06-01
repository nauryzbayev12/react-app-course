import { useEffect, useMemo, useState } from 'react'
import { Loader } from '../../components/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { SearchInput } from '../../components/SearchInput'
import { API_URL } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import cls from './HomePage.module.css'

export const HomePage = () => 
{
  const[searchValue, setSearchValue] = useState("");

  const[questions, setQuestions] = useState([]);

  const [getQuestions, isLoading, error] = useFetch( async (url) => {
     const responce = await fetch(`${API_URL}/${url}`);
     if (!responce.ok) {
       throw new Error(`Ошибка: ${responce.status}`);
     }
     const questions = await  responce.json();
     setQuestions(questions);
     return questions;
  });

  const cards = useMemo(() => {
    return questions.filter(d =>
    d.question.toLowerCase().includes(searchValue.trim().toLowerCase())
  );},[questions,searchValue]);

  useEffect(() => 
  {
    getQuestions("react");

  },[])

  const onSearchChangeHandler = (e) => 
  {
    console.log(e.target.value);
    setSearchValue(e.target.value );
  };

	return(
		<>
      <div className={cls.controlsContainer}>
      <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
      </div>
      {isLoading && <Loader/> }
      {error && <p>{error}</p>}
      {cards.length === 0 && <p className={cls.noCardsInfo}>No cards ...</p> }
			<QuestionCardList cards = {cards} />
		</>
	);

};