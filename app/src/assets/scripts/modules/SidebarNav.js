import $ from 'jquery';
import waypoints from '../../../../../node_modules/waypoints/lib/noframework.waypoints';

class SidebarNav {
	constructor() {
		this.anchorPoints = $('[id^=heading-]');
		this.createAnchorWaypoint();
	}

	createAnchorWaypoint() {
		this.anchorPoints.each(function() {
			var currentAnchor = this;
			new Waypoint({
				element: currentAnchor,
				handler: function() {
					$('.toc__item').removeClass('active');
					$('.toc__item-link[href^="#' + currentAnchor.id + '"]').parent().addClass('active');
				},
				offset: '20%'
			});
		});		
	}
}

export default SidebarNav;