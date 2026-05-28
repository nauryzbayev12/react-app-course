export const delayFn = async (delay = 2000) => {  
	return await new Promise((res) => {setTimeout(res,delay)});
}