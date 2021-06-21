"use strict";
const { series, parallel } = require("gulp");

const watch = require("./tasks/Watch");
const styles = require("./tasks/Style");
const scripts = require("./tasks/Script");
const html = require("./tasks/Html");
const assets = require("./tasks/Public");
const unusable = require("./tasks/Style");
// const clean = require('./tasks/Clean');

exports.dev = series(
	series(
		// this.convertFonts,
		// this.convertImages,
		styles.styles,
		scripts.scripts
	),

	parallel(watch.sync, watch.startWatch)
);

exports.build = series(
	styles.styles,
	scripts.scripts,
	unusable.unusable,

	parallel(assets.publicCss, assets.publicJs, html.html)
);

// exports.build = series(
// 	series(
// 		clean.cleanPublic,
// 		unusable.unusable,
// 		assets.publicFonts,
// 		assets.publicImages
// 	),
// 	parallel(assets.publicCss, assets.publicJs, html.html)
// );
