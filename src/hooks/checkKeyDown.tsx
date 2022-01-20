const checkKeyDown = (key: string, inputValue: string, submitFunction: () => void) => {
  if(key === 'Enter' && inputValue) submitFunction();
}

export default checkKeyDown;