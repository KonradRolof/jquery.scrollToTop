/* jQuery scrollToTop
 * v1.2
 * Copyright (c) 2013 Konrad Rolof (http://www.konrad-rolof.de, http://labs.konrad-rolof.de/scripts/scrolltotop/scrolltotop.php)
 * require jQuery
 * Dual licensed under the MIT (below)
 * and GPL (http://www.gnu.org/licenses/gpl.txt) licenses.
 *
 
MIT License

Copyright (c) 2013 Konrad Rolof

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 *
*/
(function($){
$.fn.scrollToTop = function(options){
  
	//------------------------------- options -----------------------------------//
	var defaults = {
		
		triggerID     : '#top',		
		startline     : 30,
		targetline    : 0,
		fxSpeed       : 800,
		useEasing     : false,
		fxEasing      : 'easeOutBounce',
		fadeTime      : 200,		
		content       : '&#9650;',
		contentColor  : '#c8ccd1',
		bgColor       : '#454c54',
		borderRadius  : '100%',
		customCss     : false,
		customPosX    : '20px',
		customPosY    : '20px',
		useImage      : false,
		imagePath     : 'images/top.png',
		imageWidth    : '40'
	}
	
	options = $.extend(defaults, options);
	//---------------------------------------------------------------------------//
	return this.each(function(){
		
		// remove # from triggerID to create trigger element
		var triggerClearID = options.triggerID.replace('#','');
		
		// add an image to trigger element
		if(options.useImage == true){
			options.content = '<img src="/'+options.imagePath+'" alt="to top button" width="'+options.imageWidth+'">';
		}
		
		// create the trigger element
		$('body').append('<a id="'+triggerClearID+'">'+options.content+'</a>');
		
		// using default or own css for trigger element
		if(options.customCss == false && options.useImage == false){
			$(options.triggerID).css({
				'display'         : 'none',
				'position'        : 'fixed',
				'right'           : options.customPosX,
				'bottom'          : options.customPosY,
				'cursor'          : 'pointer',
				'width'           : '40px',
				'height'          : '40px',
				'background'      : options.bgColor,
				'border-radius'   : options.borderRadius,
				'color'           : options.contentColor,
				'font'            : 'bold 25px/37px Arial',
				'text-align'      : 'center',
				'text-decoration' : 'none',
				'user-select'     : 'none'			
			});
		} else {
			$(options.triggerID).css({
				'display'         : 'none',
				'position'        : 'fixed',
				'right'           : options.customPosX,
				'bottom'          : options.customPosY,
				'cursor'          : 'pointer',
				'user-select'     : 'none'
			});
		}
		if(options.useImage == true){
			$(options.triggerID).css({
				'width'           : options.imageWidth+'px',
				'background'      : 'none',
				'border-radius'   : '0',
				'border'          : 'none'
			});
		}
		
		// show button by loading site under startline
		if($(document).scrollTop() > options.startline) {
			$(options.triggerID).show();
		}
		
		// show button by scrolling under startline
		$(window).scroll(function(){
			if($(document).scrollTop() > options.startline) {
				$(options.triggerID).fadeIn(options.fadeTime);
			} else {			
				$(options.triggerID).fadeOut(options.fadeTime);
			}
		});
		
		// set jQuery easing
		if(options.useEasing == false){
			setEasing = '';
		} else {
			setEasing = options.fxEasing;
		}
		
		// on click to top
		$(options.triggerID).click(function(){
			$('html, body').animate({
				scrollTop: options.targetline				 
			}, options.fxSpeed,setEasing);
		});
		
	});//end of return this function	
}
})(jQuery);
