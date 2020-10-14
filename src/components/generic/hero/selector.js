export const selectHero = (content) => {
	let heroContent;

	if (content) {
		const sortedLiveryPosts = content.results.sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date));
		const hero = sortedLiveryPosts[0].data;

		heroContent = {
			heading: hero.name[0].text,
			description: hero.description[0].text,
			media: hero.images[0].media.url
		}
	}

	return heroContent;
}