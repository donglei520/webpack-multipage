const buildStaticFile = require('configDir/build-static-file.config')
const moduleExports = {
    DIRS: {
        BUILD_FILE:buildStaticFile,
    },
    PAGE_ROOT_PATH: '../../',
}

module.exports = moduleExports