import { Parser } from '@alkhipce/editorjs-react';
import { IParser } from '@alkhipce/editorjs-react/dist/types/ParserData';
import { FC, useState } from 'react';
import { mockData } from '../../utils/mockData';
import { Form } from '../Form';
import './App.css';

const parseData = (data: string) => JSON.parse(data);

const App: FC = () => {
  const initialData = parseData(mockData);

  const [parsedData, setParsedData] = useState<IParser>(initialData);

  const handleSubmit = (data: string) => {
    setParsedData(parseData(data));
  };

  return (
    <div className="content">
      <header className="header">Header</header>

      <div className="centered_block">
        <Form handleSubmit={handleSubmit} />
      </div>

      <div className="centered_block">
        <Parser data={parsedData} />
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
