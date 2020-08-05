import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

const Document = () => {

  // const [markdown, setMarkdown] = useState(''); 
  
  // const updateMarkdown = ({ target }) => {
  //   setMarkdown({ markdown: target.value });
  // };

  return (
    <div className={styles.Document}>
      <Editor />
      <Preview  />
    </div>
  );
};

// Document.propTypes = {

// };

export default Document;
