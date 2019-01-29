//ARRAY of signs
var zodiacSigns=[
	{	
		img: "img/newaries.png",
		sign: "Aries",
		positiveTraits:"Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.",
		negativeTraits: "Impatient, moody, short-tempered, impulsive, aggressive.",
		loveMatch: "Libra, Leo",
		luckyDay: "Tuesday" ,
	},
	{
		img: "img/newtaurus.png",
		sign: "Taurus",
		positiveTraits: "Reliable, patient, practical, devoted, responsible, stable.",
		negativeTraits: "Stubborn, possessive, uncompromising.",
		loveMatch: "Scorpio or Cancer",
		luckyDay: "Friday and Monday",
	},
	{
		img: "img/newgemini.png",
		sign: "Gemini",
		positiveTraits: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
		negativeTraits: "Nervous, inconsistent,  and indecisive.",
		loveMatch: "Saggitarius, Aquarius",
		luckyDay: "Wednesday",
	},
	{
		img: "img/newcancer.png",
		sign: "Cancer",
		positiveTraits: "Tenacius, highly imaginative, loyal, emotional, sympathetic, persuasive.",
		negativeTraits: "Moody, pessimistic, suspicious, manipulative, insecure.",
		loveMatch: "Capricorn and Taurus.",
		luckyDay: "Monday and Thursday.",
	},
	{
		img: "img/newleo.png",
		sign: "Leo",
		positiveTraits: "Creative, passionate, generous, warm-hearted, cheerful, humorous.",
		negativeTraits: "Arrogant, stubborn, self-centered, lazy, inflexible",
		loveMatch: "Aquarius and Gemini",
		luckyDay: "Sunday",
	},
	{
		img: "img/newvirgo.png",
		sign: "Virgo",
		positiveTraits: "Loyal, analytical, kind, hardworking, practical.",
		negativeTraits: "Shyness, worry, overly critical of self and others, all work and no play.",
		loveMatch: "Pisces and Cancer.",
		luckyDay: "Wednesday",
	},
	{
		img: "img/newlibra.png",
		sign: "Libra",
		positiveTraits: "Cooperative, diplomatic, gracious, fair-minded, social.",
		negativeTraits: "indecisive, avoids confrontations, will carry a grudge, self-pity.",
		loveMatch: "Aries and Saggitarius",
		luckyDay: "Friday",
	},
	{
		img: "img/newscorpio.png",
		sign: "Scorpio",
		positiveTraits: "Resourceful, brave, passionate, stubborn, a true friend.",
		negativeTraits: "Distrusting, jealous, secretive, violent.",
		loveMatch: "Taurus and Cancer.",
		luckyDay: "Tuesday",
	},
	{
		img: "img/newsagittarius.png",
		sign: "Sagittarius",
		positiveTraits: "Generous, idealistic, great sense of humour.",
		negativeTraits: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic.",
		loveMatch: "Gemini and Aries.",
		luckyDay: "Thursday",
	},
	{
		img: "img/newcapricorn.png",
		sign: "Capricorn",
		positiveTraits: "responsible, disciplined, self-control, good manners.",
		negativeTraits: "Know-it-all, unforgiving, condescending, expecting the worst.",
		loveMatch: "Taurus and Cancer.",
		luckyDay: "Saturday",
	},
	{
		img: "img/newaquarius.png",
		sign: "Aquarius",
		positiveTraits: "Progressive, original, independent, humanitarian.",
		negativeTraits:"Runs from emotional expression, temperamental, uncompromising, aloof.",
		loveMatch: "Leo and Saggitarius.",
		luckyDay: "Saturday",
	},
	{
		img: "img/newpisces.png",
		sign: "Pisces",
		positiveTraits: "Compassionate, artistic, intuitive, gentle, wise, musical.",
		negativeTraits: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr.",
		loveMatch: "Virgo and Taurus.",
		luckyDay: "Thursday",
	}
];
var select= document.getElementById("mySign");
    for (var i=0; i<12; i++){
        var opt=document.createElement("option");
        opt.value=i;
        opt.innerHTML=zodiacSigns[i].sign;
        select.appendChild(opt);
    }
//then the specific properties are accessed using this code
    function showMySign(){
        var selectedSign= document.getElementById("mySign").value;
        document.getElementById("output").style.display="initial";
        document.getElementById("crystalball").src=zodiacSigns[selectedSign].img;
        document.getElementById("myZodiacSign").textContent=zodiacSigns[selectedSign].sign;
        document.getElementById("myPosTraits").textContent="Your positive traits: "+zodiacSigns[selectedSign].positiveTraits;
        document.getElementById("myNegTraits").textContent="Your negative traits: "+zodiacSigns[selectedSign].negativeTraits;
        document.getElementById("myLoveMatch").textContent="You get along best with: "+zodiacSigns[selectedSign].loveMatch;
        document.getElementById("myLuckyDay").textContent="Your lucky day is: "+zodiacSigns[selectedSign].luckyDay;
        document.getElementById("crystalball").classList.remove("flash");
    }