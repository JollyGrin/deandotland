import React, { Component, Fragment } from 'react';

export default class InstaComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            shortcode,
            videoUrl,
            displayUrl,
            thumbnail
        } = this.props.instaobject;

        const imgStyle = {
            height: '300px',
            width: '300px'
        }

        return (
            <Fragment>
                <a href={`https://www.instagram.com/p/${shortcode}`}>
                    <img src={thumbnail} style={imgStyle}/>
                    </a>
            </Fragment>
        );
    }
}
