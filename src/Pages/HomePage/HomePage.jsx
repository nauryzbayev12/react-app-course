import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
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

  const[countSelectValue, setCountSelectValue] = useState("");

  const conrolsContainerRef = useRef();

  const getActivePageNumber = () => 
  {
    return  questions.next === null ? questions.last : questions.next - 1;
  };

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
          d.question.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
      }

      return questions.data;
    }

    return [];
  }, [questions, searchValue]);

  const pagination = useMemo(()=>
  {
    const totalCardsCount = questions?.pages || 0;

    return Array(totalCardsCount)
    .fill(0)
    .map((_,i) => i + 1 )
  },[questions]);


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
    setSearchParams(`?_page=1&_per_page=${countSelectValue}${e.target.value}`);
  }

  const paginationHandler = (e) =>{
    if (e.target.tagName === "BUTTON")
    {
      setSearchParams(`?_page=${e.target.textContent}&_per_page=${countSelectValue}${sortSelectValue}`);
      conrolsContainerRef.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const onCountSelectValueChangeHandler = (e) => 
  {
    setCountSelectValue(e.target.value);

    setSearchParams(`?_page=1&_per_page=${e.target.value}${sortSelectValue}`);
  }

	return(
		<>
      <div className={cls.controlsContainer} ref={conrolsContainerRef}>
      <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
        <select value={sortSelectValue} onChange={onSelectValueChanged}         className={cls.select}> 
          <option value="">sort by</option>
          <hr/>
          <option value="_sort=level">lever ASC</option>
          <option value="_sort=-level">lever DESC</option>
          <option value="_sort=completed">completed ASC</option>
          <option value="_sort=-completed">completed DESC</option>
        </select>

        <select value={countSelectValue} onChange={onCountSelectValueChangeHandler} className={cls.select}> 
          <option disabled>count</option>
          <hr/>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="100">100</option>
        </select>

      </div>


      {isLoading && <Loader/> }
      {error && <p>{error}</p>}
			<QuestionCardList cards = {cards} />

      {cards.length === 0 ? 
      <p className={cls.noCardsInfo}>No cards ...</p> : 
        pagination.length > 1 &&
      (<div className={cls.paginationContainer}>
        {
          pagination.map((value) =>
          {
            return <Button key={value} isActiv={value === getActivePageNumber()} onClick = {paginationHandler} >{value} </Button>
          })
        }
      </div>)
      }
		</>
	);

};