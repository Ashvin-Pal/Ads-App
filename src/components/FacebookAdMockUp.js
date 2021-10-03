import picBig from "../testPic.jpg";
import thumbs from "../thumbs.svg";
import comment from "../comment.svg";
import share from "../share.svg";

import "../css/FacebookAdMockUp.css";

export const FacebookAdMockUp = ({
    companyName,
    companyUrl,
    companyAvatar,
    postText,
    mainImage,
    headlineSubtitle,
    headlineTitle,
    description,
    ctaButtonText,
    ctaButtonLink,
}) => {
    return (
        <div className="Facebook-Container">
            <div className="Facebook-Header-Container">
                <div className="Facebook-Header">
                    <div className="Company-Logo-Container">
                        <div className="image-container">
                            <img
                                src={companyAvatar || picBig}
                                className="Company-Avatar-Image"
                                alt="company avatar"
                            />
                        </div>
                    </div>
                    <div className="Facebook-Header-Title-Container">
                        <div className="Facebook-Header-Title">
                            <span className="Company-Title">{companyName}</span>
                            <span className="Sponsored">Sponsored</span>
                        </div>
                    </div>
                </div>
                <span className="Primary-Text">{postText}</span>
            </div>
            <img className="Facebook-Main-Image" src={mainImage || picBig} alt="ad" />
            <div className="Facebook-Bottom-Container">
                <div className="Bottom-Content">
                    <span className="Display-Link">{headlineSubtitle}</span>
                    <div className="Link-Headline-Description">
                        <span className="Display-Link-Headline">{headlineTitle}</span>
                        <span className="Link-Description">{description}</span>
                    </div>
                </div>
                <div className="cta">
                    <button className="cta-button">{ctaButtonText}</button>
                </div>
            </div>
            <div className="Facebook-Button-Group">
                <button className="Facebook-Button">
                    <img
                        src={thumbs}
                        className="Facebook-Icons"
                        alt="like"
                        width="20px"
                        height="20px"
                    />
                    Like
                </button>
                <button className="Facebook-Button">
                    <img
                        src={comment}
                        className="Facebook-Icons"
                        alt="like"
                        width="20px"
                        height="20px"
                    />
                    Comment
                </button>
                <button className="Facebook-Button">
                    <img
                        src={share}
                        className="Facebook-Icons"
                        alt="like"
                        width="22px"
                        height="22px"
                    />
                    Share
                </button>
            </div>
        </div>
    );
};
