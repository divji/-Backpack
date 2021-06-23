const { src, dest } = require("gulp");
const { paths } = require("./helpers/PathHelper");
const changed = require("gulp-changed");
const fonter = require("gulp-fonter");
const toWoff2 = require("gulp-ttftowoff2");

let transform = () => {
	return src(paths.fonts.src)
		.pipe(changed(paths.fonts.dest, { extension: [".woff", ".eot"] }))
		.pipe(
			fonter({
				formats: ["eot", "woff"],
			})
		)
		.pipe(dest(paths.fonts.dest));
};

let transformToWoff2 = () => {
	return src(paths.fonts.src)
		.pipe(changed(paths.fonts.dest, { extension: ".woff2" }))
		.pipe(toWoff2())
		.pipe(dest(paths.fonts.dest));
};

let ttfRebase = () => {
	return src(paths.fonts.src)
		.pipe(changed(paths.fonts.dest, { extension: ".ttf" }))
		.pipe(dest(paths.fonts.dest));
};

exports.ttfRebase = ttfRebase;
exports.transform = transform;
exports.transformToWoff2 = transformToWoff2;
