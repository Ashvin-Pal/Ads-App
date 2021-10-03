import { NavLink } from "react-router-dom";
import { APP_ROUTE, buildRouteiUrl } from "../config";

export const Product = ({ productName, productDescription, productImage, productId }) => {
    const url = buildRouteiUrl(APP_ROUTE.PRODUCT_ADS, { productName, productId });

    return (
        <div className="productList-item-container">
            <div className="productList-item">
                <div className="productList-item-image-container">
                    <img
                        src={productImage}
                        className="productList-item-image"
                        width="100%"
                        height="100%"
                        alt="product"
                    />
                </div>
                <div className="productList-Text-Container">
                    <NavLink className="productList-item-title" to={url}>
                        {productName}
                    </NavLink>
                    <p>{productDescription}</p>
                </div>
            </div>
        </div>
    );
};
