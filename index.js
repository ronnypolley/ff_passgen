var self = require("sdk/self");

var buttons = require('sdk/ui/button/action');
var toggleButtons = require('sdk/ui/button/toggle');
var tabs = require('sdk/tabs');
var panels = require('sdk/panel');

var passGenButton = toggleButtons.ToggleButton({
	id : "mozilla-link",
	label: "Visit Mozilla",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

var panel = panels.Panel({
	contentURL: self.data.url("panel.html"),
	onHide: function(){
		passGenButton.state('window', {checked:false});
	}
});

function handleClick(state){
	if(state.checked){
		panel.show({
			position:passGenButton
		});
	}	
}

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
