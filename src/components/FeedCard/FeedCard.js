import React from 'react'
import { withEmbebbedUrls, withTwitterHashtags } from '../../utils/parsers'
import './FeedCard.css'

export const FeedCard = ({ user, text, postDate }) => (
	<div className="FeedCard">
		<div className="user-info">
			<figure className="avatar">
				<img src={user.profile_image_url_https} />
			</figure>
			<div>
				<p className="author-name">{user.name}</p>
				<p className="user-name">
					<a href={`https://twitter.com/${user.screen_name}`}>{user.screen_name}</a>
				</p>
			</div>
		</div>
		<p className="message-body" dangerouslySetInnerHTML={{
			__html: withTwitterHashtags(withEmbebbedUrls(text))
		}}>
		</p>
		<p className="post-date">{postDate}</p>
	</div>
)