import React, { FC, useState } from 'react';
import './index.css';

import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import { mockData } from '../../utils/mockData';

type TProps = {
  handleSubmit: (v: string) => void;
};

export const Form: FC<TProps> = ({ handleSubmit }) => {
  const [code, setCode] = useState(mockData);

  const onSubit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(code);
  };

  return (
    <form onSubmit={(e) => onSubit(e)} className="form">
      <h1 className="form__title">Please paste your JSON:</h1>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js, 'js')}
        className="form__editor"
        padding={10}
      />
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
};
