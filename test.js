
/* Magic Mirror
 * Module: test
 *
 * By John Brown
 * MIT Licensed.
 */

Module.register("test",{

	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
