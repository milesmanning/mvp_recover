import React, { Component, useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function QuestionForm(props) {
  // const [state, dispatch] = useReducer(qReducer, []);
  console.log('PROPS:  ', props)
  const allQuestions = props.questions;
  const currentIdx = props.currentIdx;
  const currentQuestion = props.currentQuestion;
  const currentAnswers = currentQuestion.answers;
  // let q = questions[idx];
  // console.log(questions[0]);
  // let first = questions[0];
  console.log('{allQuestions}', allQuestions);
  console.log('currentQuestion: ', currentQuestion);

  // const [questions, setQuestion] = useState(currentQuestion);

  return (
    <div className='form' id='form-div'>
      <section id='question'>
          {currentQuestion.question}
        </section>
        <section id='answer-one'>
          {currentAnswers[0]}
        </section>
        <section id='answer-two'>
        {currentAnswers[1]}
        </section>
        <section id='answer-three'>
        {currentAnswers[2]}
        </section>
        <section id='answer-four'>
        {currentAnswers[3]}
        </section>
    </div>
  );
};