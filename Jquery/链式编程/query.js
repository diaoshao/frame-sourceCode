/* 
	* Author：YangShaoFeng.
	* Github: iysf
	* Email: yangshaofengfe@gmail.com
	* Version: 1.0.0
*/

var log = console.log.bind(console)

!(function ( global, factory ) {

var version = "1.0.0"

var $ = function ( selector ) {
	// detail 实现逻辑
	if ( typeof selector === 'string' ) {
		var oDiv = document.getElementsByTagName('div'),
		     str = selector.slice( 0, 1 ),
			newStr = selector.slice( 1, selector.length )

		if ( str === '#' ) {
			// 问题出在这儿，return的是原本的DOM，需要将prototype指向jquery
			log(oDiv)
			oDiv.prototype = $.fn
			log(oDiv)
			return oDiv

		}

	} else if ( typeof selector === 'function' ) {

		window.addEventListener('load',selector)
		return [document]

	} else {

		// throw new TypeError (selector + ' is not a string || function ')

	}

}

$.fn = $.prototype = {
	
	// The current version of jQuery being used
	Jquery: version,

	constructor: $,

	// The default length of a jQuery object is 0
	length: 0,

	// Start with an empty selector
	selector: "",

}

// innerHTML and text
$.fn.html = function () {
	return this
} 

window.$ = function () {
	return new $(arguments[0])
}


})( window, function ( window, noGlabol ) {



})