import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../main";
import { changeStatus, checkApple, checkGameOver, moveSnake, setDirection } from "../store/gameSlice";

const Status = () => {
    const status = useAppSelector((store) => store.game.status);
    const dispatch = useAppDispatch();

    let timer = useRef(null);
    const update = () => {
        dispatch(moveSnake());
        dispatch(setDirection());
        dispatch(checkApple());
        dispatch(checkGameOver());
    };
    const startTimer = () => timer.current = setInterval(() => update(), 200);
    const stopTimer = () => clearInterval(timer.current);

    const clickHandler = () => {
        if (status === 'Restart') {
            window.location.reload();
            return;
        };
        if (status !== 'Pause') startTimer();
        else stopTimer();
        dispatch(changeStatus());
    };

    return (
        <div className="status">
            <button className="start-button" onClick={clickHandler}>
                {status}
            </button>
        </div>
    )
}

export default Status