function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem151(){
	var inputData = [{
		'arunmin': 65,
		'arunmax': 72,
		'bromin': 60,
		'bromax': 70,
		'mother': 68
		},
		{
		'arunmin': 65,
		'arunmax': 72,
		'bromin': 60,
		'bromax': 70,
		'mother': 68
		},
		{
		'arunmin': 65,
		'arunmax': 72,
		'bromin': 60,
		'bromax': 70,
		'mother': 68
		},
		{
		'arunmin': 65,
		'arunmax': 72,
		'bromin': 60,
		'bromax': 70,
		'mother': 68
		},
		{
		'arunmin': 65,
		'arunmax': 72,
		'bromin': 60,
		'bromax': 70,
		'mother': 68
		}],
		randomIndex = getRandomNumber(inputData.length),
		arunmin= inputData[randomIndex]['arunmin'],
		arunmax= inputData[randomIndex]['arunmax'],
		bromin= inputData[randomIndex]['bromin'],
		bromax= inputData[randomIndex]['bromax'],
		mother=inputData[randomIndex]['mother'],
		probableweight,
		question = {};

	probableweight=(arunmin+arunmax+bromin+bromax+mother)/5;

	question = {
		'type': 'single',
		'id': '151',
		'question': "In Arun's opinion, his weight is greater than"+arunmin+"kg but less than"+arunmax+"kg. His brother doest not agree with Arun and he thinks that Arun's weight is greater than"+bromin+"kg but less than"+bromax+"kg. His mother's view is that his weight cannot be greater than"+mother+"kg. If all are them are correct in their estimation, what is the average of different probable weights of Arun?",
		'options': {
			'A': probableweight,
			'B': probableweight - parseInt(Math.random()*10),
			'C': probableweight + parseInt(Math.random()*10),
			'D': probableweight - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}

function problem2(){
	
}

function problem3(){
	
}