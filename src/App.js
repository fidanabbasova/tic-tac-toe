import './styles/style.scss';
import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Details from './components/Details';
import Square from './components/Square';
import ResetButton from './components/ResetButton';
import Level from './components/Level';
import Result from './components/Result';
import firstPlayerSound from './audio/mixkit-quick-positive-video-game-notification-interface-265.wav';
import secondPlayerSound from './audio/mixkit-explainer-video-game-alert-sweep-236.wav';
import timerSound from './audio/clock-ticking-5.mp3';

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const results = [
  'Player 1 won.',
  'Player 2 won.',
  'No one won.'
];

let timerSoundAudio = new Audio(timerSound);
timerSoundAudio.loop = true;

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState([0, 0]);
  const [turn, setTurn] = useState(true);
  const [marks, setMarks] = useState([...Array(9)]);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [resultIndex, setResultIndex] = useState(-1);

  const putMarkSoundPlay = () => {
    let audio = new Audio(turn ? firstPlayerSound : secondPlayerSound);
    audio.play();
  }

  const putMark = (index) => {
    let prevMarks = marks;
    prevMarks[index] = turn;
    setMarks([...prevMarks]);
    putMarkSoundPlay();
  }

  const checkWon = () => {
    winningConditions.map((condition) => {
      if (marks[condition[0]] === marks[condition[1]] &&
        marks[condition[1]] === marks[condition[2]] &&
        marks[condition[0]] !== undefined) {
        if (marks[condition[0]] === true) {
          setScore([score[0] + 1, score[1]])
          if (resultIndex < 0) {
            setResultIndex(0);
          }
        }
        else {
          setScore([score[0], score[1] + 1])
          if (resultIndex < 0) {
            setResultIndex(1);
          }
        }
      }
      else {
        if (marks.filter(item => item !== undefined).length === 9) {
          if (resultIndex < 0) {
            setResultIndex(2);
          }
        }
        else {
          setTurn(!turn);
        }
      }
    })
  }

  const resetGrid = () => {
    setTime(0);
    setTimerOn(true);
    setTurn(true);
    setMarks([...Array(9)]);
  }

  const newLevel = () => {
    setResultIndex(-1);
    setLevel(level + 1);
    resetGrid();
  }

  useEffect(() => {
    if (resultIndex >= 0) {
      setTimerOn(false);
    }
  }, [resultIndex]);

  useEffect(() => {
    if (marks.filter(item => item === undefined).length !== 9 && resultIndex < 0) {
      checkWon();
    }
  }, [marks]);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      timerSoundAudio.play();
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    else {
      clearInterval(interval);
      timerSoundAudio.pause();
    }
    return () => {
      clearInterval(interval);
      timerSoundAudio.pause();
    };
  }, [timerOn]);

  useEffect(() => {
    setTimerOn(true);
  }, []);

  return (
    <>
      <Result open={resultIndex >= 0} handleClose={() => { newLevel() }} result={results[resultIndex]} />
      <div className='container'>
        <ResetButton reset={() => { resetGrid() }} />
        <Level level={level} />
        <Timer time={time} />
        <Details score={score} turn={turn} />
        <div className='grid'>
          {
            marks.map((item, index) => (
              <Square key={index} index={index} putMark={putMark} mark={marks[index]} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
