module.exports = {
	presets: [
		"@babel/preset-env",
		[
			"@babel/preset-react",
			{
				// Enable new transform in ver 7 of @babel/preset-react
				runtime: "automatic",
			},
		],
		"@babel/preset-typescript",
	],
};
