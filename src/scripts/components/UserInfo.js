export default class UserInfo {
	constructor({userNameSelector, userJobSelector, userAvatarSelector}) {
		this._userName = userNameSelector;
		this._userJob = userJobSelector;
		this._userAvatar = userAvatarSelector;
	};

	getUserInfo() {
		return {user: this._userName.textContent, job: this._userJob.textContent};
	};
	
	setUserInfo({user, job, avatar}) {
		this._userName.textContent = user;
		this._userJob.textContent = job;
		this._userAvatar.src = avatar;
	};
};