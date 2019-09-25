// массив вопросов
var question = ['We elect a U.S. Senator for how many years? ', 'How old do citizens have to be to vote for President?','When was the Declaration of Independence adopted?','Who was first man in space','What is the largest ocean basin on Earth?','Which Nation First Adopted Christianity?','What is the capital of Madagascar?','What is the largest planet in our solar system?','What team has the most Champions League titles?','What is the longest river in the world?','Who is the founder of windows operating system?','Which president is on the $10 bill?','Which of the following is not a reserved word in JavaScript?','What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?','Кто такой «молотоглав»?'];
// массив ответов
var answer = ['four','six','seven','eight',  '15','16','17','18', 'July 4, 1667','July 4, 1787','July 4, 1767','July 4, 1776', 'Neil Armstrong','Gherman Titov','Yuri Gagarin','Alan Shepard', 'Atlantic Ocean','Indian Ocean','Arctic Ocean','Pacific Ocean', 'Georgia','Armenia','Russia','Greece', 'Reykjavík','Johannesburg','Canberra','Antananarivo', 'Earth','Mercury','Jupiter','Saturn', 'Real Madrid','Liverpool','Milan','Bayern München', 'Amazon River',' Nile River','Yangtze','Yellow River', 'Steve Jobs','Bill Gates','Mark Zuckerberg','Jeff Bezos', 'George Washington','Abraham Lincoln','Andrew Jackson','Alexander Hamilton', 'program','throws','interface','short', 'strip()','trim()','stripped()','trimmed()', 'Рыба','Птица','Змея','Насекомое'];
// массив с номерами правильных ответов
var key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];
// идентификатор прохождения
var level = 0;


// ВАЖНО! Уровень прохождения
function show(level) {
    // Выводит в .question нужный вопрос по переменной level
	$('.question').text( question[level] );
    // Выводит в label нужный ответ по переменной level 
	// Обрати внимание на формулу. Она делит весь массив на 4 элемента засчет умножения на 4, затем добавляет нужное значение
	$('label[for=answer1]').text( answer[level*4+0] );
	$('label[for=answer2]').text( answer[level*4+1] );
	// например, при level = 2 ниже он выведет 10 и 11 ответы
	$('label[for=answer3]').text( answer[level*4+2] );
	$('label[for=answer4]').text( answer[level*4+3] );

}

var resultConst = [];
show(level);
var tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','#FF0');

$('.btn').click(function(){
    // выводит в таймер значение 60
	$("#timer_inp").text(30);
    // сравнивает выбранный вариант по атрибуту checked с правильным ответом из массива key по идентификатору level
	// нижний if - это "если правильно ответил"
	if( $('input[name=answer]:checked').val() == key[level] )
	{
		// увеличивает значение переменной level на единицу
		level++;
		
		show(level);
	}
	// условие else - если ответ не соответсвует правильному из массива key
	else{gameOwer()}
	// убирает атрибут checked
	$('input').prop('checked', false);
	// Здесь удаляется класс result у всех строк таблицы результатов
	$(tr.removeClass('result'));
	// Задает строке таблицы цвет текста - фиолетовый
	$(tr[tr.length - (level)]).css('color','#f0f');
	// Задает строке таблицы класс result, именно той, которая соответствует уровню
	$(tr[tr.length - (level)]).addClass('result');
	
	// Задает цвет текста для label 
	$('label').css('color', '#555');
    // добавляет класс resultConst, если нынешний level равен 5 или 10 или 15, так он фиксирует "несгораемую сумму"
	if (level == 5 || level == 10 || level == 15) 
	{
		 resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	}
})

// Нужно понимать
function gameOwer() {
    // выводит блок проигрыша
	$('.end').css('display', 'block');
    // задает условие "если хотя бы один tr имеет класс resultConst
	if (tr.hasClass('resultConst')) 
	{
		// помещает в переменную tdResult1 содержащиеся в строке ячейки
		var tdResult1 = $(resultConst[resultConst.length - 1]).children();
		// помещает в переменную tdText1 текст второй ячейки выбранной строки
		var tdText1 = tdResult1[1].textContent;
		// выводит в .showResult текст Вы выиграли с перемнной tdText1
		$('.showResult').text('You Won: ' + tdText1 + ' $');
	}
}
// таймер
function timer(){
     // Помещает в переменную objTimer помещает #timer_inp
	 var objTimer=document.getElementById('timer_inp');
	 // Уменьшает значение на 1 
	 objTimer.innerHTML--;
  	 // остановка таймера и окончание игры
	 if(objTimer.innerHTML==0)
		{
	 	setTimeout(function(){},1000);
	 	gameOwer();
		}
	// задает интервал в 1000 мс для запуска функции 
	 else{setTimeout(timer,1000)}

}

$('form').submit(function(e){ 

		e.preventDefault()
	
});

$('#start').click(function(){

	if ($('#user').val() != '') 
	{
		$('.start').css('display', 'none');
		setTimeout(timer,1000);
	}
	else
	{
		$('#user').css('background', '#f30')
	}	

	var value = $('#user').val();


});

