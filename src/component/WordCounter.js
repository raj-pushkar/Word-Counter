import React from 'react';
import './WordCounter.css'; // Import the CSS file

const WordCounter = () => {
  const [wordCount, setWordCount] = React.useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    const words = text.split(' ');
    setWordCount(words.length);
  };

  return (
    <div>
      <textarea
        rows={10}
        placeholder="Enter your text here..."
        onChange={handleInputChange}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
