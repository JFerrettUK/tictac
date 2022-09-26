const newGameboard = () => {
    const testGame = () => console.log('hello!');
    return { testGame };
  };
  
  const game1 = newGameboard();
    
  jeff.testGame(); // calls the function and logs 'hello!'
  