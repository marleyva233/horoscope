const zodiacSigns = {
	Aries: {	
		img: "img/newaries.png",
		sign: "Aries",
		positiveTraits:"Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.",
		negativeTraits: "Impatient, moody, short-tempered, impulsive, aggressive.",
		loveMatch: "Libra, Leo",
		luckyDay: "Tuesday" ,
	},
	Taurus: {
		img: "img/newtaurus.png",
		sign: "Taurus",
		positiveTraits: "Reliable, patient, practical, devoted, responsible, stable.",
		negativeTraits: "Stubborn, possessive, uncompromising.",
		loveMatch: "Scorpio or Cancer",
		luckyDay: "Friday and Monday",
	},
	Gemini: {
		img: "img/newgemini.png",
		sign: "Gemini",
		positiveTraits: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
		negativeTraits: "Nervous, inconsistent,  and indecisive.",
		loveMatch: "Saggitarius, Aquarius",
		luckyDay: "Wednesday",
	},
	Cancer: {
		img: "img/newcancer.png",
		sign: "Cancer",
		positiveTraits: "Tenacius, highly imaginative, loyal, emotional, sympathetic, persuasive.",
		negativeTraits: "Moody, pessimistic, suspicious, manipulative, insecure.",
		loveMatch: "Capricorn and Taurus.",
		luckyDay: "Monday and Thursday.",
	},
	Leo: {
		img: "img/newleo.png",
		sign: "Leo",
		positiveTraits: "Creative, passionate, generous, warm-hearted, cheerful, humorous.",
		negativeTraits: "Arrogant, stubborn, self-centered, lazy, inflexible",
		loveMatch: "Aquarius and Gemini",
		luckyDay: "Sunday",
	},
	Virgo: {
		img: "img/newvirgo.png",
		sign: "Virgo",
		positiveTraits: "Loyal, analytical, kind, hardworking, practical.",
		negativeTraits: "Shyness, worry, overly critical of self and others, all work and no play.",
		loveMatch: "Pisces and Cancer.",
		luckyDay: "Wednesday",
	},
	Libra: {
		img: "img/newlibra.png",
		sign: "Libra",
		positiveTraits: "Cooperative, diplomatic, gracious, fair-minded, social.",
		negativeTraits: "indecisive, avoids confrontations, will carry a grudge, self-pity.",
		loveMatch: "Aries and Saggitarius",
		luckyDay: "Friday",
	},
	Scorpio: {
		img: "img/newscorpio.png",
		sign: "Scorpio",
		positiveTraits: "Resourceful, brave, passionate, stubborn, a true friend.",
		negativeTraits: "Distrusting, jealous, secretive, violent.",
		loveMatch: "Taurus and Cancer.",
		luckyDay: "Tuesday",
	},
	Sagittarius: {
		img: "img/newsagittarius.png",
		sign: "Sagittarius",
		positiveTraits: "Generous, idealistic, great sense of humour.",
		negativeTraits: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic.",
		loveMatch: "Gemini and Aries.",
		luckyDay: "Thursday",
	},
	Capricorn: {
		img: "img/newcapricorn.png",
		sign: "Capricorn",
		positiveTraits: "responsible, disciplined, self-control, good manners.",
		negativeTraits: "Know-it-all, unforgiving, condescending, expecting the worst.",
		loveMatch: "Taurus and Cancer.",
		luckyDay: "Saturday",
	},
	Aquarius: {
		img: "img/newaquarius.png",
		sign: "Aquarius",
		positiveTraits: "Progressive, original, independent, humanitarian.",
		negativeTraits:"Runs from emotional expression, temperamental, uncompromising, aloof.",
		loveMatch: "Leo and Saggitarius.",
		luckyDay: "Saturday",
	},
	Pisces: {
		sign: "Pisces",
		img: "img/newpisces.png",
		positiveTraits: "Compassionate, artistic, intuitive, gentle, wise, musical.",
		negativeTraits: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr.",
		loveMatch: "Virgo and Taurus.",
		luckyDay: "Thursday",
	}
}
 const select = document.getElementById("mySign");
 Object.entries(zodiacSigns).forEach(([key, val]) => {
    let opt = document.createElement("option")
 			opt.value = key
 			opt.innerHTML = key
 			select.appendChild(opt)
});
function showMySign() {
    const selectedSign = document.getElementById("mySign").value;
    console.log(selectedSign);
    const ball = document.getElementById("crystalball");
    	ball.src = zodiacSigns[selectedSign].img;
    let output = document.getElementById("output");
    	output.style.display = "initial";
    	output.innerHTML = "<h1>" + zodiacSigns[selectedSign].sign + "</h1>";
    	output.innerHTML += "<p>Your positive traits: " + zodiacSigns[selectedSign].positiveTraits + "</p>";
    	output.innerHTML += "<p>Your negative traits: " + zodiacSigns[selectedSign].negativeTraits + "</p>";
    	output.innerHTML += "<p>You get along best with: " + zodiacSigns[selectedSign].loveMatch + "</p>";
    	output.innerHTML += "<p>Your lucky day is: "+ zodiacSigns[selectedSign].luckyDay + "</p>";
    	ball.classList.remove("flash");
}