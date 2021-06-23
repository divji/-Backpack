"use strict";
const { series, parallel } = require("gulp");
const { options } = require("./tasks/helpers/OptionHelper");

const watch = require("./tasks/Watch");
const styles = require("./tasks/Style");
const scripts = require("./tasks/Script");
const html = require("./tasks/Html");
const assets = require("./tasks/Public");
const unusable = require("./tasks/Style");
const fonts = require("./tasks/Font");
const images = require("./tasks/Image");
const clean = require("./tasks/Clean");

if (options.imageResize === true) {
	exports.resizeImages = series(
		images.images,
		images.resizeSm,
		images.resizeMd,
		images.resizeLg,
		images.resizeSm2x,
		images.resizeMd2x,
		images.resizeLg2x,
		images.resizeSm3x,
		images.resizeMd3x,
		images.resizeLg3x,
		images.cachemin
	);
} else {
	exports.convertImages = series(images.images, images.cachemin);
}

if (options.fontGeneration === true) {
	exports.convertFonts = series(
		fonts.transform,
		fonts.transformToWoff2,
		fonts.ttfRebase
	);
} else {
	exports.rebaseFonts = series(fonts.transform, fonts.ttfRebase);
}

if (options.deepCleanSrc === true) {
	exports.deepCleanSrc = series(clean.deepCleanSrc);
} else {
	exports.cleanSrc = clean.cleanSrc;
}

exports.dev = series(
	series(
		this.deepCleanSrc || this.cleanSrc,
		this.convertFonts || this.rebaseFonts,
		this.resizeImages || this.convertImages,
		styles.styles,
		scripts.scripts
	),

	parallel(watch.sync, watch.startWatch)
);

exports.clean = series(clean.deepCleanSrc);

exports.build = series(
	clean.cleanPublic,
	styles.styles,
	scripts.scripts,
	unusable.unusable,

	parallel(
		assets.publicCss,
		assets.publicJs,
		html.html,
		assets.publicFonts,
		assets.publicImages
	)
);
