!(function(global){

var log = console.log.bind(console)

function Vue ( paramsObj ) {

	var oFor = document.querySelector('[v-for]')

	var v_for = oFor.getAttribute('v-for')
	
	v_for = trim(v_for)

	var result = v_for.split('in')

	var firstResult = result[0]
	var lastResult = result[1]

	for ( var item in paramsObj.data[lastResult] ) {

		console.log(paramsObj.data[lastResult][item])
		
	}




	this.el = paramsObj.el

	this.data = paramsObj.data

	this.methods = paramsObj.methods

	// 去除空格
	function trim(val) {
		return val.replace(/\s+/g, "");
	}
		
}

global.Vue = Vue

})(this)