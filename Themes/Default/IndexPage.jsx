const React = require('react');
const Header = require('./Header');
const Posts = require('./Posts');

function IndexPage(props) {
    return (
        <main>
            <Header {...props} />
            <Posts posts={props.posts} pagination={props.pagination} />
        </main>
    );
}

// Analytics({
//     app: 'appname',
//     plugins: [
//         googleAnalytics({
//             trackingId: 'UA-165216261-1',
//         }),
//     ],
// });

module.exports = IndexPage;
