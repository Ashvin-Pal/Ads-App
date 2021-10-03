/**
 * Libraries import
 */
import Reflux from "reflux";
import { withRouter } from "react-router";
/**
 * Reflux stores & actions import
 */
import { Actions, ProductStore } from "../reflux/ProductsStore";
import { AdsActions, AdsStore } from "../reflux/AdsStore";
/**
 * Component import
 */
import { ProductAdds } from "../components";
/**
 * CSS import
 */
import "../css/Product-Ads.css";
/**
 * This component renders the single product view
 */
class Comp extends Reflux.Component {
    constructor(props) {
        super(props);
        this.stores = [ProductStore, AdsStore];
        this.storeKeys = ["product", "productAds"];
    }
    /**
     * Get the products from the product store &
     * get all ads related to the product from the ads
     * store
     */
    componentDidMount() {
        Actions.setOneProduct(this.props.match.params.productId);
        AdsActions.setProductAds(this.props.match.params.productId);
    }

    render() {
        return (
            <div className="Product-Adds">
                {this.state.product && (
                    <ProductAdds product={this.state.product} ads={this.state.productAds} />
                )}
            </div>
        );
    }
}

export const ProductAds = withRouter(Comp);
