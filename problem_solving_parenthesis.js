const getResult = (inputA, inputB) => {
  let result = "",
    balance = 0,
    insideParens = false;

  for (let i = 0; i < inputA.length; i++) {
    if (inputA[i] === "(") {
      balance++;
      result += inputA[i];
      insideParens = true;
    } else if (inputA[i] === ")") {
      balance--;
      result += inputA[i];
      if (balance === 0) {
        insideParens = false;
      }
    } else if (!insideParens && inputA.slice(i, i + 6) === "MARKER") {
      result += `MARKER ${inputB}`;
      i += 5;
    } else {
      result += inputA[i];
    }
  }

  return result;
};

const inputA = `This is an example string with MARKER (parenthesis) (MARKER) (and a MARKER - parens can nest any number of times
  (and have many MARKERs inside them, but the string can be expected to have matched parenthesis) and
  inside parens MARKERs can be anywhere (and any number of times) MARKER ()) MARKER (), but there is no more than a single
  MARKER outside of parenthesis (MARKER can be in any position in the string) MARKER`;

const inputB = `OUTSIDE PARENS IS HERE`;

const Output = `This is an example string with MARKER OUTSIDE PARENS IS HERE (parenthesis) (MARKER) (and a MARKER - parens can nest any number of times
  (and have many MARKERs inside them, but the string can be expected to have matched parenthesis) and
  inside parens MARKERs can be anywhere (and any number of times) MARKER ()) MARKER OUTSIDE PARENS IS HERE (), but there is no more than a single
  MARKER OUTSIDE PARENS IS HERE outside of parenthesis (MARKER can be in any position in the string) MARKER OUTSIDE PARENS IS HERE`;

const output = getResult(inputA, inputB);
console.log(output);
