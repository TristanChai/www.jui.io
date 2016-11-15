jui.ready([ "ui.property" ], function(PropertyView) {

	window.complexSettings = new PropertyView('#complex-settings', {
		items : [
			{ type : 'group', title : 'Inner Property', description : 'it can be nested property view '},
			{ type : 'property', title : 'Slider Settings', key : 'slider-settings', items : [
				{ type : 'group' , title : 'Information' },
				{ title : 'Slide ID', key : 'slide-id'  },
				{ title : 'Character Set', key : 'charset'  },
				{ type : 'group' , title : 'Background' },
				{ type : 'colors', title : 'Many Colors', key : 'colors', value : ['#ff0000', '#00ffff', '#ff00ff'], description : 'many colors'},
				{ type : 'color', title : 'Background Color', key : 'background-color', value : '', description : 'All CSS color formats are supported, like rgba() or hsl().' },
				{ type : 'textarea', title : 'Many Text', key : 'many-text', value : '', description : 'Many Text', vertical : true  },
				{ type : 'html', title : 'contenteditable', key : 'contenteditable', value : '', description : 'paste image', vertical : true  },
				{ title : 'Background Image', key : 'background-image', value : '', description : 'URL of the image to show. GIFs restart when the slide opens.', media : true  },
				{ title : 'Background Size', key : 'background-size', value : 'cover', description : 'See <a href="https://developer.mozilla.org/docs/Web/CSS/background-size">background-size</a> on MDN.' },
				{ title : 'Background Position', key : 'background-position', value : 'center', description : 'See <a href="https://developer.mozilla.org/docs/Web/CSS/background-position">background-position</a> on MDN.' },
				{ title : 'Background Repeat', key : 'background-repeat', value : 'no-repeat', description : 'See <a href="https://developer.mozilla.org/docs/Web/CSS/background-repeat" target="_blank">background-repeat</a> on MDN.' },
				{ title : 'Background Video', key : 'background-video', value : '', description : 'A single video source, or a comma separated list of video sources.' },
				{ type: 'checkbox', title : 'Background Video Loop', key : 'background-video-loop', value : false,  description : 'Flags if the video should play repeatedly.' },
				{ type: 'checkbox', title : 'Background Video Mutied', key : 'background-video-muted', value: false, description : 'Flags if the audio should be muted.' },
				{ title : 'Background Iframe', key : 'background-iframe', value : '', description : 'Embeds a web page as a background. Note that since the iframe is in the background layer, behind your slides, it is not possible to interact with the embedded page.' },
				{ type : 'select', title : 'Background Transition', key : 'background-transition' , value : 'default', description : 'Transition style for full page slide backgrounds',  items : ['default', 'none', 'fade', 'slide', 'convex', 'concave', 'zoom' ] },
				{ type : 'group', title : 'Transition' },
				{ title : 'Transition Type', key : 'transition', value : 'slide-in fade-out', description : 'The global presentation transition is set using the transition config value. You can override the global transition for a specific slide by using the data-transition attribute:' },
				{ type : 'select', title : 'Transition Speed', key : 'transition-speed', value: 'fast', description : 'Choose from three transition speeds: default, fast or slow!', items : [ 'default', 'fast', 'slow' ] }
			]},
			{ type : 'group', title : 'Views', description : 'Simple theme select info '},
			{ type : 'select', title : 'Theme', key : 'theme' , value : 'white', items : ['white', 'black', 'league', 'beige', 'sky', 'night', 'serif', 'simple', 'solarized', 'mozila' ] },
			{ type : 'group', title : 'Configure'},
			{ type : 'checkbox', title : 'Controls', key : 'controls' , value : true, description : 'Display controls in the bottom right corner' },
			{ type : 'checkbox', title : 'Progress', key : 'progress' , value : true, description : 'Display a presentation progress bar' },
			{ type : 'checkbox', title : 'Slide Number', key : 'slideNumber' , value : false, description : 'Display the page number of the current slide' },
			{ type : 'checkbox', title : 'History', key : 'history' , value : false, description : 'Push each slide change to the browser history' },
			{ type : 'checkbox', title : 'Keyboard', key : 'keyboard' , value : true, description : 'Enable keyboard shortcuts for navigation' },
			{ type : 'checkbox', title : 'Overview', key : 'overview' , value : true, description : 'Enable the slide overview mode' },
			{ type : 'checkbox', title : 'Center', key : 'center' , value : true, description : 'Vertical centering of slides' },
			{ type : 'checkbox', title : 'Touch', key : 'touch' , value : true, description : 'Enables touch navigation on devices with touch input' },
			{ type : 'checkbox', title : 'Loop', key : 'loop' , value : false, description : 'Loop the presentation' },
			{ type : 'checkbox', title : 'RTL', key : 'rtl' , value : false, description : 'Change the presentation direction to be RTL' },
			{ type : 'checkbox', title : 'Shuffle', key : 'shuffle' , value : false, description : 'Randomizes the order of slides each time the presentation loads' },
			{ type : 'checkbox', title : 'Fragments', key : 'fragments' , value : true, description : 'Turns fragments on and off globally' },
			{ type : 'checkbox', title : 'Embedded', key : 'embedded' , value : false, description : 'Flags if the presentation is running in an embedded mode,\ni.e. contained within a limited portion of the screen ' },
			{ type : 'checkbox', title : 'Help', key : 'help' , value : true, description : 'Flags if we should show a help overlay when the questionmark, key is pressed' },
			{ type : 'checkbox', title : 'Show Notes', key : 'showNotes' , value : false, description : '' },
			{ type : 'number', title : 'Auto Slide', key : 'autoSlide' , value : 0, description : '' },
			{ type : 'checkbox', title : 'Auto Slide Stoppable', key : 'autoSlideStoppable' , value : true, description : 'Stop auto-sliding after user input' },
			{ type : 'checkbox', title : 'Auto Slide Method', key : 'autoSlideMethod' , value : 'Reveal.navigateNext', description : 'Use this method for navigation when auto-sliding' },
			{ type : 'checkbox', title : 'Mouse Wheel', key : 'mouseWheel' , value : false, description : 'Enable slide navigation via mouse wheel' },
			{ type : 'checkbox', title : 'Hide Address Bar', key : 'hideAddressBar' , value : true, description : '' },
			{ type : 'checkbox', title : 'Preview Links', key : 'previewLinks' , value : false, description : '' },
			{ type : 'select', title : 'Transition style', key : 'transition' , value : 'default', items : ['default', 'none', 'fade', 'slide', 'convex', 'concave', 'zoom' ] },
			{ type : 'select', title : 'Transition Speed', key : 'transitionSpeed' , value : 'default', items : ['default', 'fast', 'slow' ] },
			{ type : 'select', title : 'Background Transition', key : 'backgroundTransition' , value : 'default', description : 'Transition style for full page slide backgrounds',  items : ['default', 'none', 'fade', 'slide', 'convex', 'concave', 'zoom' ] },
			{ type : 'number', title : 'View Distance', key : 'viewDistance' , value : 3, description : 'Number of slides away from the current that are visible' },
			{ type : 'group', title : 'Parallax'},
			{ type : 'text', title : 'Background Image', key : 'parallaxBackgroundImage' , value : '', description : 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg' },
			{ type : 'text', title : 'Background Size', key : 'parallaxBackgroundSize' , value : '', description : 'CSS syntax, e.g. "2100px 900px"' },
			{ type : 'text', title : 'Background Horizontal', key : 'parallaxBackgroundHorizontal' , value : '', description : '' },
			{ type : 'text', title : 'Background Vertical', key : 'parallaxBackgroundVertical' , value : '', description : ''  }
		],
		event : {
			change : function (item, newValue, oldValue) {
				console.log('item : ', item);
				console.log('all items', this.getValue());
			}
		}
	});

});
