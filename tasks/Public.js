const { src, dest } = require("gulp");
const { paths } = require("./helpers/PathHelper");

let publicCss = () => {
	return src(paths.styles.srcPublic).pipe(dest(paths.styles.public));
};

let publicJs = () => {
	return src(paths.scripts.srcPublic).pipe(dest(paths.scripts.public));
};

let publicFonts = () => {
	return src(paths.fonts.srcPublic).pipe(dest(paths.fonts.public));
};

let publicImages = () => {
	return src(paths.images.srcPublic).pipe(dest(paths.images.public));
};

exports.publicCss = publicCss;
exports.publicJs = publicJs;
exports.publicFonts = publicFonts;
exports.publicImages = publicImages;
