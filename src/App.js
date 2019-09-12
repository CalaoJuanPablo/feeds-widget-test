import React from 'react'
import FeedList from './components/FeedList'
import './App.css'

const App = () => {
	const feedUrl = 'http://api.massrelevance.com/MassRelDemo/kindle.json'
	const numPost = 50
	const intervalTime = 2000

	return (
		<div className="App">
			<h1 className="title">Feeds Widget</h1>
			<FeedList
				feedUrl={feedUrl}
				numPost= {numPost}
				intervalTime={intervalTime}
			/>
		</div>
	)
}

export default App