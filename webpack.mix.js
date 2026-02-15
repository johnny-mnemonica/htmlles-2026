const dotenv = require('dotenv').config();

/**
 * Imports
 */

const mix = require("laravel-mix");

/**
 * Variables
 */
mix.options({
    processCssUrls: false,
    postCss: [
        require("postcss-easy-import"),
        require("tailwindcss"),
        require("postcss-preset-env"),
        require('autoprefixer'),
        require('postcss-100vh-fix'),
    ]
})

mix.setPublicPath(`${process.env.SITE_DIST_PATH}/static`);
/**
 * Javascript
 */
mix.js("assets/js/site.js", `${process.env.SITE_DIST_PATH}/static/js`);

/**
 * CSS
 */

mix.postCss("assets/css/main.css", `${process.env.SITE_DIST_PATH}/static/css`)
    .postCss("assets/css/tailwind.css", `${process.env.SITE_DIST_PATH}/static/css`);

mix.version();

/**
 * Watch
 */
mix.browserSync({
    proxy: process.env.SITE_LOCAL_URL,
    files: [
        `${process.env.SITE_DIST_PATH}/**/*`
    ],
    whitelist: ["/wp-admin/admin-ajax.php"],
    ignorePaths: "wp-admin"
});