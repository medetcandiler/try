export const formatDate = (dateString: string) => {
  const timestamp = new Date(dateString).getTime();
  return new Intl.DateTimeFormat("tr-TR").format(timestamp);
};
