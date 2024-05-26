https://teachablemachine.withgoogle.com/models/r-Ek0strX/

function startRecording(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/r-Ek0strX/model.json',modelLoaded)

}
function modelLoaded(){
    classifier.classify(gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error);
}
else{
    console.log(result);
    randomR=Math.floor(Math.random()*255)+1;
    randomG=Math.floor(Math.random()*255)+1;
    randomB=Math.floor(Math.random()*255)+1;
    document.getElementById("label").innerHTML="I can hear - "+result[0].label
    document.getElementById("confidence").innerHTML="Accuracy - "+(result[0].confidence).toFixed(2);
    document.getElementById("label").style.color="rgb("+randomR+","+randomG+","+randomB+")";

}
}