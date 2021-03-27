const useRondomString = (length: number = 16): string => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const strLength = length;
  return Array.from(Array(strLength)).map(() => str[Math.floor(Math.random() * str.length)]).join('');
}

export default useRondomString;