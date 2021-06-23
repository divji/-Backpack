const { src, dest } = require("gulp");
const { paths } = require("./helpers/PathHelper");
const changed = require("gulp-changed");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const imageresize = require("gulp-image-resize");
const rename = require("gulp-rename");

let widthSm = 270;
let widthMd = 400;
let widthLg = 600;

let images = () => {
	return src(paths.images.src)
		.pipe(changed(paths.images.dest))
		.pipe(dest(paths.images.dest));
};

let resizeSm = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthSm,
				height: 220,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-sm`;
			})
		)
		.pipe(dest(`${paths.images.dest}/small`));
};

let resizeMd = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthMd,
				height: 350,
				crop: false,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-md`;
			})
		)
		.pipe(dest(`${paths.images.dest}/medium`));
};

let resizeLg = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthLg,
				height: 400,
				crop: false,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-lg`;
			})
		)
		.pipe(dest(`${paths.images.dest}/large`));
};

let resizeSm2x = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthSm + widthSm,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-sm@2x`;
			})
		)
		.pipe(dest(`${paths.images.dest}/small/@2x`));
};

let resizeMd2x = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthMd + widthMd,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-md@2x`;
			})
		)
		.pipe(dest(`${paths.images.dest}/medium/@2x`));
};

let resizeLg2x = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthLg + widthLg,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-lg@2x`;
			})
		)
		.pipe(dest(`${paths.images.dest}/large/@2x`));
};

let resizeSm3x = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthSm + widthSm + widthSm,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-sm@3x`;
			})
		)
		.pipe(dest(`${paths.images.dest}/small/@3x`));
};

let resizeMd3x = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthMd + widthMd + widthMd,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-sm@3x`;
			})
		)
		.pipe(dest(`${paths.images.dest}/medium/@3x`));
};

let resizeLg3x = () => {
	return src(`${paths.images.dest}/*.jpg`)
		.pipe(
			imageresize({
				width: widthLg + widthLg + widthLg,
			})
		)
		.pipe(
			rename((path) => {
				`${path.basename}-lg@3x`;
			})
		)
		.pipe(dest(`${paths.images.dest}/large/@3x`));
};

let cachemin = () => {
	return src(`${paths.images.dest}/**/*.{jpg,webp,png}`)
		.pipe(cache(imagemin()))
		.pipe(dest(paths.images.dest));
};

exports.images = images;
exports.cachemin = cachemin;

exports.resizeSm = resizeSm;
exports.resizeMd = resizeMd;
exports.resizeLg = resizeLg;
exports.resizeSm2x = resizeSm2x;
exports.resizeMd2x = resizeMd2x;
exports.resizeLg2x = resizeLg2x;
exports.resizeSm3x = resizeSm3x;
exports.resizeMd3x = resizeMd3x;
exports.resizeLg3x = resizeLg3x;
