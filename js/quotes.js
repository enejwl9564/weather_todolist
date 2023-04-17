const quotes = [
	{
		quote: "Just do it!",
		author: "Nike",
	},
	{
		quote: "반복은 천재를 낳고 믿음은 기적을 낳는다",
		author: "오늘의 공부 명언",
	},
	{
		quote: "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서'라는 변명이다",
		author: "에디슨",
	},
	{
		quote: "성공에 대해서 서두르지 않고, 교만하지 않고, 쉬지 않고, 포기하지 않는다",
		author: "로버트 H. 슐러",
	},
	{
		quote: "당신은 지체할 수 있지만 시간은 지체하지 않는다",
		author: "벤자민 프랭클린",
	},
	{
		quote: "노력을 이기는 재능은 없고 노력을 외면하는 결과도 없다",
		author: "오늘의 공부 명언",
	},
	{
		quote: "10분 뒤와 10년 후를 동시에 생각하라",
		author: "오늘의 공부 명언",
	},
	{
		quote: "목적없는 공부는 기억에 해가 될 뿐이며, 머리 속에 들어온 어떤 것도 간직하지 못한다",
		author: "레오나르도 다빈치",
	},
	{
		quote: "고뇌에 지는 것은 수치가 아니다. 쾌락에 지는 것이야말로 수치다",
		author: "파스칼",
	},
	{
		quote: "사람을 알려면 그의 지갑, 쾌락, 그리고 불평을 보라",
		author: "탈무드",
	},
	{
		quote: "인생의 위대한 목표는 지식이 아니라 행동이다",
		author: "헉슬리",
	},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const index = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[index];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
