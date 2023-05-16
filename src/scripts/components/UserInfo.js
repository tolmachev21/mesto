export default class UserInfo {
	constructor({userNameSelector, userJobSelector}) {
		this._userNameSelector = userNameSelector;
		this._userJobSelector = userJobSelector;

		this._userNameInput = document.querySelector('.popup__input_field_name');
		this._userJobInput = document.querySelector('.popup__input_field_job');
	};

	getUserInfo() {
		this._userNameInput.value = this._userNameSelector.textContent;
		this._userJobInput.value = this._userJobSelector.textContent;

		return;
	};
	
	setUserInfo(data) {
		this._userNameSelector.textContent = data.user;
		this._userJobSelector.textContent = data.job;
		return;
	};
};