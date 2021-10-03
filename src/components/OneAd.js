/**
 * Libraries Import
 */
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { Edit, Trash } from "grommet-icons";
/**
 * Refulx action import
 */
import { AdsActions } from "../reflux/AdsStore";
/**
 * Url config import
 */
import { APP_ROUTE, buildRouteiUrl } from "../config";

/**
 * Components import
 */
import { FacebookAdMockUp } from "./FacebookAdMockUp";
import { DeleteOverlay } from ".";
/**
 * Css import
 */
import "../css/OneAd.css";

/**
 * This component display a single ad for the products page view
 * @param {ad} param0 single ad
 * @returns a single ad
 */
export const OneAd = ({ ad }) => {
    /**
     * Used for navigation after delete
     */
    const history = useHistory();

    /**
     * Used for navigation after delete
     */
    const { productName } = useParams();

    /**
     * Used for handling the modal state
     */
    const [isDelete, setDelete] = useState(false);

    /**
     * Used to build the update url
     */
    const updateUrl = buildRouteiUrl(APP_ROUTE.UPDATE_ADS, { adId: ad.adId, productName });

    /**
     * Called by the DeleteOverlay model on delete
     */
    const handleDelete = () => {
        AdsActions.deleteOneAd(ad.productId, ad.adId);
        history.push(APP_ROUTE.HOME);
    };

    /**
     * Called when the user answers yes in the DeleteOverlay component
     */
    const handleShowDeleteModel = () => setDelete(true);

    /**
     * Called when the user answers no in the DeleteOverlay component
     */
    const handleCloseDeleteModel = () => setDelete(false);

    return (
        <div className="OneAd">
            {/* Show the delete overlay when the user click on the delete ad button */}
            {isDelete && (
                <DeleteOverlay handleDelete={handleDelete} handleCancel={handleCloseDeleteModel} />
            )}
            <div className="OneAd-Button-Group">
                <NavLink className="OneAd-Edit-Button" to={updateUrl}>
                    <Edit className="OneAd-Button-Icon" size="16px" color="white" />
                    Update Ad
                </NavLink>
                <button className="OneAd-Delete-Button" onClick={handleShowDeleteModel}>
                    <Trash className="OneAd-Button-Icon" size="16px" color="white" />
                    Delete Ad
                </button>
            </div>
            <FacebookAdMockUp {...ad} />
        </div>
    );
};
