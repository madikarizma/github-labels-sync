const githubLabelSync = require('github-label-sync');
const labels = require('./labels.json');
const repos = require('./repos.json');

repos.forEach((repo) => {
	githubLabelSync({
		accessToken: process.env.GITHUB_ACCESS_TOKEN,
		allowAddedLabels: false,
		labels,
		repo
	}).then((diff) => {
		console.log(diff);
	});
});