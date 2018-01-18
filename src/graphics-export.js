export default function(context) {
	log("Starting")
	
	// Fetch the root Sketch object
    var sketch = context.api()
    // reference the Sketch Document
	var document = context.document
	// get the list of selected layers
	var selectedLayers = context.selection
	// get the # of selected layers
	var selectedLayerCount = selectedLayers.length

	if (selectedLayerCount > 0) { // some layers are selected
		// We can specify a lot of different options for the exporting.
	    var options = { "scales" : "1, 2, 3", "formats" : "png, jpg" }
		// Iterate over each layer in the selection
	    sketch.selectedDocument.selectedLayers.iterate(function(layer) {
    		layer.export(options)
			log("     " + layer.name); // to log/Console
    	})

	} else {
		var message = "No layers selected."
		document.showMessage(message); // on Screen
		log("     " + message); // to log/Console
	}



//		if (selectedLayerCount === 0) {
//			message = "     No layers selected."
//		} else if (selectedLayerCount === 1) {
//			message = "     1 layer selected."
//		} else {
//			message = "     " + selectedCount + " layers selected."
//		}
//		document.showMessage(message); // on Screen
//		log(message); // to log/Console

	log("Ending")
}
