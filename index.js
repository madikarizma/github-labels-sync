const githubLabelSync = require('github-label-sync');
const config = require('./config.json');

config.forEach((configElement) => {
	configElement.repos.forEach((repo) => {
		githubLabelSync({
			accessToken: process.env.GITHUB_ACCESS_TOKEN,
			allowAddedLabels: false,
			labels: configElement.labels,
			repo
		}).then((diff) => {
			console.log(diff);
		});
	});
});