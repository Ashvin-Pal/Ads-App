import Reflux from "reflux";

/**
 * This is the products store. It only has one method, which is to get a sinlge product
 *
 */

export const Actions = Reflux.createActions(["setOneProduct"]);

export class ProductStore extends Reflux.Store {
    constructor() {
        super();
        this.state = { products: [...dummyData.products], product: null };
        this.listenables = Actions;
    }
    /**
     *  Get one product
     * @param {id} productId
     */
    onSetOneProduct(productId) {
        const product = this.state.products.find((p) => p.productId === productId);
        this.setState({ product });
    }
}

/**
 * Dummy data to prefill the store with some data
 */
const dummyData = {
    logo: "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282485/coding-challenge/IMG_9843.png",
    name: "Max's Sporting Goods",
    products: [
        {
            productId: "1111",
            productName: "Good ol' Dumbbells",
            productDescription:
                "This equipment helps you perform joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility",
            productImage:
                "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
            price: 14.5,
        },
        {
            productId: "2222",
            productName: "Evergrip Jump Rope",
            productDescription:
                "Did you know that for an average-sized person, jumping rope might even burn more than 10 calories a minute. In just 30 minute jump rope sessions a day, you can build the figure you want. Jumping rope also helps with:\n- tone your calves.\n- tighten your core.\n- improve your lung capacity.\n- build stamina.",
            productImage:
                "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
            price: 3,
        },
        {
            productId: "3333",
            productName: "Durable Resistance band",
            productDescription:
                "Rubbery, elastic bands that you can use to strengthen your muscles at home. Resistance training is any type of exercise that uses resistance or weight to build strength in your muscles. Working out with resistance bands is one option for resistance training that allows you to work out at home using just one piece of equipment.",
            productImage:
                "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626332994/coding-challenge/resistance.jpg",
            price: 25.3,
        },
    ],
};
