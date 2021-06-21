"use strict";
const { series, parallel } = require("gulp");

const watch = require("./tasks/Watch");
const styles = require("./tasks/Style");
const scripts = require("./tasks/Script");
const html = require("./tasks/Html");
const assets = require("./tasks/Public");
const unusable = require("./tasks/Style");
const fonts = require("./tasks/Font");
const images = require("./tasks/Image");
const clean = require("./tasks/Clean");

exports.convertImages = series(
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

exports.convertFonts = parallel(
	fonts.transform,
	fonts.transformToWoff2,
	fonts.ttfRebase
);

exports.dev = series(
	series(
		this.convertFonts,
		this.convertImages,
		styles.styles,
		scripts.scripts
	),

	parallel(watch.sync, watch.startWatch)
);

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
