import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.navToggleLink = $('.header__nav-toggle-link');
		this.navToggleContent = $('.header__nav-list');
		this.events();
	}

	events() {
		this.navToggleLink.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.navToggleContent.toggleClass('header__nav-list--is-visible');
	}
}

export default MobileMenu;