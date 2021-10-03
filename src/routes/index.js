/**
 * Libraries import
 */
import { Route, Switch } from "react-router-dom";

/**
 * Url constants
 */
import { APP_ROUTE } from "../config";

/**
 * Pages components import
 */
import { Home, ProductAds, CreateAd, UpdateAdd } from "../pages";

/**
 * This file lists all the routes within this SPA.
 */

export const Routes = () => {
    return (
        <Switch>
            {/* Homepage */}
            <Route exact path={APP_ROUTE.HOME} render={() => <Home />} />

            {/* Single product page */}
            <Route exact path={APP_ROUTE.PRODUCT_ADS} render={() => <ProductAds />} />

            {/* Create a new ad page */}
            <Route exact path={APP_ROUTE.CREATE_ADS} render={() => <CreateAd />} />

            {/* Update an ad page */}
            <Route exact path={APP_ROUTE.UPDATE_ADS} render={() => <UpdateAdd />} />
        </Switch>
    );
};
