export const logger = (method, url, responseStatus) => {
  const timestamp = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
  const requestId = Math.random().toString(36).substring(7);
  console.log(`${timestamp}\t${requestId}\t${method}\t${responseStatus}\t${url}`);
}