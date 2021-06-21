const { watch } = require("gulp");
const styles = require("./Style.js");
const scripts = require("./Script.js");
const localServer = require("browser-sync").create();
const { paths } = require("./helpers/PathHelper");
const { baseDir } = require("./helpers/VariableHelper");

let sync = () => {
	localServer.init({
		notify: true,
		online: true,
		server: {
			baseDir: [`src`],
			routes: {
				"/node_modules": "node_modules",
			},
		},
	});

	watch(["src/*.html"]).on("change", reload);
};

let reload = () => {
	localServer.reload();
};

let startWatch = () => {
	watch(`${baseDir}/**/scss/**/*`, styles.styles);
	watch(
		[baseDir + "/**/*.js", "!" + paths.scripts.dest + "/*.min.js"],
		scripts.scripts
	);
};

exports.sync = sync;
exports.startWatch = startWatch;
