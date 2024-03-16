import Square from './Square';

const Board = () => {
    let squares = [];

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            squares.push({ x, y, index: x.toString() + y.toString() });
        }
    }

    return (
        <div className="board">
            {squares.map((square) => {
                return <Square key={square.index} {...square} />;
            })}
        </div>
    );
};

export default Board;
