import './App.css';
import { Chessboard } from 'react-chessboard';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <Grid textAlign='center' className='centered' verticalAlign='middle'>
      <Grid.Row>
        <p>player 2</p>
      </Grid.Row>
      <Grid.Row>
        <Chessboard />
      </Grid.Row>
      <Grid.Row>
        <p>player 1</p>
      </Grid.Row>
    </Grid>
  );
}

export default App;
