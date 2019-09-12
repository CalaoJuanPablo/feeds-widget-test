export const fetchData = (fetch, fetchUrl) => (
	fetch(fetchUrl)
		.then(res => res.json())
		.catch(err => console.log(err))
)