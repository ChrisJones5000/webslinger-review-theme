import $ from 'jquery';

class BackToTop {
	constructor() {
		this.backToTopBtn = $('.back-to-top-btn');
		this.scrollCheck();
	}

	scrollCheck() {
		var that = this;
		$(window).scroll(function() {
			if ($(window).scrollTop() > 500) {
				console.log($('.back-to-top-btn'));
				$('.back-to-top-btn').addClass('back-to-top-btn--active');
			} else {
				console.log($('.back-to-top-btn'));
				$('.back-to-top-btn').removeClass('back-to-top-btn--active');
			}
		});
	}
}

export default BackToTop;