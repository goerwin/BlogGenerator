/* global THEME */

const React = require('react');
const ReactDom = require('react-dom');
const Theme = require(`./Themes/${THEME}`);

if (window.__PAGE_TYPE__ === 'index') {
    ReactDom.hydrate(
        <Theme.IndexPage {...window.__STATE__} />,
        document.getElementById('app-root')
    );
} else if (window.__PAGE_TYPE__ === 'post') {
    ReactDom.hydrate(
        <Theme.PostPage {...window.__STATE__} />,
        document.getElementById('app-root')
    );
}
