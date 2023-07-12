import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  let greetingContent;

  if (typeof greeting === 'object') {
    greetingContent = greeting?.greeting;
  } else {
    greetingContent = greeting;
  }

  return (
    <>
      <p>Random Greeting: {greetingContent}</p>
    </>
  );
};

export default Greeting;
