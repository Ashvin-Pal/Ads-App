/**
 * Component Import
 */
import { OneAd } from "./OneAd";

/**
 * Css import
 */
import "../css/AdList.css";

/**
 * This component renders a list of ads for a product
 * @param {object} param0 AdsList
 * @returns A list of Ads
 */
export const AdList = ({ ads }) => {
    /**
     * Render a list of ads
     */
    if (ads.length) {
        return ads?.map((ad) => (
            <div key={ad.adId} className="AdList">
                <OneAd ad={ad} />
            </div>
        ));
    }

    /**
     * If there is no ads for a product show the msg below
     */
    return (
        <div className="AdList-Msg">
            <h3>You have no ads for this product. Create your first ad!</h3>
        </div>
    );
};
