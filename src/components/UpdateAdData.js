/**
 * Libraries import
 */
import { useState } from "react";
import { useHistory } from "react-router";

/**
 * Route config import
 */
import { APP_ROUTE } from "../config";

/**
 * Reflux actions import
 */

import { AdsActions } from "../reflux/AdsStore";
/**
 * Component Import
 */
import { FormWithFacebookMockup } from "./FormWithFaceBookMockup";

export const UpdateAdData = ({ formData }) => {
    /**
     * Used for storing form data.
     */
    const [updateformData, setFormData] = useState({ ...formData });

    /**
     * used for redirect after save.
     */
    const history = useHistory();
    /**
     * Called by the form button on form save.
     */
    const handleUpdate = () => {
        /**
         * Save form data to store.
         */
        AdsActions.updateOneAd({ ...updateformData });
        /**
         * Redirect to home page after updating an ad.
         */
        history.push(APP_ROUTE.HOME);
    };

    /**
     * Used for handling form inputs on change.
     * @param {event} event object from input on change
     */
    const handleChange = (e) => setFormData({ ...updateformData, [e.target.name]: e.target.value });

    return (
        <div>
            <FormWithFacebookMockup
                formData={updateformData}
                handleChange={handleChange}
                handleSave={handleUpdate}
            />
        </div>
    );
};
