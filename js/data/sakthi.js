function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}

//1
function problem1501()
{
	var inputData = [{
		'arunmin': 65,
		'arunmax': 72,
		'bromin': 60,
		'bromax': 70,
		'mother': 68
		},
		{
		'arunmin': 60,
		'arunmax': 70,
		'bromin': 44,
		'bromax': 55,
		'mother': 65
		},
		{
		'arunmin': 70,
		'arunmax': 73,
		'bromin': 40,
		'bromax': 60,
		'mother': 67
		},
		{
		'arunmin': 55,
		'arunmax': 65,
		'bromin': 44,
		'bromax': 60,
		'mother': 57
		},
		{
		'arunmin': 50,
		'arunmax': 60,
		'bromin': 48,
		'bromax': 58,
		'mother': 54
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
		'id': '1501',
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


//2


function problem1502()
{
	var inputData = [{
		'person1': 16,
		'avgone': 50.25,
		'person2': 8,
		'avgtwo': 45.15
		},
		{
		'person1': 17,
		'avgone': 51.25,
		'person2': 9,
		'avgtwo': 46.15
		},
		{
		'person1': 18,
		'avgone': 52.25,
		'person2': 7,
		'avgtwo': 44.15
		},
		{
		'person1': 10,
		'avgone': 62.5,
		'person2': 6,
		'avgtwo': 33.33
		},
		{
		'person1': 12,
		'avgone': 55.3,
		'person2': 8,
		'avgtwo': 44.35
		}],
		randomIndex = getRandomNumber(inputData.length),
		person1= inputData[randomIndex]['person1'],
		avgone= inputData[randomIndex]['avgone'],
		person2= inputData[randomIndex]['person2'],
		avgtwo= inputData[randomIndex]['avgtwo'],
		avg,
		question = {};

	avg=(person1*avgone+person2*avgtwo)/(person1+person2);
	avg=parseFloat(avg);

	question = {
		'type': 'single',
		'id': '1502',
		'question': "The average weight of"+person1+"boys in a class is"+avgone+"kg and that of the remaining"+person2+"boys is"+avgtwo+"kg. Find the average weights of all the boys in the class.",
		'options': {
			'A': avg - parseInt(Math.random()*10),
			'B': avg,
			'C': avg + parseInt(Math.random()*10),
			'D': avg - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '15'
	}
	
	return question;
	
}


//3
function problem1503()
{
	var inputData = [{
		'hmp': 8,
		'ootw': 65,
		'ia': 2.5
		},
		{
		'hmp': 10,
		'ootw': 72,
		'ia': 3
		},
		{
		'hmp': 12,
		'ootw': 63,
		'ia': 2
		},
		{
		'hmp': 18,
		'ootw': 60,
		'ia': 1
		},
		{
		'hmp': 11,
		'ootw': 69,
		'ia': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		hmp= inputData[randomIndex]['hmp'],
		ootw= inputData[randomIndex]['ootw'],
		ia= inputData[randomIndex]['ia'],
		npw,
		question = {};

	hmp=parseInt(hmp);
	ootw=parseInt(ootw);
	ia=parseFloat(ia);
	npw=(hmp*ia)+ootw;

	question = {
		'type': 'single',
		'id': '1503',
		'question': "The average weight of"+hmp+"person's increases by"+ia+"kg when a new person comes in place of one of them weighing"+ootw+"kg. What might be the weight of the new person?",
		'options': {
			'A': npw+ parseInt(Math.random()*10),
			'B': npw - parseInt(Math.random()*10),
			'C': npw,
			'D': npw - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;
	
}



//4
function problem1504()
{
	var inputData = [{
		'noo': 10,
		'avg': 3.2,
		'rnoo': 40,
		'trun': 282
		},
		{
		'noo': 12,
		'avg': 4.2,
		'rnoo': 50,
		'trun': 322
		},
		{
		'noo': 11,
		'avg': 3.2,
		'rnoo': 39,
		'trun': 275
		},
		{
		'noo': 11,
		'avg': 4.5,
		'rnoo': 30,
		'trun': 240
		},
		{
		'noo': 9,
		'avg': 2.2,
		'rnoo': 30,
		'trun': 252
		}],
		randomIndex = getRandomNumber(inputData.length),
		noo= inputData[randomIndex]['noo'],
		avg= inputData[randomIndex]['avg'],
		rnoo= inputData[randomIndex]['rnoo'],
		trun= inputData[randomIndex]['trun'],
		nrr,
		question = {};

	nrr=(trun-(avg*noo))/rnoo;

	question = {
		'type': 'single',
		'id': '1504',
		'question': "In the first"+noo+"overs of a cricket game, the run rate was only"+avg+"What should be the run rate in the remaining"+rnoo+"overs to reach the target of"+trun+"runs?",
		'options': {
			'A': nrr+ parseInt(Math.random()*10),
			'B': nrr- parseInt(Math.random()*10),
			'C': nrr- parseInt(Math.random()*10),
			'D': nrr 
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}



//5
function problem1505()
{
	var inputData = [{
		'ngp': 2,
		'np': 2,
		'ngc': 3,
		'aagp': 67,
		'aap': 35,
		'aagc': 6
		},
		{
		'ngp': 2,
		'np': 2,
		'ngc': 4,
		'aagp': 65,
		'aap': 40,
		'aagc': 8
		},
		{
		'ngp': 2,
		'np': 2,
		'ngc': 3,
		'aagp': 60,
		'aap': 42,
		'aagc': 8
		},
		{
		'ngp': 2,
		'np': 2,
		'ngc': 3,
		'aagp': 55,
		'aap': 50,
		'aagc': 5
		},
		{
		'ngp': 2,
		'np': 2,
		'ngc': 3,
		'aagp': 76,
		'aap': 53,
		'aagc': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		ngp= inputData[randomIndex]['ngp'],
		np= inputData[randomIndex]['np'],
		ngc= inputData[randomIndex]['ngc'],
		aagp= inputData[randomIndex]['aagp'],
		aap= inputData[randomIndex]['aap'],
		aagc= inputData[randomIndex]['aagc'],
		af,
		question = {};

	ngp=parseFloat(ngp);
	np=parseFloat(np);
	ngc=parseFloat(ngc);
	aagp=parseFloat(aagp);
	aap=parseFloat(aap);
	aagc=parseFloat(aagc);
	af=(aagp*ngp+np*aap+ngc*aagc)/(ngp+np+ngc);

	question = {
		'type': 'single',
		'id': '1505',
		'question': "A family consists of"+ngp+"grandparents,"+np+"parents and "+ngc+"grandchildren. The average age of the grandparents is"+aagp+"years, that of the parents is "+aap+" years and that of the grandchildren is "+aagc+" years. What is the average age of the family?",
		'options': {
			'A': af,
			'B': af- parseInt(Math.random()*10),
			'C': af- parseInt(Math.random()*10),
			'D': af+ parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}


//6
function problem1506()
{
	var inputData = [{
		'apq': 5050,
		'aqr': 6250,
		'apr': 5200
		},
		{
		'apq': 5070,
		'aqr': 6270,
		'apr': 5220
		},
		{
		'apq': 5060,
		'aqr': 6260,
		'apr': 5210
		},
		{
		'apq': 5030,
		'aqr': 6280,
		'apr': 5220
		},
		{
		'apq': 5080,
		'aqr': 6270,
		'apr': 5220
		}],
		randomIndex = getRandomNumber(inputData.length),
		apq= inputData[randomIndex]['apq'],
		aqr= inputData[randomIndex]['aqr'],
		apr= inputData[randomIndex]['apr'],
		p,
		question = {};

	p=((apq*2+aqr*2+apr*2)/2)-(aqr*2);

	question = {
		'type': 'single',
		'id': '1506',
		'question': "The average monthly income of P and Q is Rs. "+apq+". The average monthly income of Q and R is Rs. "+aqr+" and the average monthly income of P and R is Rs. "+apr+". The monthly income of P is:",
		'options': {
			'A': p- parseInt(Math.random()*10),
			'B': p,
			'C': p- parseInt(Math.random()*10),
			'D': p+ parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '15'
	}
	
	return question;
	
}


//7
function problem1507()
{
	var inputData = [{
		'abc': 45,
		'ab': 40,
		'bc': 43
		},
		{
		'abc': 50,
		'ab': 45,
		'bc': 40
		},
		{
		'abc': 55,
		'ab': 45,
		'bc': 53
		},
		{
		'abc': 45,
		'ab': 40,
		'bc': 43
		},
		{
		'abc': 45,
		'ab': 48,
		'bc': 33
		}],
		randomIndex = getRandomNumber(inputData.length),
		abc= inputData[randomIndex]['abc'],
		ab= inputData[randomIndex]['ab'],
		bc= inputData[randomIndex]['bc'],
		b,
		question = {};

	abc=parseInt(abc);
	ab=parseInt(ab);
	bc=parseInt(bc);
	b=2*bc-(3*abc-2*ab);

	question = {
		'type': 'single',
		'id': '1507',
		'question': "The average weight of A, B and C is "+abc+" kg. If the average weight of A and B be "+ab+" kg and that of B and C be "+bc+" kg, then the weight of B is:",
		'options': {
			'A': b- parseInt(Math.random()*10),
			'B': b- parseInt(Math.random()*10),
			'C': b,
			'D': b+ parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;
	
}


//8
function problem1508()
{
	var inputData = [{
		'ahwc': 27,
		'ybahwc': 3,
		'awc': 20,
		'ybawc': 5
		},
		{
		'ahwc': 37,
		'ybahwc': 3,
		'awc': 25,
		'ybawc': 5
		},
		{
		'ahwc': 27,
		'ybahwc': 4,
		'awc': 20,
		'ybawc': 6
		},
		{
		'ahwc': 28,
		'ybahwc': 4,
		'awc': 24,
		'ybawc': 6
		},
		{
		'ahwc': 23,
		'ybahwc': 2,
		'awc': 21,
		'ybawc': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		ahwc= inputData[randomIndex]['ahwc'],
		ybahwc= inputData[randomIndex]['ybahwc'],
		awc= inputData[randomIndex]['awc'],
		ybawc= inputData[randomIndex]['ybawc'],
		h,
		question = {};

	ahwc=parseInt(ahwc);
	ybahwc=parseInt(ybahwc);
	awc=parseInt(awc);
	ybawc=parseInt(ybawc);
	h=(ahwc*3+3*(ybahwc))-(awc*2+2*(ybawc));

	question = {
		'type': 'single',
		'id': '1508',
		'question': "The average age of husband, wife and their child "+ybahwc+" years ago was "+ahwc+" years and that of wife and the child "+ybawc+" years ago was "+awc+" years. The present age of the husband is:",
		'options': {
			'A': h- parseInt(Math.random()*10),
			'B': h- parseInt(Math.random()*10),
			'C': h+ parseInt(Math.random()*10),
			'D': h
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}



//9
function problem1509()
{
	var inputData = [{
		'student1': 55,
		'student2': 60,
		'student3': 45,
		'mark1': 50,
		'mark2': 55,
		'mark3': 60
		},
		{
		'student1': 56,
		'student2': 62,
		'student3': 47,
		'mark1': 52,
		'mark2': 54,
		'mark3': 69
		},
		{
		'student1': 54,
		'student2': 66,
		'student3': 42,
		'mark1': 51,
		'mark2': 52,
		'mark3': 69
		},
		{
		'student1': 55,
		'student2': 60,
		'student3': 45,
		'mark1': 50,
		'mark2': 55,
		'mark3': 60
		},
		{
		'student1': 65,
		'student2': 70,
		'student3': 55,
		'mark1': 40,
		'mark2': 45,
		'mark3': 50
		}],
		randomIndex = getRandomNumber(inputData.length),
		student1= inputData[randomIndex]['student1'],
		student2= inputData[randomIndex]['student2'],
		student3= inputData[randomIndex]['student3'],
		mark1= inputData[randomIndex]['mark1'],
		mark2= inputData[randomIndex]['mark2'],
		mark3= inputData[randomIndex]['mark3'],
		avg,
		question = {};

	avg=(student1*mark1+student2*mark2+student3*mark3)/(student1+student2+student3);
	avg=parseFloat(avg);

	question = {
		'type': 'single',
		'id': '1509',
		'question': "If the average marks of three batches of "+student1+", "+student2+" and "+student3+" students respectively is "+mark1+", "+mark2+", "+mark3+", then the average marks of all the students is:",
		'options': {
			'A': avg,
			'B': avg- parseInt(Math.random()*10),
			'C': avg+ parseInt(Math.random()*10),
			'D': avg- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}


//10
function problem1510()
{
	var inputData = [{
		'crt': 63,
		'wrong': 83,
		'avgincreased': .5
		},
		{
		'crt': 62,
		'wrong': 82,
		'avgincreased': .5
		},
		{
		'crt': 61,
		'wrong': 81,
		'avgincreased': .5
		},
		{
		'crt': 63,
		'wrong': 83,
		'avgincreased': 1
		},
		{
		'crt': 62,
		'wrong': 82,
		'avgincreased': 1
		}],
		randomIndex = getRandomNumber(inputData.length),
		crt= inputData[randomIndex]['crt'],
		wrong= inputData[randomIndex]['wrong'],
		avgincreased= inputData[randomIndex]['avgincreased'],
		pupils,
		question = {};

	pupils=(crt-wrong)/avgincreased;
	if(pupils<0)
	{
		pupils=-1*pupils
	}
	pupils=parseFloat(pupils);

	question = {
		'type': 'single',
		'id': '1510',
		'question': "A pupil's marks were wrongly entered as "+wrong+" instead of "+crt+". Due to that the average marks for the class got increased by "+avgincreased+". The number of pupils in the class is:",
		'options': {
			'A': pupils- parseInt(Math.random()*10),
			'B': pupils,
			'C': pupils+ parseInt(Math.random()*10),
			'D': pupils- parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '15'
	}
	
	return question;
	
}



//11
function problem1511()
{
	var inputData = [{
		'total': 110,
		'boundaries': 3,
		'six': 8
		},
		{
		'total': 100,
		'boundaries': 3,
		'six': 8
		},
		{
		'total': 110,
		'boundaries': 4,
		'six': 8
		},
		{
		'total': 120,
		'boundaries': 3,
		'six': 8
		},
		{
		'total': 110,
		'boundaries': 2,
		'six': 7
		}],
		randomIndex = getRandomNumber(inputData.length),
		total= inputData[randomIndex]['total'],
		boundaries= inputData[randomIndex]['boundaries'],
		six= inputData[randomIndex]['six'],
		percentage,
		question = {};

	percentage=(total-(boundaries*4+six*6))*100/total;
	percentage=parseFloat(percentage);

	question = {
		'type': 'single',
		'id': '1511',
		'question': "A batsman scored "+total+" runs which included "+boundaries+" boundaries and "+six+" sixes. What percent of his total score did he make by running between the wickets?",
		'options': {
			'A': percentage- parseInt(Math.random()*10),
			'B': percentage+ parseInt(Math.random()*10),
			'C': percentage,
			'D': percentage- parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;
	
}


//12
function problem1512()
{
	var inputData = [{
		'sells': 40,
		'still': 420
		},
		{
		'sells': 50,
		'still': 440
		},
		{
		'sells': 30,
		'still': 400
		},
		{
		'sells': 20,
		'still': 300
		},
		{
		'sells': 30,
		'still': 410
		}],
		randomIndex = getRandomNumber(inputData.length),
		sells= inputData[randomIndex]['sells'],
		still= inputData[randomIndex]['still'],
		hehad,
		question = {};

	hehad=(still*sells/100)+still;
	hehad=parseFloat(hehad);

	question = {
		'type': 'single',
		'id': '1512',
		'question': "A fruit seller had some apples. He sells "+sells+"% apples and still has "+still+" apples. Originally, he had:",
		'options': {
			'A': hehad- parseInt(Math.random()*10),
			'B': hehad+ parseInt(Math.random()*10),
			'C': hehad- parseInt(Math.random()*10),
			'D': hehad
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}


//13
function problem1513()
{
	var inputData = [{
		'one': 55,
		'invalid': 20,
		'total':7500
		},
		{
		'one': 57,
		'invalid': 20,
		'total':7000
		},
		{
		'one': 53,
		'invalid': 10,
		'total':7300
		},
		{
		'one': 55,
		'invalid': 30,
		'total':6500
		},
		{
		'one': 52,
		'invalid': 10,
		'total':6500
		}],
		randomIndex = getRandomNumber(inputData.length),
		one= inputData[randomIndex]['one'],
		invalid= inputData[randomIndex]['invalid'],
		total= inputData[randomIndex]['total'],
		other,
		question = {};

	other=(total-(total*invalid/100))*(100-one)/100;

	question = {
		'type': 'single',
		'id': '1513',
		'question': "In an election between two candidates, one got "+one+"% of the total valid votes, "+invalid+"% of the votes were invalid. If the total number of votes was "+total+", the number of valid votes that the other candidate got, was:",
		'options': {
			'A': other,
			'B': other+ parseInt(Math.random()*10),
			'C': other- parseInt(Math.random()*10),
			'D': other- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}


//14
function problem1514()
{
	var inputData = [{
		'candidate1': 1135,
		'candidate2': 7636,
		'candidate3':11628
		},
		{
		'candidate1': 1145,
		'candidate2': 7646,
		'candidate3':11648
		},
		{
		'candidate1': 1155,
		'candidate2': 7656,
		'candidate3':11658
		},
		{
		'candidate1': 1165,
		'candidate2': 7666,
		'candidate3':11668
		},
		{
		'candidate1': 1125,
		'candidate2': 7626,
		'candidate3':11618
		}],
		randomIndex = getRandomNumber(inputData.length),
		candidate1= inputData[randomIndex]['candidate1'],
		candidate2= inputData[randomIndex]['candidate2'],
		candidate3= inputData[randomIndex]['candidate3'],
		percentage=parseFloat(),
		question = {};

	if(candidate1>candidate2)
	{
		if(candidate1>candidate3)
		{
			percentage=candidate1*100/(candidate1+candidate2+candidate3);
		}
	}
	if(candidate2>candidate1)
	{
		if(candidate2>candidate3)
		{
			percentage=candidate2*100/(candidate1+candidate2+candidate3);
		}
	}

	if(candidate3>candidate1)
	{
		if(candidate3>candidate2)
		{
			percentage=candidate3*100/(candidate1+candidate2+candidate3);
		}
	}

	question = {
		'type': 'single',
		'id': '1514',
		'question': "Three candidates contested an election and received "+candidate1+", "+candidate2+" and "+candidate3+" votes respectively. What percentage of the total votes did the winning candidate get?",
		'options': {
			'A': percentage+ parseInt(Math.random()*10),
			'B': percentage,
			'C': percentage- parseInt(Math.random()*10),
			'D': percentage- parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '15'
	}
	
	return question;
	
}



//15
function problem1515()
{
	var inputData = [{
		'buys': 66500,
		'rebate': 6,
		'salestax':10
		},
		{
		'buys': 66400,
		'rebate': 7,
		'salestax':8
		},
		{
		'buys': 66200,
		'rebate': 6,
		'salestax':9
		},
		{
		'buys': 66100,
		'rebate': 9,
		'salestax':12
		},
		{
		'buys': 66300,
		'rebate': 5,
		'salestax':15
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys= inputData[randomIndex]['buys'],
		rebate= inputData[randomIndex]['rebate'],
		salestax= inputData[randomIndex]['salestax'],
		payamout=parseFloat(),
		question = {};

	payamout=(buys-(buys*rebate/100))+((buys-(buys*rebate/100))*salestax/100);

	question = {
		'type': 'single',
		'id': '1515',
		'question': "Rajeev buys good worth Rs. "+buys+". He gets a rebate of "+rebate+"% on it. After getting the rebate, he pays sales tax @ "+salestax+"%. Find the amount he will have to pay for the goods.",
		'options': {
			'A': payamout+ parseInt(Math.random()*10),
			'B': payamout- parseInt(Math.random()*10),
			'C': payamout,
			'D': payamout- parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;
	
}


//16
function problem1516()
{
	var inputData = [{
		'buys': 4700,
		'repairs': 800,
		'sells':5800
		},
		{
		'buys': 4700,
		'repairs': 700,
		'sells':5700
		},
		{
		'buys': 4800,
		'repairs': 900,
		'sells':5900
		},
		{
		'buys': 4500,
		'repairs': 600,
		'sells':5600
		},
		{
		'buys': 4400,
		'repairs': 400,
		'sells':5400
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys= inputData[randomIndex]['buys'],
		repairs= inputData[randomIndex]['repairs'],
		sells= inputData[randomIndex]['sells'],
		gainper,
		question = {};

	gainper=(sells-(buys+repairs))*100/(buys+repairs);
	gainper=parseFloat(gainper);

	question = {
		'type': 'single',
		'id': '1516',
		'question': "Alfred buys an old scooter for Rs. "+buys+" and spends Rs. "+repairs+" on its repairs. If he sells the scooter for Rs. "+sells+", his gain percent is:",
		'options': {
			'A': gainper+ parseInt(Math.random()*10),
			'B': gainper- parseInt(Math.random()*10),
			'C': gainper- parseInt(Math.random()*10),
			'D': gainper
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}


//17
function problem1517()
{
	var inputData = [{
		'buys': 1400,
		'sellingloss': 15
		},
		{
		'buys': 1500,
		'sellingloss': 16
		},
		{
		'buys': 1200,
		'sellingloss': 12
		},
		{
		'buys': 1000,
		'sellingloss': 10
		},
		{
		'buys': 1100,
		'sellingloss': 11
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys= inputData[randomIndex]['buys'],
		sellingloss= inputData[randomIndex]['sellingloss'],
		sellingprice=parseFloat(),
		question = {};

	sellingprice=buys-(buys*sellingloss/100);

	question = {
		'type': 'single',
		'id': '1517',
		'question': "A man buys a cycle for Rs. "+buys+" and sells it at a loss of "+sellingloss+"%. What is the selling price of the cycle?",
		'options': {
			'A': sellingprice,
			'B': sellingprice- parseInt(Math.random()*10),
			'C': sellingprice- parseInt(Math.random()*10),
			'D': sellingprice+ parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}


//18
function problem1518()
{
	var inputData = [{
		'sold': 2500,
		'cost': 2000
		},
		{
		'sold': 3000,
		'cost': 2500
		},
		{
		'sold': 2000,
		'cost': 1500
		},
		{
		'sold': 4000,
		'cost': 3000
		},
		{
		'sold': 4500,
		'cost': 3500
		}],
		randomIndex = getRandomNumber(inputData.length),
		sold= inputData[randomIndex]['sold'],
		cost= inputData[randomIndex]['cost'],
		profitper=parseFloat(),
		question = {};

	profitper=(sold-cost)*100/cost;

	question = {
		'type': 'single',
		'id': '1518',
		'question': "A shopkeeper sold an article for Rs. "+sold+". If the cost price of the article is "+cost+", find the profit percent.",
		'options': {
			'A': profitper- parseInt(Math.random()*10),
			'B': profitper,
			'C': profitper- parseInt(Math.random()*10),
			'D': profitper+ parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '15'
	}
	
	return question;
	
}


//19
function problem1519()
{
	var inputData = [{
		'purchase': 8000,
		'sellingloss': 10
		},
		{
		'purchase': 6000,
		'sellingloss': 8
		},
		{
		'purchase': 7000,
		'sellingloss': 10
		},
		{
		'purchase': 6000,
		'sellingloss': 8
		},
		{
		'purchase': 9000,
		'sellingloss': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		purchase= inputData[randomIndex]['purchase'],
		sellingloss= inputData[randomIndex]['sellingloss'],
		selprice=parseFloat(),
		question = {};

	selprice=purchase-(purchase*sellingloss/100);

	question = {
		'type': 'single',
		'id': '1519',
		'question': "A man purchases a TV for Rs. "+purchase+" and sells it at "+sellingloss+"% loss. What is the selling price of T.V?",
		'options': {
			'A': selprice- parseInt(Math.random()*10),
			'B': selprice- parseInt(Math.random()*10),
			'C': selprice,
			'D': selprice+ parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;
	
}



//20
function problem1520()
{
	var inputData = [{
		'purchase': 1540,
		'profitpercentage': 25
		},
		{
		'purchase': 1550,
		'profitpercentage': 27
		},
		{
		'purchase': 1560,
		'profitpercentage': 29
		},
		{
		'purchase': 1580,
		'profitpercentage': 30
		},
		{
		'purchase': 1500,
		'profitpercentage': 20
		}],
		randomIndex = getRandomNumber(inputData.length),
		purchase= inputData[randomIndex]['purchase'],
		profitpercentage= inputData[randomIndex]['profitpercentage'],
		selprice=parseFloat(),
		question = {};

	selprice=(purchase*profitpercentage/100)+purchase;

	question = {
		'type': 'single',
		'id': '1520',
		'question': "Ramesh bought a chair for Rs. "+purchase+" and sold it to Suresh. If Ramesh earned a profit of "+profitpercentage+"%, find the selling price of chair.",
		'options': {
			'A': selprice- parseInt(Math.random()*10),
			'B': selprice- parseInt(Math.random()*10),
			'C': selprice+ parseInt(Math.random()*10),
			'D': selprice
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}



//21

function problem1521(){
	var inputData = [{
		'electricity':45,
		'deducted': 160
		},
		{
		'electricity':55,
		'deducted': 210
		},
		{
		'electricity':65,
		'deducted': 190
		},
		{
		'electricity':95,
		'deducted': 290
		}],
		randomIndex = getRandomNumber(inputData.length),
		electricity= inputData[randomIndex]['electricity'],
		deducted = inputData[randomIndex]['deducted'],
		bil,
		question = {};
	
	
	to_pay=deducted-electricity;
	bil=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '1521',
		'question': 'If' + electricity + '% of an electricity bill is deducted then rs' + deducted + 'is still to be paid .How much was the original bill',
		'options': {
			'A': bil,
			'B': bil + parseInt(Math.random()*10),
			'C': bil + parseInt(Math.random()*10),
			'D': bil - parseFloat(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}


//22

function problem1522(){
    var inputData = [{
    'overone': 14,
    'runrate': 3.2,
    'overtwo': 40,
    'runs': 252
    },
    {
    'overone': 10,
    'runrate': 3.2,
    'overtwo': 40,
    'runs': 162
    },
    {
    'overone': 10,
    'runrate': 3.2,
    'overtwo': 40,
    'runs': 320
    },
    {
    'overone': 10,
    'runrate': 3.2,
    'overtwo': 40,
    'runs': 300
    }],
    randomIndex = getRandomNumber(inputData.length),
    overone= inputData[randomIndex]['over1'],
    overtwo= inputData[randomIndex]['over2'],
    runrate= inputData[randomIndex]['rr'],
    runs= inputData[randomIndex]['runs'],
    r,
    rr,
    question = {};
    
    r=runs-(overone*runrate);
    rr=r/overtwo;

question = {
    'type': 'single',
    'id': '1522',
    'question': 'In the first ' + overone + ' overs of a cricket game, the run rate was only ' + runrate + '. What should be the run rate in the remaining ' + overtwo + ' overs to reach the target of ' + runs + ' runs?',
    'options': {
        'A': rr - parseInt(Math.random()*10),
        'B': rr - parseInt(Math.random()*10),
        'C': rr+ parseInt(Math.random()*10),
        'D': rr
    },
    'answer': 'D',
    'author-id': '15'
}

return question;

}


//23

function problem1523(){
    var inputData = [{
    'mspeed': 10,
    'bike': 1.5
    },
    {
    'mspeed': 15,
    'bike': 4.5
    },
    {
    'mspeed': 8,
    'bike': 3.5
    },
    {
    'mspeed':5,
    'bike': 2.5
    }],
    randomIndex = getRandomNumber(inputData.length),
    mspeed= inputData[randomIndex]['mspeed'],
    bike= inputData[randomIndex]['bike'],
    a1,
    b1,
    question = {};
    
    a1=mspeed-bike;
    b1=a1-bike;

question = {
    'type': 'single',
    'id': '1523',
    'question': 'A man speed  is ' + mspeed + ' km/hr and the speed of the bike is ' + bike + ' km/hr. The mans speed against the bike is',
    'options': {
        'A': b1 - parseInt(Math.random()*10),
        'B': b1 - parseInt(Math.random()*10),
        'C': b1 + parseInt(Math.random()*10),
        'D': b1
    },
    'answer': 'D',
    'author-id': '15'
}

return question;

}


//24
function problem1524(){
	var inputData = [{
		'dis':18,
		't1': 2,
		't2': 4,
		},
		{
		'dis':28,
		't1': 3,
		't2': 4,
		},
		{
		'dis':15,
		't1': 7,
		't2': 5,
		},
		{
		'dis':24,
		't1': 5,
		't2': 7,
		},
		{
        'dis':17,
		't1': 2,
		't2': 3,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		dis= inputData[randomIndex]['dis'],
		t1 = inputData[randomIndex]['t1'],
		t2 = inputData[randomIndex]['t2'],
		mspeed,
		question = {};

	dis=parseInt(dis);
	t1=parseInt(t1);
	t2=parseInt(t2);
	r=(dis/t1*t2);

	question = {
		'type': 'single',
		'id': '1524',
		'question': 'The speed of a boat in still water in' +dis+ 'and the rate of current is' +t1+ 'The distance travelled downstream in' +t2+ 'is',
		'options': {
			'A'	:r - parseInt(Math.random()*10),
			'B': r - parseInt(Math.random()*10),
			'C': r + parseInt(Math.random()*10),
			'D': r
		},
		'answer': 'D',
		'author-id': '15'
	}

	return question;
}


//25

function problem1525(){
	var inputData = [{
		'b':7,
		'h':15,
		},
		{
		'b':8,
		'h':16,
		},
		{
        'b':9,
		'h':10,
		},
		{
        'b':9,
		'h':14,
		},
		{
		'b':5,
		'h':10,
		}],
		randomIndex = getRandomNumber(inputData.length),
		b= inputData[randomIndex]['b'],
        h= inputData[randomIndex]['h'],
		area,
		question = {};

	b=parseInt(b);
	h=parseInt(h);
	area=(1/2*b*h),

	question = {
		'type': 'single',
		'id': '1525',
		'question': 'what is the area of a triangle with' +b+ 'and' +h+ 'meters',
		'options': {
			'A'	:area ,
			'B': area - parseInt(Math.random()*10),
			'C': area + parseInt(Math.random()*10),
			'D': area- parseInt(Math.random()*10)
		},
		'answer': 'a',
		'author-id': '15'
	}

	return question;
}

//26

function problem1526(){
	var inputData = [{
		'type':70,
		'page': 1050,
		'hour': 5
		},
		{
		'type':60,
		'page': 300,
		'hour': 5
		},
		{
		'type':50,
		'page': 650,
		'hour': 3
		},
		{
		'type':20,
		'page': 500,
		'hour': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		type= inputData[randomIndex]['type'],
		page = inputData[randomIndex]['page'],
		hour = inputData[randomIndex]['hour'],
		c,
		t,
		question = {};
	
	
	c=page/type;
	t=c/hour;

	question = {
		'type': 'single',
		'id': '1526',
		'question': + type + 'typists can type' + page + 'pages in' + hour + 'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': t - parseInt(Math.random()*10),
			'B': t - parseInt(Math.random()*10),
			'C': t + parseInt(Math.random()*10),
			'D': t
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}


//27

function problem1527(){
	var inputData = [{
		'A': 1000,
		'B': 5658,
		'C': 4580,
		'D': 2865,
		'E': 2860,
		'average': 2579,
		't':4133,
		's':3203
		},
		{
		'A': 8435,
		'B': 4927,
		'C': 2855,
		'D': 1230,
		'E': 5562,
		'average': 3500,
		't':2233,
		's':4250
		},
		{
		'A': 9439,
		'B': 3067,
		'C': 4805,
		'D': 1500,
		'E': 3089,
		'average': 5032,
		't':4133,
		's':3253
		},
		{
		'A': 7075,
		'B': 7334,
		'C': 2423,
		'D': 7809,
		'E': 4580,
		'average': 4000,
		't':3233,
		's':3153
		},
		{
		'A': 3543,
		'B': 6289,
		'C': 9017,
		'D': 6780,
		'E': 4356,
		'average': 7500,
		't':4233,
		's':3253
		}],
		randomIndex = getRandomNumber(inputData.length),
		A= inputData[randomIndex]['A'],
		B= inputData[randomIndex]['B'],
		C= inputData[randomIndex]['C'],
		D= inputData[randomIndex]['D'],
		E= inputData[randomIndex]['E'],
		average= inputData[randomIndex]['average'],
		t= inputData[randomIndex]['t'],
		s= inputData[randomIndex]['s'],
		fS,
		question = {};

	var t = parseInt(A+B+C+D+E),
	    s = parseInt(average*6),
	    fS = parseInt(s - t);

	question = {
		'type': 'single',
		'id': '1527',
		'question': 'Mohan gets a salary of '+ A +', '+B+ ', '+C+', '+D+' and '+E +' for 5 months.How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': fS,
			'B': fS - parseInt(Math.random()*10),
			'C': fS + parseInt(Math.random()*10),
			'D': fS - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
}


//28

function problem1528(){
	var inputData = [{
		'peri': 50	
		},
		{
		'peri': 75,
		},
		{
		'peri': 24,	
		},
		{
		'peri': 46,		
		},
		{
		'peri': 39,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		peri= inputData[randomIndex]['peri'],
		s,
		question = {};

	peri=parseInt(peri);
	s=peri/4;

	question = {
		'type': 'single',
		'id': '1528',
		'question': 'If the perimeter of square is ' + peri+', find one of the side of square?',
		'options': {
			'A': s - parseInt(Math.random()*10),
			'B': s - parseInt(Math.random()*10),
			'C': s + parseInt(Math.random()*10),
			'D': s
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}

//29

function problem1529(){
	var inputData = [{
		'v': 783		
		},
		{
		'v': 465,
		},
		{
		'v': 240,	
		},
		{
		'v': 523,		
		},
		{
		'v': 343,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		v= inputData[randomIndex]['v'],
		cube,
		question = {};

	v=parseInt(v);
	cube=Math.cbrt(v);

	question = {
		'type': 'single',
		'id': '1529',
		'question': 'Find the cube root value of '+ v+'? ',
		'options': {
			'A':cube - parseInt(Math.random()*10),
			'B':cube - parseInt(Math.random()*10),
			'C':cube + parseInt(Math.random()*10),
			'D':cube
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
	
}


//30

function problem1530(){
    var inputData = [{
        'm': 30,
        'l':6
        },
        {
        'm': 34,
        'l':2
        },
        {
        'm': 32,
        'l':5
        },
        
        {
        'm': 30,
        'l':22
        }],
        randomIndex = getRandomNumber(inputData.length),
        m= inputData[randomIndex]['m'],
        l= inputData[randomIndex]['l'],
        
        
        m=parseInt(m/100);
        l=parseInt(l);
        q=m*l;
        added=l+1;
        p=(q/added)*100;
        question = {};
        
        
    question = {
        'type': 'single',
        'id': '1530',
        'question': 'To a milk solution of '+ l+' containing '+m+', one litre of water is added.the percentage of milk in the new solution is',
        'options': {
            'A': p-parseInt(Math.random()*10),
            'B': p-parseInt(Math.random()*10),
            'C': p,
            'D': p+parseInt(Math.random()*10)
        },
        'answer': 'c',
        'author-id': '15'
    }
    return question;

}


//31

function problem1531(){
	var inputData = [{
		'sSpeed': 21,
		'bSpeed': 25
		},
		{
		'sSpeed': 15,
		'bSpeed': 6
		},
		{
		'sSpeed': 10,
		'bSpeed': 25
		},
		{
		'sSpeed': 17,
		'bSpeed': 21
		},
		{
		'sSpeed': 30,
		'bSpeed': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		sSpeed = inputData[randomIndex]['sSpeed'],
		bSpeed = inputData[randomIndex]['bSpeed'],
		up,
		question = {};

	sSpeed = parseInt(sSpeed);
	bSpeed = parseInt(bSpeed);
	up = (bSpeed - sSpeed);

	question = {
		'type': 'single',
		'id': '1531',
		'question': 'The speed of boat in still water is' +" "+ + bSpeed + 'kmph. The speed of current is'+" "+ + sSpeed + 'kmph. What is its Up stream speed in kmph?',
		'options': {
			'A': up + parseInt(Math.random()*10),
			'B': up - parseInt(Math.random()*10),
			'C': up + parseInt(Math.random()*10),
			'D': up
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;
		
}

//32

function problem1532(){
	var inputData = [{
		'p': 2500,
		'r': 6,
		'years': 6
		},
		{
		'p': 500,
		'r': 5,
		'years': 2
		},
		{
		'p': 530,
		'r': 4,
		'years': 6
		},
		{
		'p': 750,
		'r': 8,
		'years': 6
		},
		{
		'p': 8000,
		'r': 4,
		'years': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		p = inputData[randomIndex]['p'],
		r = inputData[randomIndex]['r'],
		years = inputData[randomIndex]['years'],
		interest,
		question = {};

	p = parseInt(p);
	r = parseInt(r);
	years = parseInt(years);
	interest = (p*interest*years)/100;

	question = {
		'type': 'single',
		'id': '1532',
		'question': 'Find the Simple Interest when Principal is' +" "+ p +" "+ ',Rate of Interest is' +" "+interest +'% per annum and Time is' +" "+ +years+ 'years.?',
		'options': {
			'A': interest + parseInt(Math.random()*10),
			'B': interest + parseInt(Math.random()*10),
			'C': interest,
			'D': interest - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;
		
}


//33

function problem1533(){
	var inputData = [{
		'len': 14,
		'b': 18
		},
		{
		'len': 23,
		'b': 11
		},
		{
		'len': 33,
		'b': 21
		},
		{
		'len': 25,
		'b': 12
		},
		{
		'len': 40,
		'b': 13
		}],
		randomIndex = getRandomNumber(inputData.length),
		len = inputData[randomIndex]['len'],
		b = inputData[randomIndex]['b'],
		a,
		question = {};

	len = parseInt (len);
	b = parseInt (b);
	a = len*b;

	question = {
		'type': 'single',
		'id': '1533',
		'question': 'Find the Area of Rectangle with length'+" "+ + len + 'cm and breadth' +" "+ b + 'cm ?',
		'options': {
			'A': a + parseInt(Math.random()*10),
			'B': a - parseInt(Math.random()*10),
			'C': a,
			'D': a - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;	
}


//34

function problem1534(){
	var inputData = [{
		'sum': 580,
		'total': 12
		},
		{
		'sum': 425,
		'total': 15
		},
		{
		'sum': 880,
		'total': 3
		},
		{
		'sum': 24,
		'total': 6
		},
		{
		'sum': 40,
		'total': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		sum = inputData[randomIndex]['sum'],
		total = inputData[randomIndex]['total'],
		avg,
		question = {};

	sum = parseInt (sum);
	total = parseInt (total);
	avg = sum/total;

	question = {
		'type': 'single',
		'id': '1534',
		'question': ' The sum of' +" " + total + " " + 'numbers is' +" " + + sum +'. Find their average number.?',
		'options': {
			'A': avg + parseInt(Math.random()*10),
			'B': avg - parseInt(Math.random()*10),
			'C': avg - parseInt(Math.random()*10),
			'D': avg 
		},
		'answer': 'D',
		'author-id': '15'
	}
	
	return question;	
}

//35

function problem1535(){
	var inputData = [{
		'len': 14,
		'b': 12
		},
		{
		'len': 23,
		'b': 10
		},
		{
		'len': 33,
		'b': 23
		},
		{
		'len': 25,
		'b': 11
		},
		{
		'len': 30,
		'b': 21
		}],
		randomIndex = getRandomNumber(inputData.length),
		len = inputData[randomIndex]['len'],
		b = inputData[randomIndex]['b'],
		peri,
		question = {};

	len = parseInt(len);
	b = parseInt(b);
	peri = 2*(len+b);

	question = {
		'type': 'single',
		'id': '1535',
		'question': 'Find the Perimeter of the Rectangle with length'+" "+  len +'cm and breadth' +" "+ b + 'cm ?',
		'options': {
			'A': peri + parseInt(Math.random()*10),
			'B': peri - parseInt(Math.random()*10),
			'C': peri,
			'D': peri - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '15'
	}
	
	return question;	
}

//36

function problem1536()
{
	var inputData = [{
		'jaimin': 65,
		'jaimax': 72,
		'bromin': 60,
		'bromax': 70,
		'dad': 68
		},
		{
		'jaimin': 60,
		'jaimax': 70,
		'bromin': 44,
		'bromax': 55,
		'dad': 65
		},
		{
		'jaimin': 70,
		'jaimax': 73,
		'bromin': 40,
		'bromax': 60,
		'dad': 67
		},
		{
		'jaimin': 55,
		'jaimax': 65,
		'bromin': 44,
		'bromax': 60,
		'dad': 57
		},
		{
		'jaimin': 50,
		'jaimax': 60,
		'bromin': 48,
		'bromax': 58,
		'dad': 54
		}],
		randomIndex = getRandomNumber(inputData.length),
		jaimin= inputData[randomIndex]['jaimin'],
		jaimax= inputData[randomIndex]['jaimax'],
		bromin= inputData[randomIndex]['bromin'],
		bromax= inputData[randomIndex]['bromax'],
		dad=inputData[randomIndex]['dad'],
		probableweight,
		question = {};

	probableweight=(jaimin+jaimax+bromin+bromax+dad)/5;

	question = {
		'type': 'single',
		'id': '1536',
		'question': "In jai's opinion, his weight is greater than"+jaimin+"kg but less than"+jaimax+"kg. His brother doest not agree with Arun and he thinks that Arun's weight is greater than"+bromin+"kg but less than"+bromax+"kg. His mother's view is that his weight cannot be greater than"+dad+"kg. If all are them are correct in their estimation, what is the average of different probable weights of Arun?",
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

//37


function problem1537()
{
	var inputData = [{
		'p1': 20,
		'a1': 50.25,
		'p2': 15,
		'a2': 45.15
		},
		{
		'p1': 17,
		'a1': 55.25,
		'p2': 9,
		'a2': 56.15
		},
		{
		'p1': 19,
		'a1': 52.25,
		'p2': 8,
		'a2': 44.15
		},
		{
		'p1': 10,
		'a1': 52.5,
		'p2': 6,
		'a2': 23.33
		},
		{
		'p1': 15,
		'a1': 55.3,
		'p2': 13,
		'a2': 44.35
		}],
		randomIndex = getRandomNumber(inputData.length),
		p1= inputData[randomIndex]['p1'],
		a1= inputData[randomIndex]['a1'],
		p2= inputData[randomIndex]['p2'],
		a2= inputData[randomIndex]['a2'],
		avg,
		question = {};

	avg=(p1*a1+p2*a2)/(p1+p2);
	avg=parseFloat(avg);

	question = {
		'type': 'single',
		'id': '1537',
		'question': "The average weight of"+p1+"girls in a class is"+a1+"kg and that of the remaining"+p2+"girls is"+a2+"kg. Find the average weights of all the girls in the class.",
		'options': {
			'A': avg - parseInt(Math.random()*10),
			'B': avg,
			'C': avg + parseInt(Math.random()*10),
			'D': avg - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '15'
	}
	
	return question;
	
}

//38

function problem1538()
{
	var inputData = [{
		's1': 45,
		's2': 50,
		's3': 35,
		'm1': 40,
		'm2': 45,
		'm3': 50
		},
		{
		's1': 46,
		's2': 52,
		's3': 37,
		'm1': 42,
		'm2': 44,
		'm3': 59
		},
		{
		's1': 44,
		's2': 56,
		's3': 32,
		'm1': 41,
		'm2': 42,
		'm3': 59
		},
		{
		's1': 45,
		's2': 50,
		's3': 35,
		'm1': 40,
		'm2': 45,
		'm3': 50
		},
		{
		's1': 55,
		's2': 60,
		's3': 45,
		'm1': 30,
		'm2': 35,
		'm3': 40
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		s3= inputData[randomIndex]['s3'],
		m1= inputData[randomIndex]['m1'],
		m2= inputData[randomIndex]['m2'],
		m3= inputData[randomIndex]['m3'],
		a,
		question = {};

	a=(s1*m1+s2*m2+s3*m3)/(s1+s2+s3);
	a=parseFloat(a);

	question = {
		'type': 'single',
		'id': '1509',
		'question': "If the average marks of three groups of "+s1+", "+s2+" and "+s3+" students respectively is "+m1+", "+m2+", "+m3+", then the average marks of all the students is:",
		'options': {
			'A': a,
			'B': a- parseInt(Math.random()*10),
			'C': a+ parseInt(Math.random()*10),
			'D': a- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '15'
	}
	
	return question;
	
}