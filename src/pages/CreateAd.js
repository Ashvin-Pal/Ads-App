/**
 * Libraries import
 */
import { useHistory, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

/**
 * Reflux actions import
 */
import { AdsActions } from "../reflux/AdsStore";

/**
 * Route config and build url function import.
 */
import { APP_ROUTE, buildRouteiUrl } from "../config";
/**
 * Component Import
 */
import { FormWithFacebookMockup } from "../components/FormWithFaceBookMockup";
/**
 * Css import
 */
import "./../css/CreateAdd.css";

/**
 * Used for initializing the create form
 */
const INIT_FORM = {
    productId: "",
    adId: "",
    companyName: "",
    companyUrl: "",
    companyAvatar: "",
    postText: "",
    mainImage: "",
    headlineSubtitle: "",
    headlineTitle: "",
    description: "",
    ctaButtonText: "",
    ctaButtonLink: "",
};

export const CreateAd = () => {
    /**
     * route params. See config file for more information
     */
    const { productId, productName } = useParams();

    /**
     * used for redirect after save.
     */
    const history = useHistory();

    /**
     * Used for storing form data.
     */
    const [formData, setFormData] = useState(INIT_FORM);

    /**
     * Used for handling form inputs on change.
     * @param {event} event object from input on change
     */
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    /**
     * Called by the form button on form save.
     */
    const handleSave = () => {
        /**
         * Save form data to store. Also adds a unique id to the new add.
         */
        AdsActions.createOneAd({ ...formData, productId, adId: uuidv4() });
        /**
         * Build redirect url. Builds the product page url
         */
        const redirectUrl = buildRouteiUrl(APP_ROUTE.PRODUCT_ADS, { productName, productId });
        /**
         * Redirect to product page after creating an ad.
         */
        history.push(redirectUrl);
    };

    return (
        <div className="CreateAdd">
            <h2>Create a new ad</h2>
            <FormWithFacebookMockup
                formData={formData}
                handleChange={handleChange}
                handleSave={handleSave}
            />
        </div>
    );
};
