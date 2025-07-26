let sentences=[
    "In a fast world where people chase goals without rest, it is important to slow down, enjoy the sun, a strangers smile, and the simple journey of life.",
    "Ice cream brings joy in every scoop, from vanilla to bubblegum, reminding us of childhood, cravings, and smiles. It melts hearts on sunny days or during midnight cravings.",
    "Adulthood includes bills, fake productivity, and late night searches about symptoms. You fold laundry, miss appointments, and forget things, yet still act like everything is fine.",
    "Kerala is a beautiful land of palm trees, backwaters, and hills. Its food, culture, and natural charm attract travelers looking for peace, warmth, and vibrant experiences in nature.",
    "Indian food is colorful and rich. Every bite tells a story with spicy curries, crispy dosas, and sweet desserts. It is tradition, flavor, and joy on every plate.",
    "Raindrops tap the windows as trees dance in wind. A kettle sings in the background while the smell of wet earth rises, making the world feel soft and peaceful.",
    "We chase tasks and scroll for hours, sipping coffee and ignoring the world. But a simple walk, deep breath, or smile may matter more than those urgent things.",
    "I woke up ready, then tripped, spilled coffee, missed the bus, and forgot why I entered the kitchen. Some days feel like success is just staying mostly functional.",
    "Even with pressure and noise, calm moments exist. Tea, clouds, and silence remind us we do not always need to produce. Just being here is sometimes enough.",
    "Love is quiet. It lives in coffee orders, late night messages, and saved cake slices. It grows through small actions, not grand words, and remains steady when it matters.",
    "Time travel happens without machines. A song, photo, or smell brings back memories. You are suddenly young again, feeling joy in moments you forgot ever lived inside you."
];

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
curr=randomInt(0,10);
curSentence=sentences[curr];
document.querySelector(".displayText").innerHTML=curSentence;
let inputBox=document.querySelector(".inputText");
let startTime;
let wrongChar=0;
inputBox.addEventListener("input",() => {
    if (!startTime){
        startTime=Date.now();
    }
    const typedText=inputBox.value;
    let len=typedText.length;
    if(typedText.substring(0,len)===sentences[curr].substring(0,len)){
        inputBox.classList.remove("wrong");
        inputBox.classList.add("correct");
    }
    else{
        inputBox.classList.remove("correct");
        wrongChar++;
        inputBox.classList.add("wrong");
    }
    let totalChar=sentences[curr].length;
    let timer;
    if(typedText.substring(0,len)===sentences[curr]){
        let finalTime=Date.now();
        timer=((finalTime-startTime)/1000).toFixed(2);
        console.log(timer,"seconds");
        let timeEle=document.querySelector(".timetaken");
        timeEle.classList.add("timeNew");
        document.querySelector(".timetaken").innerHTML=`Time Taken ${timer} s`;
        let words=sentences[curr].split(" ").length;
        let wpm=(words/(timer/60)).toFixed(2);
        document.querySelector(".wpm").innerHTML=`WPM ${wpm}`;
        let accuracy=((totalChar-wrongChar)/totalChar*100).toFixed(2);
        document.querySelector(".accuracy").innerHTML=`Accuracy ${accuracy}%`;
        let restartButton=document.querySelector(".restart");
        restartButton.addEventListener("click", ()=>{
            inputBox.value="";
            timeEle.classList.remove("timeNew");
            document.querySelector(".wpm").innerHTML=`WPM`;
            document.querySelector(".accuracy").innerHTML=`Accuracy`;
            startTime=null;
            let currNew;
            currNew=randomInt(0,10);
            curSentence=sentences[currNew];
            document.querySelector(".displayText").innerHTML=curSentence;
        })
    }
    
});