const del = require("del");

let cleanPublic = () => {
	return del(["public"]);
};

let cleanSrc = () => {
	return del([
		"src/css",
		"src/**/dest",
		"src/js/app.min.js.map",
		"src/js/app.min.js",
	]);
};

exports.cleanPublic = cleanPublic;
exports.cleanSrc = cleanSrc;
