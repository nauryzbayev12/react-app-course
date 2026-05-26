import { } from 'react'
import { Button } from '../Button'

export const Header = () => 
{
	return (
		<header>
			<p>
				<img src="" alt="react logo" />
				<span>Nauryz React Application</span>
			</p>
			<div>
				<Button>Add</Button>
				<Button>Login</Button>
			</div>
		</header>
	);
};