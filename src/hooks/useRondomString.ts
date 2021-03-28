const useRondomString = (length: number = 16): string => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(Array(length)).map(() => str[Math.floor(Math.random() * str.length)]).join('');
}

export default useRondomString;