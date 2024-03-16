import { useAppSelector } from '../main';

const Square = ({ x, y, index }) => {
    const snake = useAppSelector((store) => store.game.snake);
    const apple = useAppSelector((store) => store.game.apple);

    let buttonStyle = '';

    for (let s of snake) {
        if (s.x === x && s.y === y) buttonStyle = 'snake';
    }

    if (x === apple.x && y === apple.y) buttonStyle = 'apple';
    return (
        <span className="square" key={index}>
            <button className={buttonStyle}></button>
        </span>
    );
};

export default Square;
