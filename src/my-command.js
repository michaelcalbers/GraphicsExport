//var onRun = function(context) {
export default function(context) {
	log("Starting")
	
		const selectedLayers = context.selection
		const selectedCount = selectedLayers.length
		document = context.document

		if (selectedCount === 0) {
			message = "     No layers selected."
		} else if (selectedCount === 1) {
			message = "     1 layer selected."
		} else {
			message = "     " + selectedCount + " layers selected."
		}
		document.showMessage(message); // on Screen
		log(message); // to log/Console

	log("Ending")
}
