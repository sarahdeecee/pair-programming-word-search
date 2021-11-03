const wordSearch = (letters, word) => {
  // helper function to transpose letters
  const transpose = function(matrix) {
    const newMatrix = [];
    for (let j = 0; j < matrix[0].length; j++) {
      const newLine = [];
      for (let i = 0; i < matrix.length; i++) {
        newLine.push(matrix[i][j]);
      }
      newMatrix.push(newLine);
    }
    return newMatrix;
  };
    
  // check to find the word horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
    
  // check to find the word vertically
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false; // if not found, return false
};

module.exports = wordSearch;