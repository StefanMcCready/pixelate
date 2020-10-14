export const selectPortfolio = (content) => {
  let transformedLiveries = [];

  if (content) {
    const sortedLiveries = content.results.sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date));

    sortedLiveries.shift();

    sortedLiveries.forEach(item => {
      transformedLiveries.push({
        heading: item.data.name[0].text,
        media: item.data.images[0].media.url,
        uid: item.uid
      });
    })
  }

  return transformedLiveries;
}