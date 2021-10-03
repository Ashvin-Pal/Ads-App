/**
 * Libraries import
 */
import Reflux from "reflux";
/**
 * CSS import
 */
import "./../css/Home.css";
/**
 * Reflux product store import
 */
import { ProductStore } from "../reflux/ProductsStore";
/**
 * Components import
 */
import { ProductsList } from "../components";

/**
 * This component renders the homepage view
 */
export class Home extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = ProductStore;
    }

    render() {
        return (
            <div className="home">
                <ProductsList products={this.state.products} />
            </div>
        );
    }
}
