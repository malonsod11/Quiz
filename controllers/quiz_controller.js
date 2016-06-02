var models = require('../models');

// GET /QUESTION
exports.question=function(req, res,next)  {
	models
	.quizzes.findOne() //Busca la primera pregunta
	.then(function(quiz){
		if (quiz){
	var answer = req.query.answer || '';
res.render('quizzes/question',{question: 'Capital de Italia', answer: answer});
}
else{
	throw new Error('No hay preguntas en la BBDD.');
}
}(.catch(function(error) { next(error);});

};

// GET /check
exports.check=function(req,res,next){
	models
	.Quiz
	.findOne() //Busca la primera pregunta
	.then(function(quiz){
		if(quiz){
	var answer = req.query.answer || "";
	var result=req.query.answer === 'Roma' ? 'Correcta' : 'Incorrecta';
	res.render('quizzes/result', {result: result,answer: answer});
	}
	else{
		throw new Error('No hay preguntas en la BBDD.');
	}
}).catch(function(error) {next(error); });
};