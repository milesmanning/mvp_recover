const houses = [
  {name: 'Targaryen', description: 'Incest is common, and "madness" is in the veins.'},
  {name: 'Lannister', description: 'Richest House in all Seven Kingdoms. Blonde hair, green eyes. Ambitious and highly concerned with their legacy.'},
  {name: 'Stark', description: 'Grey eyes and dark brown hair, slim. Value honour highly.'},
  {name: 'Baratheon', description: 'Black hair, blue eyes, large, bull-headed and stubborn. Good warriors.'},
  {name: 'Greyjoy', description: 'Rulers of the  iron islands. Generally narcissistic, non-empathetic.'},
  {name: 'Bolton', description: 'Pale eyes like "dirty snow". Infamous for flaying their prisoners alive.'},
  {name: 'Tyrell', description: 'Curly brown hair, brown eyes. Ambitous.'},
  {name: 'Tarly', description: 'Strong warriors, often in the vanguard.'},
  {name: 'Martell', description: 'Tan, skinny, black hair, brown eyes. Often very loyal.'},
  {name: 'Mormont', description: 'Famous for their warrior women fighting against the wildlings who raid Bear Island often.'},
  {name: 'Tully', description: 'Auburn hair, blue eyes, high cheekbones. Highly concerned with duty to their family.'},
  {name: 'Clegane', description: 'Very large and brutal warriors, but loyal.'},
  {name: 'Frey', description: 'Weak chinned, weasel-ish looking. Cautious, stingy, generally unpleasant. Many descendants.'},
  {name: 'Arryn', description: 'Very prideful, seem to come off as a bit haughty.'}
];

const housePoints = {
  Targaryen: 0,
  Lannister: 0,
  Stark: 0,
  Baratheon: 0,
  GreyJoy: 0,
  Bolton: 0,
  Tyrell: 0,
  Tarly: 0,
  Martell: 0,
  Mormont: 0,
  Tully: 0,
  Clegane: 0,
  Frey: 0,
  Arryn: 0
};

const questions = [
  {
    question: 'Question 1',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 2',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 3',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 4',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 5',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 6',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 7',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 8',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 9',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
  {
    question: 'Question 10',
    answers: [
      'answer 1 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 2 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 3 -- qwekjlfnq  ejlwf wq qweojrv nqwojev',
      'answer 4 -- qwekjlfnq  ejlwf wq qweojrv nqwojev'
    ]
  },
];

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import color from '@material-ui/core/colors/lightGreen';

const styles = theme => ({
  root: {
    width: '75%',
    maxWidth: '75%',
    backgroundColor: '#2f121a',
    fontSize:'110%', 
    color: 'whitesmoke',
    opacity: '0.98',
    margin: 'auto',
    marginTop: '10em',
    marginBottom: '10em',
    paddingTop: '1em',
    textAlign: 'center',
    paddingBottom: '1em',
  },
});

class SelectedListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      questions: questions,
      currentQIndex: 0,
      currentQuestion: questions[0],
      answers: [],
      showingResults: false,
    };
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.determineHouse = this.determineHouse.bind(this);
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  handleNext = (e) => {
    e.preventDefault();
    console.log('NEXT CLICK');
    if (this.state.currentQIndex === 9) { 
      this.setState({showingResults: true, selectedIndex: null});
      console.log('RENDER RESULTS NOW');
    } else {
      this.setState({
        currentQuestion: questions[this.state.currentQIndex + 1],
        currentQIndex: (this.state.currentQIndex + 1),
        selectedIndex: null
      })
    }
  }

  handlePrev(e) {
    e.preventDefault();

    if (!!this.state.currentQIndex) { 
      this.setState({
        currentQuestion: questions[this.state.currentQIndex - 1],
        currentQIndex: (this.state.currentQIndex - 1),
        selectedIndex: null
      })
    };
  };

  determineHouse() {
    const randomIndex = Math.floor(Math.random() * houses.length);
    return houses[randomIndex];
  }

  render() {
    const { classes } = this.props;
    if(!this.state.showingResults) {
      return (
        <div style={{color:'antiquewhite'}} showing={(!this.state.showingResults).toString()} className={classes.root}>
          <h1>Judgement Day</h1>
          <List component="nav" className='question-list'>
            <ListItem>
              <h1>{ this.state.currentQuestion.question }</h1>
            </ListItem>
            <Divider />
            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={event => this.handleListItemClick(event, 0)}
            >
              <p>{this.state.currentQuestion.answers[0]}</p>
            </ListItem>
            <Divider />
            <ListItem
              button
              selected={this.state.selectedIndex === 1}
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <p>{this.state.currentQuestion.answers[1]}</p>
            </ListItem>
            <Divider />
            <ListItem
              button
              selected={this.state.selectedIndex === 2}
              onClick={event => this.handleListItemClick(event, 2)}
            >
            <p>{this.state.currentQuestion.answers[2]}</p>
            </ListItem>
            <Divider />
            <ListItem
              button
              selected={this.state.selectedIndex === 3}
              onClick={event => this.handleListItemClick(event, 3)}
            >
            <p>{this.state.currentQuestion.answers[3]}</p>
            </ListItem>
            <Divider />
          </List>
          <div>
            <button
              style={{
                border:'none',
                backgroundColor: 'antiquewhite',
                outline: 'none',
                width: '15em',
                height: '2em',
                marginRight: '0.5em'
              }}
              className='prev'
              id='prev-button'
              onClick={(e) => this.handlePrev(e)}
            >
            PREVIOUS
            </button>
            <button
              style={{
                border:'none',
                backgroundColor: 'antiquewhite',
                outline: 'none',
                height: '2em',
                width: '15em',
                marginLeft: '0.5em'
              }}
              className='next'
              id='next-button'
              onClick={(e) => this.handleNext(e)}
            >
            NEXT    
            </button>
          </div>
          <br></br>
          <p> {this.state.currentQIndex + 1}/10</p>
        </div>
      );
    } else {
      let house = this.determineHouse();
      return (
        <div 
          style={{ 
            fontSize:'160%', 
            width: '75%',
            maxWidth: '75%',
            backgroundColor: '#2f121a',
            color: 'whitesmoke',
            opacity: '0.9',
            margin: 'auto',
            marginTop: '10em',
            paddingTop: '1em',
            textAlign: 'center',
            paddingBottom: '1em',
          }} 
          className='results' id='results-div'>
          <h1>
            Your House: {house.name}
          </h1>
          <br></br>
          <p>{house.description}</p>
        </div>
      )
    }
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);