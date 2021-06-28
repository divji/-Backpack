let { baseDir, deployDir } = require("./VariableHelper");

let paths = {
	scripts: {
		src: `${baseDir}/js/app.js`,
		srcPublic: `${baseDir}/js/*.js`,
		dest: `${baseDir}/js`,
		public: `${deployDir}/js`,
	},

	styles: {
		src: `${baseDir}/scss/main.*`,
		srcPublic: `${baseDir}/css/*.css`,
		dest: `${baseDir}/css`,
		public: `${deployDir}/css`,
	},

	images: {
		src: `${baseDir}/images/src/**/*`,
		srcPublic: `${baseDir}/images/dest/**/*`,
		dest: `${baseDir}/images/dest`,
		public: `${deployDir}/images/dest`,
	},

	fonts: {
		src: `${baseDir}/fonts/src/**/*`,
		srcPublic: `${baseDir}/fonts/dest/*`,
		dest: `${baseDir}/fonts/dest`,
		public: `${deployDir}/fonts/dest`,
	},

	cssOutputName: "app.min.css",
	jsOutputName: "app.min.js",
};

exports.paths = paths;
