/* global THEME */

const React = require('react');
const { Helmet } = require('react-helmet');
const ReactDomServer = require('react-dom/server');
const Theme = require(`./Themes/${THEME}`);

function getIndexPage(props) {
    return {
        html: ReactDomServer.renderToString(<Theme.IndexPage {...props} />),
        helmet: Helmet.renderStatic(),
    };
}

function getPostPage(props) {
    return {
        html: ReactDomServer.renderToString(<Theme.PostPage {...props} />),
        helmet: Helmet.renderStatic(),
    };
}

module.exports = {
    getIndexPage,
    getPostPage,
};
