import { Product } from ".";
import "../css/ProductList.css";

export const ProductsList = ({ products }) => {
    return (
        <div className="productList-container">
            <h2>Your Products</h2>

            <div className="productList-box">
                {products.map((p) => (
                    <div key={p.productId} className="productList">
                        <Product {...p} />
                    </div>
                ))}
            </div>
        </div>
    );
};
