import { FC, useMemo, useState } from 'react';

import { Parser } from '@alkhipce/editorjs-react';
import { IParser } from '@alkhipce/editorjs-react/dist/types/ParserData';

import { mockData } from '../../utils/mockData';

import { Form } from '../Form';
import logo from '../../assets/editorjs_logo.svg';

const HEADER_LINKS = [
  {
    name: 'Editor JS',
    link: 'https://editorjs.io/'
  },
  {
    name: 'NPM',
    link: 'https://www.npmjs.com/package/@alkhipce/editorjs-react'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/etozhealkhipce/editorjs-react'
  }
];

const App: FC = () => {
  const [isError, setError] = useState(false);

  const parseData = (data: string) => {
    try {
      setError(false);
      return JSON.parse(data);
    } catch (err) {
      setError(true);
      return {
        time: 0,
        version: '',
        blocks: []
      };
    }
  };

  const initialData = useMemo(() => parseData(mockData), []);
  const [parsedData, setParsedData] = useState<IParser>(initialData);

  const handleSubmit = (data: string) => {
    setParsedData(parseData(data));
  };

  return (
    <div className="page">
      <header className="header">
        <div className="header-container">
          <div className="header__logo-container">
            <img src={logo} alt="logo" className="header__logo" />
            <p className="header__title">@alkhipce/editorjs-react</p>
          </div>
          <ul className="header__list">
            {HEADER_LINKS.map((hl) => (
              <li className="header__list-item" key={hl.name}>
                <a href={hl.link} target="_blank" rel="noreferrer">
                  {hl.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="content">
        <div className="centered_block">
          <Form handleSubmit={handleSubmit} />
        </div>

        <div className="centered_block">
          <Parser data={parsedData} />
          {isError && (
            <span className="error_message">
              Invalid JSON, please try again.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
