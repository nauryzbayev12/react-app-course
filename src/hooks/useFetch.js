import { useState } from 'react'
import { delayFn } from '../helper/delayFn'

export const useFetch = (callback) => 
{
		const[isLoading, setIsLoading] = useState(false);
		const[error, setError] = useState(null);

		const fetchFn = async (arg) => {

		try
		{
			setIsLoading(true);
			setError(null);
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