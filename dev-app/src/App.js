import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './App.css';
import Aircraft from './components/Aircraft';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const app = props => {

    const classes = useStyles();

    const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age:26 }
      ],
      otherState : 'ASD'
    });

    const switchNameHandler = () => {
      // console.log('Was worked!');
      setPersonsState({ 
        persons: [
          { name: 'Maximilian', age: 28 },
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age:26}
        ]})
        otherState : personsState.otherState;
    }

    return (
      <div className="App">
       <img src={require("./images/fighter-jet.jpg")}  width="300" height="200"></img>
       <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
          <Aircraft name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Aircraft name={personsState.persons[1].name}  age={personsState.persons[1].age}>My Hobbies: Racing</Aircraft>
          <Aircraft name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
          <Aircraft name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
          <Aircraft name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
          <Aircraft name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
      </GridList>
    </div>
      </div>
    );
}

export default app;
