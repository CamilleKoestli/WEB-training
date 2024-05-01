// A class with static methods to train array manipulation in JS
export class ArrayUtil {
  //TODO: some methods take some arguments, look at the tests
  static getEmptyArray() {
    return new Array();
  }

  static hugeArray(size, value) {
    return new Array(size).fill(value);
  }

  static pushAndRemove(list, times, value, removeTimes) {
    for (let i = 0; i < times; i++) {
      list.push(value);
    }
    for (let i = 0; i < removeTimes; i++) {
      list.shift();
    }
    return list;
  }

  static getLastAlphabeticalOrder(list) {
    return list.sort()[list.length - 1];
  }

  static removeInValueRange(list, firstValue, secondValue) {
    const firstIndex = list.indexOf(firstValue);
    const secondIndex = list.indexOf(secondValue);
    for (let i = 0; i < list.length; i++){
      if (firstIndex === -1 || secondIndex === -1) 
        return list;
      list.splice(firstIndex, secondIndex - firstIndex + 1);
      return list;
    }  
  }

  static extractRange(list, firstValue, secondValue) {
    return list.splice(list.indexOf(firstValue), list.lastIndexOf(secondValue) - list.indexOf(firstValue) + 1);
  }

  static upperCaseAndReverse(list) {
    for (let i = 0; i < list.length; i++){
      list[i] = list[i].toUpperCase();
    }
    return list.reverse();
  }

  static filterByInclude(list, value) {
    return list.filter((element) => element.includes(value));
  }

  static filterHello(list) {
    const regex = /hi{1,3}o?/
    return list.filter((word) => regex.test(word));
  }

  static filterHello2(list) {
    const regex = /^hi{1,3}o?$/;
    return list.filter((word) => regex.test(word));
  }

  static filterCodes() {
    // TODO
  }

  static parseExoWIP() {
    // TODO
  }

  static countAnyWords() {
    // TODO
  }

  static countLettersAndIndexesProduct() {
    // TODO
  }

  static getThexMax() {
    // TODO
  }

  static getTheSumOfMax() {
    // TODO
  }
}
