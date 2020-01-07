function getProfilePic(username) {
    return 'https://github.com' + username +'.png?size=200'
}

function getProfileLink(username) {
    return 'https://github.com' + username;
}

function getProfileData(username) {
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
}

getProileData('larry');