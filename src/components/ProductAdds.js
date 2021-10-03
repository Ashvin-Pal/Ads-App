import { NavLink } from "react-router-dom";
import { APP_ROUTE, buildRouteiUrl } from "../config";
import { Add } from "grommet-icons";
import "../css/ProductAds.css";
import { AdList } from "./AdList";

export const ProductAdds = ({ product: { productId, productName, productImage }, ads }) => {
    const createAddUrl = buildRouteiUrl(APP_ROUTE.CREATE_ADS, { productId, productName });

    return (
        <div className="ProductAds">
            <div className="ProductAds-Top">
                <h2>{productName}</h2>
                <NavLink className="ProductAds-NewAdd-Button" to={createAddUrl}>
                    <Add className="ProductAds-Add-Icon" size="medium" color="white" />
                    Create New Add
                </NavLink>
            </div>
            <div>
                <img className="ProductAds-image" src={productImage} alt="product" />
            </div>
            <div>
                <AdList ads={ads} />
            </div>
        </div>
    );
};
