//load in scene json here

var timeline = fl.getDocumentDOM().getTimeline();
//fl.getDocumentDOM().selection = timeline.layers[1].frames[0].elements
fl.getDocumentDOM().getTimeline().layers[1].setSelectedFrames;
//fl.getDocumentDOM().getTimeline().layers[1].insertFrames(5)

for(var i = 0; i < timeline.layers.length; i++) { 
    if(timeline.layers[i].name === "actors") {
       // castActors (timeline.layers[i].frames[0], i);
    }
}

function castActors (actors, layerIndex) {
    //set instance names
    actors.elements[0].name = "yo"

    //open actor
    fl.getDocumentDOM().selection = [actors.elements[0]];
    fl.getDocumentDOM().enterEditMode("inPlace");
    var childTimeLine = fl.getDocumentDOM().getTimeline();
    
    //distribute graphics to frames and remove first frame
    var childElems = childTimeLine.layers[2].frames[0].elements;
    fl.getDocumentDOM().selection = childElems;
    fl.getDocumentDOM().distributeToKeyframes();
    childTimeLine.setSelectedFrames(0, 0);
    childTimeLine.removeFrames();
    
    //fl.getDocumentDOM().selection = timeline.layers[1].frames[0].elements;
    fl.getDocumentDOM().selection = childTimeLine.layers[1].frames[0].elements;
    //childTimeLine.timeLine.insertFrames(4);
    //childTimeLine.layers[2].frames[0])
    //fl.getDocumentDOM().selection = childTimeLine.layers[2].frames[0];
    //childTimeLine.removeFrames();
    //unlock layers
    //childTimeLine.timeline.layers[1].locked = false;
    //childTimeLine.timeline.layers[2].locked = false;
    //childTimeLine.timeline.layers[1].insertFrame(5);
    //mangle frames
    
    
    //fl.getDocumentDOM().setSelection(actors)
    //fl.getDocumentDOM().setSgetTimeline()[0].layers[0]
    //alert(childTimeLine.timeline.layers[0].frames[0].actions = "stop();");
    //childTimeLine.timeline.layers[0].frames[0].actionscript = "stop()";
    //alert(childTimeLine.timeline.layers[0].frames[0].actionscript = "stop();");

    
    //childTimeLine.timeline.layers[2].frames[0].

    //trace(childTimeline.layers[0].frames[0].elements)

    //
    //fl.selectElement(actors.elements[0], true)
}

// get its associated library item (same instance, just a Library Item, not a stage Element)
//var item            = element.libraryItem;

// then grab the library item's "timeline" property
//var childTimeline   = item.timeline

//document.enterEditMode

//.enterEditMode('inPlace');
//timeline.setLayerProperty("name", "labels");
//timeline.insertBlankKeyframe(i * 10);
//timeline.setSelectedLayers(2);
//timeline.removeFrames(selectionList.length * 10);
//timeline.layers[1].frames[0].actionScript = "stop();";
//doc.selectAll();

//timeline.setSelectedLayer("actors")
//alert(timeline.layers["actors"].elements);*/