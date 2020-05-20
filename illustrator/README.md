# Illustrator scripts

Open up Starter and drag situationTheSituation.js into illustrator.  
This will create a theSituation json based off the name of your illustrator file.

Illustrator is *very, very* specific about what type of process used while using scripts... 
```
actors (layer) 
  myActor (layer)
  game (cliping group)
```
Arguments are stored in the layer names

Name the layer `noop` or `mask` to skip processing

## Available games are...
### clickNext
`stop | play` when you go to the next frame does it play or stop?

### reactionKeys
`restingFrame` the frame you want to go to when no keys are pressed

### 🙌 [JSON library for illustrator scripting](https://github.com/douglascrockford/JSON-js)