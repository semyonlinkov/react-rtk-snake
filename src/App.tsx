import './App.css';
import { useAppDispatch } from './main';
import { saveKey } from './store/gameSlice';
import Board from './components/Board';
import Status from './components/Status';

function App() {
    const dispatch = useAppDispatch();

    const keyDownHandler = (e) => {
        dispatch(saveKey(e.key));
    }

    return (
        <div className="app" onKeyDownCapture={keyDownHandler}>
            <Board />
            <Status />
        </div>
    );
}

export default App;
