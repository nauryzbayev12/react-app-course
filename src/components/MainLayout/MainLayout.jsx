import { } from "react"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header } from "../Header/Header"
import cls from "./MainLayout.module.css"

export const MainLayout = () => 
{
	const currentYear = new Date().getFullYear();

	return(
		<>
		<div className={cls.mainLayout}>
			<Header/>
			<div className={cls.mainWrapper} >
				<main className={cls.main}>
					<Outlet/>
				</main>
				<footer className={cls.footer}>React Question Cards Application | {currentYear}
				<br/> 
				by Nauryzbayev Bekzat
				</footer>
			</div>
		</div>

		<ToastContainer />
		</>
	);
};