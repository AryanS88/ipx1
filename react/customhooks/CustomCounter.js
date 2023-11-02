import React, { useState } from 'react';

const useDocumentTitle = title => {
  // This custom hook updates the document title using the provided title string
  document.title = title;
};

function CustomCounter() {
  const [count, setCount] = useState(0);

  // Call the custom hook to set the document title
  useDocumentTitle(`You clicked ${count} times`);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default CustomCounter;