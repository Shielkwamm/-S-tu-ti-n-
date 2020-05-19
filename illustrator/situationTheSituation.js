var myDocument = app.activeDocument;

var debugText = "{\r";
var debugText = "  {\r\"actors\": [\r";

for(var i = 0; i < myDocument.layers.length; i++) {
    if(myDocument.layers[i].name == "actors"){
        situationActors(myDocument.layers[i])
    }
    
}

debugText += "]"
debugText += "\r}";

function situationActors(actors) {
    for(var ii = 0; ii < actors.groupItems.length; ii++) {
        debugText += "{";
        debugText += "\"name\":";
        debugText += " \"" + actors.groupItems[ii].name + "\", \"moods\": [";
        for(var i = 0; i < actors.groupItems[ii].pageItems.length; i++){
            if(actors.groupItems[ii].pageItems[i].name != "mask") {
                debugText += "{\"mood\": \"" + actors.groupItems[ii].pageItems[i].name + "\"}";
                if(i < actors.groupItems[ii].pageItems.length - 1) {
                    debugText += ", ";
                }
            }
        }
        debugText += "]";
        if(ii < actors.groupItems.length - 1) {
            debugText += "},\r";
        }
        else {
            debugText += "}\r";
        }
    }
}

//myDocument.layers["scriptz"].textFrames[0].contents = debugText;
var baseName = myDocument.name.split(".")[0];
var starterJson = new File(baseName + " .json");

writeFile(starterJson, debugText);
alert(baseName + ".json file created!")

function writeFile(fileObj, fileContent, encoding) {

    encoding = encoding || "utf-8";

    fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);

    var parentFolder = fileObj.parent;

    if (!parentFolder.exists && !parentFolder.create())

        throw new Error("Cannot create file in path " + fileObj.fsName);

    fileObj.encoding = encoding;

    fileObj.open("w");

    fileObj.write(fileContent);

    fileObj.close();

    return fileObj;

}