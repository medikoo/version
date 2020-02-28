"use strict";

const ensureString = require("type/string/ensure")
    , path         = require("path")
    , isDirectory  = require("fs2/is-directory");

module.exports = async repoPath => {
	repoPath = path.resolve(ensureString(repoPath));
	if (!(await isDirectory(path.resolve(repoPath, ".git")))) {
		throw new Error("Expected"); // Replace with UserError
	}

	// Resolve current version from package.json
	// Resolve tag for current version
	// if no tag for current version
	//   crash
	// Resolve all commmits to latest version tag
	// If latest version tag != current version
	//   if latest version > current version
	//     crash
	//   else
	//     # Side release branch case
	//     Log warning
	// Parse commmit data
	//   For each commit ensure to resolve:
	//     - # PR
	//     - Author full Name
	//     - Author GitHub username
	// Resolve new version
	// Resolve release notes
	// Bump version
	// Write Changelog
};
