var sequelize = require('../models/index'); 

exports.quizzesIndex = (req, res, next) => {
    sequelize.models.quiz.findAll()
    .then(quizzes => {
        let quizzesList = [];
        quizzes.forEach((quiz, id) => {
            
            quizzesList[id] = quiz;
        });
        return quizzesList;
    })
    .then(quizzesList => {
        res.render('quizzes', { quizzesList: quizzesList });
    });
}
