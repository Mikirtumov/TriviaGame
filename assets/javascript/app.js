
var question = ['We elect a U.S. Senator for how many years? ', 'How old do citizens have to be to vote for President?','When was the Declaration of Independence adopted?','Who was first man in space','What is the largest ocean basin on Earth?','Which Nation First Adopted Christianity?','What is the capital of Madagascar?','What is the largest planet in our solar system?','What team has the most Champions League titles?','What is the longest river in the world?','Who is the founder of windows operating system?','Which president is on the $10 bill?','Which of the following is not a reserved word in JavaScript?','What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?','Кто такой «молотоглав»?'];

var answer = ['four','six','seven','eight',  '15','16','17','18', 'July 4, 1667','July 4, 1787','July 4, 1767','July 4, 1776', 'Neil Armstrong','Gherman Titov','Yuri Gagarin','Alan Shepard', 'Atlantic Ocean','Indian Ocean','Arctic Ocean','Pacific Ocean', 'Georgia','Armenia','Russia','Greece', 'Reykjavík','Johannesburg','Canberra','Antananarivo', 'Earth','Mercury','Jupiter','Saturn', 'Real Madrid','Liverpool','Milan','Bayern München', 'Amazon River',' Nile River','Yangtze','Yellow River', 'Steve Jobs','Bill Gates','Mark Zuckerberg','Jeff Bezos', 'George Washington','Abraham Lincoln','Andrew Jackson','Alexander Hamilton', 'program','throws','interface','short', 'strip()','trim()','stripped()','trimmed()', 'Рыба','Птица','Змея','Насекомое'];

var key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

var level = 0;

function show(level) {

	$('.question').text( question[level] );

	$('label[for=answer1]').text( answer[level*4+0] );
	$('label[for=answer2]').text( answer[level*4+1] );

	$('label[for=answer3]').text( answer[level*4+2] );
	$('label[for=answer4]').text( answer[level*4+3] );

}
var resultConst = [];
show(level);
var tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','#FF0');

$('.btn').click(function(){

	$("#timer_inp").text(30);

	if( $('input[name=answer]:checked').val() == key[level] )
	{
		level++;
		
		show(level);
	}

	else{gameOwer()}

	$('input').prop('checked', false);

	$(tr.removeClass('result'));

	$(tr[tr.length - (level)]).css('color','#f0f');

	$(tr[tr.length - (level)]).addClass('result');
	
	$('label').css('color', '#555');

	if (level == 5 || level == 10 || level == 15) 
	{
		 resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	}
})

function gameOwer() {

	$('.end').css('display', 'block');

	if (tr.hasClass('resultConst')) 
	{
		var tdResult1 = $(resultConst[resultConst.length - 1]).children();

		var tdText1 = tdResult1[1].textContent;
	
		$('.showResult').text('You Won: ' + tdText1 + ' $');
	}
}
function timer(){
    
	 var objTimer=document.getElementById('timer_inp');
	
	 objTimer.innerHTML--;

	 if(objTimer.innerHTML==0)
		{
	 	setTimeout(function(){},1000);
	 	gameOwer();
		}
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

