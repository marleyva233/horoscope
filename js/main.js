// GETTING SET UP FOR THE FUNCTION

//ARRAY 
// i am creating an array to later access
//i have created 12 objects, each one containing a different sign
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
		positiveTraits: "Progressie, original, independent, humanitarian.",
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

//console logging the array zodiacSigns verifies that the
//objects have been created successfully and can be accessed 

//when accessing the information i want each sign property
//to be displayed separately for ease of use.
//in HTML i need to create an element with a unique ID
//the element will display each property

//when the user enters their sign the button will contain a function 
//that retrieves a specific item in the array
//so we need to assign hooks
// FUNCTION WHEN CLICKING SUBMIT ON THE BUTTON
//the input id is inputMySign
//now that the HTML for the ouput part of this project is ready
//i can start coding the function that will be triggered 
//by the onClick property on the button 
function myZodiacSign(){
	var mySign=inputMySign.value;
	var mySign=mySign.toLowerCase();
	console.log(mySign);
	if (mySign=="aries") {
		document.getElementById("crystalball").src=zodiacSigns[0].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[0].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[0].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[0].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[0].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[0].luckyDay;
	} else if(mySign=="taurus"){
		document.getElementById("crystalball").src=zodiacSigns[1].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[1].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[1].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[1].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[1].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[1].luckyDay;
	}else if(mySign=="gemini"){
		document.getElementById("crystalball").src=zodiacSigns[2].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[2].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[2].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[2].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[2].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[2].luckyDay;
	}else if(mySign=="cancer"){
		document.getElementById("crystalball").src=zodiacSigns[3].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[3].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[3].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[3].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[3].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[3].luckyDay;
	}else if(mySign=="leo"){
		document.getElementById("crystalball").src=zodiacSigns[4].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[4].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[4].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[4].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[4].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[4].luckyDay;
	}else if(mySign=="virgo"){
		document.getElementById("crystalball").src=zodiacSigns[5].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[5].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[5].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[5].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[5].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[5].luckyDay;
	}else if(mySign=="libra"){
		document.getElementById("crystalball").src=zodiacSigns[6].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[6].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[6].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[6].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[6].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[6].luckyDay;
	}else if(mySign=="scorpio"){
		document.getElementById("crystalball").src=zodiacSigns[7].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[7].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[7].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[7].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[7].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[7].luckyDay;
	}else if(mySign=="sagittarius"){
		document.getElementById("crystalball").src=zodiacSigns[8].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[8].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[8].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[8].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[8].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[8].luckyDay;
	}else if(mySign=="capricorn"){
		document.getElementById("crystalball").src=zodiacSigns[9].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[9].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[9].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[9].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[9].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[9].luckyDay;
	}else if(mySign=="aquarius"){
		document.getElementById("crystalball").src=zodiacSigns[10].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[10].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[10].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[10].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[10].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[10].luckyDay;
	}else if(mySign=="pisces"){
		document.getElementById("crystalball").src=zodiacSigns[11].img;
		document.getElementById("myZodiacSign").textContent=zodiacSigns[11].sign;
		document.getElementById("myPosTraits").textContent="Your positive traits: " + zodiacSigns[11].positiveTraits;
		document.getElementById("myNegTraits").textContent="Your negative traits: "+ zodiacSigns[11].negativeTraits;
		document.getElementById("myLoveMatch").textContent="You get along bests with: "+ zodiacSigns[11].loveMatch;
		document.getElementById("myLuckyDay").textContent="Your lucky day is: " +zodiacSigns[11].luckyDay;
	}else{
		document.getElementById("myPosTraits").textContent="I'm sorry I couldn't find your horoscope. Check your spelling and try again.";
	}
}