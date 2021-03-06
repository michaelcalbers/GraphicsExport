export default function(context) {
	log("Starting");
	
	// Fetch the root Sketch object
    var sketch = context.api();
    // reference the Sketch Document
	var document = context.document;
	// get the list of selected layers
	var selectedLayers = context.selection;
	// get the # of selected layers
	var selectedLayerCount = selectedLayers.length;
	// create a variable to hold how many icons were exported
	var iconCount = 0;


	if (selectedLayerCount > 0) { // some layers are selected
		// We can specify a lot of different options for the exporting.
	    //var options = { "scales" : "1, 2, 3", "formats" : "png, jpg" }
	    var exportOptions_PNG = { "scales" : "1, 2, 3", "formats" : "png" };
	    var exportOptions_SVG = { "formats" : "svg" };
		// Iterate over each layer in the selection
	    sketch.selectedDocument.selectedLayers.iterate(function(layer) {
	    	if (layer.isPage) { // if the layer is an Page (but I'm not sure this would ever evaluate to be True)
				log("     " + "Cound not export the Page " + layer.name); // to log/Console
	    	} else if (layer.isText) { // if the layer is only text
				log("     " + "Cound not export the Text layer " + layer.name); // to log/Console
	    	} else if (layer.isSymbol) { // if the layer is a Symbol
				log("     " + "Cound not export the Symbol " + layer.name); // to log/Console
			} else { // looks good; let's try to export this thing
    			layer.export(exportOptions_PNG);
    			layer.export(exportOptions_SVG);
		        // increment the icon count (by 4 for the 4 different files exported)
        		iconCount = iconCount + 4;
				log("     " + "Exporting " + layer.name); // to log/Console
			}
    	})
	} else {
		var message = "No layers selected.";
		document.showMessage(message); // on Screen
		log("     " + message); // to log/Console
	}
	log(iconCount + " icons exported.");
	log("Ending");
}