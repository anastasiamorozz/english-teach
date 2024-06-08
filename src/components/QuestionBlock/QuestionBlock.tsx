import React, { useMemo, useState } from 'react';
import { IWord } from '../../models/IWord';
import { observer } from 'mobx-react-lite';
import './QuestionBlock.css';

const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const letters:string[]=['A', 'B', 'C', 'D'];

const QuestionBlock= ( word: IWord) =>{
    const array = useMemo(()=>{
        const fakeMeanings = Array.isArray(word.fakeMeaning) ? word.fakeMeaning : [];
        const allMeanings:string[] = [word.meaning, ...fakeMeanings];
    
        return shuffleArray(allMeanings.slice());
    }, [])

    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setClickedIndex(index);
    };

    return (
        <div>
            <div className='topicTitle'>Java Language</div>
        
            <ul className='question'>
                <b>{word.word}</b>
                {array.map((meaning, index) => (
                    <li key={index} onClick={() => handleClick(index)}><div  className={clickedIndex === index ? 'selected' : 'letter'}>{letters[index]}</div> {meaning}</li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionBlock;