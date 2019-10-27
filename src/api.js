export function getQuestions(questionsAmount = 5, category = '', difficulty = '') {
    const baseUrl = 'https://opentdb.com/api.php?';
    let request = baseUrl + `amount=${questionsAmount}`;
    if (category.length > 0) request += `&category=${category}`;
    if (difficulty.length > 0) request += `&difficulty=${difficulty}`;
    request += '&encode=base64';

    return fetch(request);
}