import { useEffect, useMemo, useState } from 'react'
import { Loader } from '../../components/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { SearchInput } from '../../components/SearchInput'
import { API_URL } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import cls from './HomePage.module.css'


const DEFAULT_PER_PAGE = 10;

export const HomePage = () => 
{
  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);
  const[sortSelectValue,setSortSelectValue]= useState("");
  const[searchValue, setSearchValue] = useState("");
  const[questions, setQuestions] = useState({});

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
  if (questions?.data) {
    if (searchValue.trim()) {
      return questions.data.filter(d =>
        d.questions.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
    }

    return questions.data;
  }

  return [];
}, [questions, searchValue]);

  useEffect(() => 
  {
    getQuestions(`react${searchParams}`);
  },[searchParams])

  const onSearchChangeHandler = (e) => 
  {
    setSearchValue(e.target.value);
  };

  const onSelectValueChanged = (e) =>
  {
    setSortSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${DEFAULT_PER_PAGE}${e.target.value}`);
  }

	return(
		<>
      <div className={cls.controlsContainer}>
      <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
        <select value={sortSelectValue} onChange={onSelectValueChanged} className={cls.select}> 
          <option value="">sort by</option>
          <hr/>
          <option value="_sort=level">lever ASC</option>
          <option value="_sort=-level">lever DESC</option>
          <option value="_sort=completed">completed ASC</option>
          <option value="_sort=-completed">completed DESC</option>
        </select>
      </div>
      {isLoading && <Loader/> }
      {error && <p>{error}</p>}
      {cards.length === 0 && <p className={cls.noCardsInfo}>No cards ...</p> }
			<QuestionCardList cards = {cards} />
		</>
	);

};