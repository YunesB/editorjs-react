import React, { FC, useState } from 'react';
import { mockData } from '../../utils/mockData';
import './index.css';

type TProps = {
  handleSubmit: (v: string) => void;
};

const INPUT_INDEX = 0;

export const Form: FC<TProps> = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  console.log(inputValue);

  const onSubit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    handleSubmit(e.target[INPUT_INDEX].value);
  };

  return (
    <form onSubmit={(e) => onSubit(e)} className="form">
      <textarea
        name="input"
        className="form__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
};
