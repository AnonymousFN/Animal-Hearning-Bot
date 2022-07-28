function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/idsVTpib5/model.json",modelReady)

}

function modelReady(){
classifier.classify(gotResults)
console.log("Model is Loaded")}



function gotResults(error,result){
console.log(result)

if(result[0].label=="Dog Barking"){
var img=document.getElementById("img")
img.src="dog.png"
document.getElementById("g").innerHTML="Detected Dog-"+result[0].confidence
}

else if(result[0].label=="Cat Meowing"){
img.src="cat.jpg"
document.getElementById("q").innerHTML="Detected Cat-"+result[0].confidence
} else {
img.src="ear.jpg"
}

}