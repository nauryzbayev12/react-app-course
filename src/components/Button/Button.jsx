import { } from 'react'
import cls from './Button.module.css'

export const  Button = (props) => 
{
	return (
		<button className = {`${cls.btn} ${props.isActiv ? cls.activ :""}`} onClick={props.onClick} disabled = {props.isDisabled} > 
		{props.children}
		 </button>
	);
	
}