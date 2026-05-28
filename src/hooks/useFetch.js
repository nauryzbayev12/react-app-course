import { useState } from 'react'
import { delayFn } from '../helper/delayFn'

export const useFetch = (callback) => 
{
		const[isLoading, setIsLoading] = useState(false);
		const[error, setError] = useState("");

		const fetchFn = async (arg) => {

		try
		{
			setIsLoading(true);
			setError("");
			await delayFn();
			const responce = await callback(arg);

			return responce;
		}
		catch(error)
		{
			setError(error.message);
		}
		finally
		{
			setIsLoading(false);
		}


	};

	return [fetchFn,isLoading, error]
}