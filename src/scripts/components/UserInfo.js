export default class UserInfo {
	constructor({userNameSelector, userJobSelector}) {
		this._userNameSelector = userNameSelector;
		this._userJobSelector = userJobSelector;
	};

	getUserInfo() {
		return {user: this._userNameSelector.textContent, job: this._userJobSelector.textContent};
	};
	
	setUserInfo(data) {
		this._userNameSelector.textContent = data.user;
		this._userJobSelector.textContent = data.job;
		return;
	};
};