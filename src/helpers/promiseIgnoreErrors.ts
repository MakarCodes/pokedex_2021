const returnArrayWithoutEmptyElements = <T>(arr: T[]) => {
  const arrayWithoutEmptyElements: T[] = [];
  for (let el of arr) {
    el && arrayWithoutEmptyElements.push(el);
  }
  return arrayWithoutEmptyElements;
};

//forEach loop -> cannot figure out why <empty items> occures in resolvedArray

const promiseIgnoreErrors = <T>(arrayOfPromise: Array<T>) => {
  return new Promise((resolve, _) => {
    let resolvedArray: Array<T> = [];
    let resolvedCounter: number = 0;
    arrayOfPromise.forEach((singlePromise, index) => {
      if (singlePromise instanceof Promise) {
        singlePromise
          .then((data: T) => {
            resolvedArray[index] = data;
            resolvedCounter++;
            if (arrayOfPromise.length === resolvedCounter)
              resolve(returnArrayWithoutEmptyElements(resolvedArray));
          })
          .catch(() => {
            resolvedCounter++;
            if (arrayOfPromise.length === resolvedCounter)
              resolve(returnArrayWithoutEmptyElements(resolvedArray));
          });
      } else {
        resolvedArray[index] = singlePromise;
        resolvedCounter++;
        if (arrayOfPromise.length === resolvedCounter)
          resolve(returnArrayWithoutEmptyElements(resolvedArray));
      }
    });
  });
};

export default promiseIgnoreErrors;
