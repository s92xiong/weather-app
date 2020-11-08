function getTimeByOffset(offset) {
  const date = new Date(new Date().getTime() + (offset * 1000));
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const string = `${month + 1} ${day} ${year} ${hours}:${minutes}:${seconds}`;
  return string;
}

export default getTimeByOffset;