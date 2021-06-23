const del = require("del");

let cleanPublic = () => {
	return del(["public"]);
};

let cleanSrc = () => {
	return del(["src/css", "src/js/app.min.js.map", "src/js/app.min.js"]);
};

let deepCleanSrc = () => {
	return del([
		"src/css",
		"src/**/dest",
		"src/images/dest",
		"src/js/app.min.js.map",
		"src/js/app.min.js",
	]);
};

exports.cleanPublic = cleanPublic;
exports.cleanSrc = cleanSrc;
exports.deepCleanSrc = deepCleanSrc;
