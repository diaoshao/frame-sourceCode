	var log = console.log.bind(console)
	// log(log)
	!(function ( global ) {
		
		var $ = function ( params ) {

			if( typeof params == 'string' ) {

				return $.fn.queryDom( params )

			} else if ( typeof params == 'function' ) {

				window.addEventListener('load', params)

			}

		}

		$.fn = $.prototype

		// log($)
		// log($.fn)	

		// $.fn.html = function () {

			// console.log(html,"123");

		// }

		$.fn.queryDom = function ( type ) {

			if ( typeof type == 'string' ) {

				var str = type.substring('0', '1'),

			      newArr = document.getElementsByTagName('div'),

			      arr = [],

				    oDomName = type.substring('1', type.length);

					for ( var i = 0; i < newArr.length; i++ ) {

						if ( str == '.' ) {

							if ( newArr[i].className == oDomName) {

								arr.push( newArr[i] )

							}

						} else if ( str == '#' ) {

							if ( newArr[i].id == oDomName ) {

								arr.push( newArr[i] )

							}

						} else {

							return document.querySelectorAll(type)

						}

					}

					return arr
			}
		}


		global.$ = $
	})(window);