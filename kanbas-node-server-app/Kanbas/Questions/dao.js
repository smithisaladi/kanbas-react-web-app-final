import model from "./model.js";
export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);
}
export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
}
export function createQuestion(quizId, question) {
    if (question._id) {
        delete question._id;
    }
    return model.create({ quiz: quizId, ...question });
}

export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });
}