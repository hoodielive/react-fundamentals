function ProfilePic(username) {
	return (<img alt={username} src={'https://github.com' + username + '.png?size=200'} />)
}

function ProfileLink(username) {
	return <a href={'https://github.com/' + username}>{username}</a>
}

function Profile(username) {
	return(
		<div className = 'profile' > 
			<ProfilePic username='username' />
			<ProfileLink username='username' />
		</div>
	)
}
