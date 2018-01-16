export default function(context) {
	//context.document.showMessage("Export Something!!!!!!")

	const selectedLayers = context.selection
	const selectedCount = selectedLayers.length
	document = context.document

	if (selectedCount === 0) {
		message = "No layers selected."
	} else if  (selectedCount === 1) {
		message = "1 layer selected."
	} else {
		message = selectedCount + " layers selected."
	}
	document.showMessage(message); // on Screen
	log(message); // to log/Console
}
