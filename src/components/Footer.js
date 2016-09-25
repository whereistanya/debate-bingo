import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

export default class Social extends Component {
  render() {
    const shareUrl = window.location.href.split('#')[0]

    return (
      <div className="social-icons-bar">
        <div className="title">
          {this.props.heading}
        </div>
        <div className="social-media">
        <div onClick={() => {ga('send', 'event', 'share', 'share', 'twitter');}}>
          <TwitterShareButton
            url={shareUrl}
            title={this.props.shortTitle}
            className="share-button">
            <TwitterIcon className="desktop" size={50} round />
          </TwitterShareButton>
          </div>
          {<div className="share-count">
            &nbsp;
          </div>}
        </div>

        <div className="social-media">
        <div onClick={() => {ga('send', 'event', 'share', 'share', 'facebook');}}>
          <FacebookShareButton
            url={shareUrl}
            title={this.props.title}
            className="share-button">
            <FacebookIcon className="desktop" size={50} round />
          </FacebookShareButton>
          </div>
          {<FacebookShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </FacebookShareCount>}
        </div>

        <div className="social-media">
        <div onClick={() => {ga('send', 'event', 'share', 'share', 'googlePlus');}}>
          <GooglePlusShareButton
            url={shareUrl}
            className="share-button">
            <GooglePlusIcon className="desktop" size={50} round />
          </GooglePlusShareButton>
          </div>
          {<GooglePlusShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </GooglePlusShareCount>}
        </div>

        <div className="social-media">
        <div onClick={() => {ga('send', 'event', 'share', 'share', 'linkedIn');}}>
          <LinkedinShareButton
            url={shareUrl}
            title={this.props.title}
            className="share-button">
            <LinkedinIcon className="desktop" size={50} round />
          </LinkedinShareButton>
          </div>
          {<LinkedinShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </LinkedinShareCount>}

        </div>
        <div className="social-media">
          <a data-action="donate"
            href="https://www.hillaryclinton.com/donate/?amount=10.00&utm_source=debate-bingo"
            target="donate">
           <img src="../images/donate.png" />
       </a><br />
          <a data-action="donate"
            href="https://www.hillaryclinton.com/donate/?amount=10.00&utm_source=debate-bingo"
            target="donate">
          Donate
          </a>
       </div>
       <div className="social-media">
       &nbsp; &nbsp; &nbsp; &nbsp;
       </div>

       <div className="attribution">
          Built by <a href="http://devprogress.us">DevProgress</a>.<br />
          Want to help? It's <a href="https://github.com/devprogress/debate-bingo">open source.</a>
          <br />
        </div>

      </div>
    );
  }
}
