import React from 'react'
import FeedCard from '../FeedCard'
import { useFetchFeed } from '../../hooks/useFetchFeed'
import { dateConverter } from '../../utils/dateConverter'
import './FeedList.css'

export const FeedList = (props) => {
	
	const posts = useFetchFeed(props)

	const localeLanguage = navigator.language
	const dateOptions = {
		dateStyle: 'short',
		timeStyle: 'short'
	}

	return (
		<div className="FeedList">
			{
				posts
					.map(post => (
						<FeedCard
							key={post.id_str}
							user={post.user}
							text={post.text}
							postDate={
								dateConverter(post.created_at, localeLanguage, dateOptions)
							}
						/>
					)
				)
			}
		</div>
	)
}