import { } from 'react'
import ReactLogo from '../../assets/react.svg'
import { Button } from '../Button'
import cls from './Header.module.css'

export const Header = () => 
{
	return (
		<header className={cls.header} >
			<p>
				<img src={ReactLogo} alt="react logo" />
				<span>React Card</span>
			</p>
			<div className={cls.headerButton}>
				<Button isActiv={false}>Add</Button>
				<Button>Login</Button>
			</div>
		</header>
	);
};