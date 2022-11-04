const cardNumberSpaces = (input: string) => {
  const noSpaces = input.replace(/\s/gi, '');
  const modifiedInput = noSpaces.replace(/([0-9]{1,4})/gi, '$1 ');
  return modifiedInput;
};

export default cardNumberSpaces;
