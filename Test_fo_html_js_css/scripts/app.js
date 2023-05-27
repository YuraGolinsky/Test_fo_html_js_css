const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам багато потрібно вчитися", 0),
	new Result("Ви вже непогано знаєтеся на математиці", 3),
	new Result("Ваш рівень математики вищий за середній", 8),
	new Result("Ви відмінник у математиці", 15)
];

//Массив с вопросами
const questions = 
[
	new Question("Питання 1: Розв'яжіть приклад 5,3-2,8/(-25)", 
	[
		new Answer("0,1", 0),
		new Answer("-10", 0),
		new Answer("-0,1", 0),
		new Answer("5,4", 1)
	]),

	new Question("Питання 2:Чи можна вважати число -7 натуральним?", 
	[
		new Answer("Можна", 0),
		new Answer("He можна", 0)
	]),

	new Question("Питання 3: Якщо число поділити на 1, то вийде:", 
	[
		new Answer("Те ж число", 1),
		new Answer("0", 0),
		new Answer("15", 0),
		new Answer("48", 0)
	]),

	new Question("Питання 4: Прямоугольник у которого все стороны равны называется? ", 
	[
		new Answer("Ромб", 0),
		new Answer("Треугольник", 0),
		new Answer("Куб", 0),
		new Answer("Квадрат", 1)
	]),

	new Question("Питання 5:Розв'яжіть приклад: 5,3+100/(-25)+4*(15)", 
	[
		new Answer("40", 0),
		new Answer("55", 0),
		new Answer("65", 0),
		new Answer("61,3", 1)
	]),
	new Question("Питання 6:Розв'яжіть приклад: (100+150)/(20+45)", 
	[
		new Answer("2", 0),
		new Answer("2,5", 1),
		new Answer("3", 0),
		new Answer("3,8", 0)
	]),
	new Question("Питання 7:Група з 15 школярів у супроводі трьох дорослих планує автобусну екскурсію в заповідник. Оренда автобуса для екскурсії коштує 800 грн. Вартість вхідного квитка в заповідник становить 20 грн для школяра й 50 грн – для дорослого. Якої мінімальної суми грошей достатньо для проведення цієї екскурсії?",
	[
		new Answer("1050 грн", 0),
		new Answer("1150 грн", 0),
		new Answer("1250 грн", 1)
	]),
	new Question("Питання 8:За 6 однакових конвертів заплатили 3 грн. Скільки всього таких конвертів можна купити за 12 грн?", 
	[
		new Answer("6", 1),
		new Answer("24", 0),
		new Answer("30", 0)
	]),
	new Question("Питання 9:Укажіть функцію, графік якої проходить через початок координат.",
	[
		new Answer("y = x - 1", 0),
		new Answer("y = 1", 0),
		new Answer("y = x", 1)
	]),
	new Question("Питання 10:Яке з наступних чисел найбільше?", 
	[
		new Answer("15", 0),
		new Answer("20", 0),
		new Answer("45", 1)
	]),
	new Question("Питання 11:Цілком на 18 ділиться число",
	[
		new Answer("328", 0),
		new Answer("342", 1),
		new Answer("339", 0),
		new Answer("364", 0)

	]),
	new Question("Питання 12:Яка з координатних точок розташована на координатній прямій ліворуч від інших?",
	[
		new Answer("A(-7)", 0),
		new Answer("S(4)", 0),
		new Answer("D(10)", 0),
		new Answer("C(-11)", 1)

	]),
	new Question("Питання 13:Розв'яжіть рівняння: 2 х = - 6,2",
	[
		new Answer("6,2", 0),
		new Answer("-6,2", 0),
		new Answer("-3,1", 1),
		new Answer("3,1", 0)
	]),
	new Question("Питання 14:Який із даних чисел має найменший модуль??",
	[
		new Answer("25,5", 0),
		new Answer("-21,4", 0),
		new Answer("-21,39", 0),
		new Answer("21,305", 1)

	]),
	new Question("Питання 15:Сума довжин усіх ребер прямокутного паралелепіпеда, що виходять з однієї вершини, дорівнює 60 см. Визначте суму довжин усіх ребер цього паралелепіпеда.", 
	[
		new Answer("360 см", 0),
		new Answer("240 см", 1),
		new Answer("120 см", 0)
	]),
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}