import './App.css';
import { Chessboard } from 'react-chessboard';
import Board from './Board';
import Homepage from '../../features/home/Home';
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <section className='container'>
      {/* <Board /> */}
      <Homepage />
    </section>
  );
}

export default observer(App);
