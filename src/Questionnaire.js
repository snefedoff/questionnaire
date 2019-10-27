import React from 'react';
import * as Api from './api';
import { decode } from 'punycode';

export default class Questionnaire extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    componentDidMount(){
       Api.getQuestions(2)
        .then(response => response.json())
        .then( data => {
            data.results.forEach(item => {
                for (let prop in item) {
                    if (Object.prototype.toString.call(item[prop]) === '[object Array]'){
                        for (let i in item[prop]){
                            item[prop][i] = atob(item[prop][i]);
                        }
                    }
                    else{
                        item[prop] = atob(item[prop]);
                    }
                }
            });

            console.log(data.results);

            this.setState( 
                {
                    questions: data.results
                }
            )
        });
    }

    render (){
        return  <div>
                  {this.state.questions.map((item,id) => <div key={id}>{item.question}</div>)}
                </div>
    }
}