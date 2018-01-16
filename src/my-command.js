export default function(context) {
	//context.document.showMessage("Export Something!!!!!!")
	//var options = { "scales" : "1, 2, 3", "formats" : "png, svg, jpg" }
	//context.selectedDocument.selectedLayers.iterate(function(layer) {
	//	layer.export(options)
    //})


	const selectedLayers = context.selection
	const selectedCount = selectedLayers.length

	if (selectedCount === 0) {
		context.document.showMessage('No layers are selected.')
	} else {
		context.document.showMessage(`${selectedCount} layers selected.`)
	}
}
