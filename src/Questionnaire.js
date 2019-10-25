import React from 'react';
import Api from './api';

class Questionnaire extends React.Component {

    constructor (props) {
        this.state = {
            questions: []
        }

        const api = new Api();
        this.state.questions = api.questions;
    }

    render (){
        return <div>
            Questionnaire
        </div>
    }
}

export default Questionnaire;