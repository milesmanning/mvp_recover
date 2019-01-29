const houses = [
  {name: 'Targaryen', description: 'Incest is common, and "madness" is in the veins.', img: "https://cdn.shopify.com/s/files/1/1158/9490/products/C000011907-PAR-ZOOM_0f1c65fc-9c9d-4692-a56a-3c0fbe5657c5_800x.jpg?v=1524091800"},
  {name: 'Lannister', description: 'Richest House in all Seven Kingdoms. Blonde hair, green eyes. Ambitious and highly concerned with their legacy.', img: "http://cdn.shopify.com/s/files/1/1158/9490/products/C000011905-PAR-ZOOM_7ca5d2c3-3e86-4469-939a-f5149d2dd623_800x.jpg?v=1524091790"},
  {name: 'Stark', description: 'Grey eyes and dark brown hair, slim. Value honour highly.', img: "http://cdn.shopify.com/s/files/1/1158/9490/products/C000011906-PAR-ZOOM_4dbfa851-c671-4ea2-9737-d28b696726a9_800x.jpg?v=1524091796"},
  {name: 'Baratheon', description: 'Black hair, blue eyes, large, bull-headed and stubborn. Good warriors.', img: "http://www.marketingmagafrica.com/wp-content/uploads/2017/06/House-beratheon-emblem.png"},
  {name: 'Greyjoy', description: 'Rulers of the  iron islands. Generally narcissistic, non-empathetic.', img: "http://orig12.deviantart.net/82a2/f/2014/177/5/8/dsquid_by_kravinoff-d7o1blt.png"},
  {name: 'Bolton', description: 'Pale eyes like "dirty snow". Infamous for flaying their prisoners alive.', img: "http://i.imgur.com/1A4F0AG.png"},
  {name: 'Tyrell', description: 'Curly brown hair, brown eyes. Ambitous.', img: "https://awoiaf.westeros.org/thumb.php?f=House_Tyrell.PNG&width=250"},
  {name: 'Tarly', description: 'Strong warriors, often in the vanguard.', img:"https://i.pinimg.com/736x/5f/92/80/5f928015ca189277c92de209431f3977--winter-is-coming.jpg"},
  {name: 'Martell', description: 'Tan, skinny, black hair, brown eyes. Often very loyal.', img: "http://www.theironthrone.it/it/images/stories/araldica/Martell-of-Sunspear.gif"},
  {name: 'Mormont', description: 'Famous for their warrior women fighting against the wildlings who raid Bear Island often.', img: "https://awoiaf.westeros.org/thumb.php?f=House_Mormont.PNG&width=250"},
  {name: 'Tully', description: 'Auburn hair, blue eyes, high cheekbones. Highly concerned with duty to their family.', img: "http://i44.tinypic.com/2meo902.png"},
  {name: 'Clegane', description: 'Very large and brutal warriors, but loyal.', img: "https://images-na.ssl-images-amazon.com/images/I/91z-Gwl9Q2L._SX425_.jpg"},
  {name: 'Frey', description: 'Weak chinned, weasel-ish looking. Cautious, stingy, generally unpleasant. Many descendants.', img: "https://pm1.narvii.com/6781/a10f39c15f0d73c81922f15fb039b74996c086a6v2_hq.jpg"},
  {name: 'Arryn', description: 'Very prideful, seem to come off as a bit haughty.', img: "https://vignette.wikia.nocookie.net/gotmp/images/6/6c/Arryn_Sigil.PNG/revision/latest?cb=20150523150345"}
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
    question: 'Which season would you eliminate?',
    answers: [
      'Spring',
      'Summer',
      'Autumn',
      'Winter'
    ]
  },
  {
    question: 'Who shall inherit the earth?',
    answers: [
      'The Meek',
      'The Warriors',
      'The Diplomats',
      'The White Walkers'
    ]
  },
  {
    question: 'You catch your niece stealing a piece of gum at the store. What do you do?',
    answers: [
      'PAT HER ON THE BACK — WHAT A QUICK LEARNER!',
      'TAKE THE GUM AND QUIETLY RETURN IT.',
      'MAKE HER APOLOGIZE TO THE STORE MANAGER.',
      'MAKE HER APOLOGIZE TO THE STORE MANAGER.',
      'SHRUG YOUR SHOULDERS. IT\'S JUST GUM.'
    ]
  },
  {
    question: 'Which fairy tale archetype do you most empathize with?',
    answers: [
      'THE NOBLE HERO',
      'THE EVIL QUEEN',
      'THE TALKING ANIMAL',
      'THE WIZARD'
    ]
  },
  {
    question: 'What should be a king\'s top priority?',
    answers: [
      'HIS PEOPLE',
      'HIS FAMILY',
      'HIS ENEMIES',
      'HIS ARMY'
    ]
  },
  {
    question: 'What do you value most?',
    answers: [
      'KNOWLEDGE',
      'FREEDOM',
      'HONOR',
      'LOVE'
    ]
  },
  {
    question: 'Your parents want you to take over the family business. Would you do it?',
    answers: [
      'SURE, IF IT\'S WHAT I\'M INTERESTED IN ALREADY',
      'ABSOLUTELY. IT WOULD BE MY DUTY',
      'MAYBE. I\'D HAVE TO SEE IF IT WAS IN MY BEST INTERESTS',
      'UM, NO. I DO WHAT I WANT'
    ]
  },
  {
    question: 'Never use two words when you can...',
    answers: [
      'SAY NOTHING',
      'RESORT TO VIOLENCE INSTEAD',
      'LET SOMEONE ELSE SAY THEM',
      'USE A WHOLE BUNCH OF WORDS.'
    ]
  },
  {
    question: 'People say, "Forgive and forget." What do you say?',
    answers: [
      'THAT\'S ALSO WHAT I SAY',
      'FORGIVE, BUT NEVER FORGET',
      'NEVER FORGIVE, NEVER FORGET',
      'PRETEND TO FORGIVE, AND THEN ANNIHILATE.'
    ]
  },
  {
    question: 'Who\'s your favorite family member?',
    answers: [
      'MY PARENT',
      'MY SIBLING',
      'MY SPOUSE',
      'THIS IS MEAN — I DON\'T HAVE A FAVORITE.'
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
          <h1>Welcome to Westeros</h1>
          <br></br>
          <h3>May the Seven have mercy on your soul.</h3>
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
          <div className='sigil-img' style={{opacity:'1.0'}}>
            <img src={house.img} width="250em"></img>
          </div>
        </div>
      )
    }
  }
}
// https://banner2.kisspng.com/20180206/cpe/kisspng-daenerys-targaryen-house-targaryen-robert-baratheo-house-targaryen-png-image-5a7a218ac7ab05.9534259015179534188179.jpg

https://banner2.kisspng.com/20180421/yte/kisspng-daenerys-targaryen-house-targaryen-sigil-decal-sti-showcase-vector-5adb6c4c8e4e64.4123997615243295485829.jpg

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);