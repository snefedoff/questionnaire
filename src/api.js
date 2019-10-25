class Api {
    constructor() {
        this.questions = [];
        this.getQuestions().then(data => this.questions = data.results);
        console.log( this.questions );
    }

    getQuestions(questionsAmount = 5, category = '', difficulty = '') {
        const baseUrl = 'https://opentdb.com/api.php?';
        let request = baseUrl + `amount=${questionsAmount}`;
        if (category.length > 0) request += `&category=${category}`;
        if (difficulty.length > 0) request += `&difficulty=${difficulty}`;
        //request += '&encode=url3986';

        console.log(request);

        return fetch(request);
    }
}

export default Api;