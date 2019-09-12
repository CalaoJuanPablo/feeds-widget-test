import { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchData'

export const useFetchFeed = ({ feedUrl, numPost, intervalTime }) => {
	const [feeds, setFeeds] = useState([])
	const [intervalId, setIntervalId] = useState()

	const handleIntervalChange = () => {
		if (intervalTime) {
			setIntervalId(
				setInterval(() => {
					fetchData(window.fetch, feedUrl)
						.then(data => setFeeds(data))
						.catch(err => console.log(err))
				}, intervalTime)
			)
		}
		return () => {
			clearInterval(intervalId)
		}
	}

  useEffect(handleIntervalChange, [])

  return feeds.slice(0, numPost)
}
