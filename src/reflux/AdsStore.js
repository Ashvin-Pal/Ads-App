import Reflux from "reflux";

/**
 * This is the ads store. There are methods to get one ad,
 * create one ad, delete one ad, update on ad, and get all ads related to
 * a product.
 *
 * Each ad has a unique id. To query the ads store to get ads related to a single
 * product, you will have to pass the unique product id to the setProductsAds method.
 *
 *
 * The design closely resembles how a nosql database works.
 */

export const AdsActions = Reflux.createActions([
    "setProductAds",
    "getOneAd",
    "createOneAd",
    "updateOneAd",
    "deleteOneAd",
]);

export class AdsStore extends Reflux.Store {
    constructor() {
        super();
        this.state = { allAds: dummyData, productAds: [], ad: null };
        this.listenables = AdsActions;
    }

    /**
     * Get all ads that is related to a product
     * @param {string} productId
     */
    onSetProductAds(productId) {
        const productAds = this.state.allAds.filter((p) => p.productId === productId);
        this.setState({ productAds });
    }

    /**
     * Get one ad by addId
     * @param {string} addId
     */
    onGetOneAd(adId) {
        const ad = this.state.allAds.find((a) => a.adId === adId);
        this.setState({ ad });
    }

    /**
     * Add a new add
     * @param {object} newAdd
     */
    onCreateOneAd(newAdd) {
        this.setState({ allAds: [...this.state.allAds, newAdd] });
    }

    /**
     * Updates one add
     * @param {object} updatedAdd
     */
    onUpdateOneAd(updatedAdd) {
        const cloneAdds = [...this.state.allAds];
        const findAddIndex = cloneAdds.findIndex((a) => a.adId === updatedAdd.adId);
        cloneAdds[findAddIndex] = updatedAdd;
        this.setState({ allAds: cloneAdds });
    }

    /**
     * Remove an add
     * @param {string} adId
     */
    onDeleteOneAd(productId, adId) {
        const newAddsList = this.state.allAds.filter((a) => a.adId !== adId);
        this.setState({ allAds: newAddsList });
        this.onSetProductAds(productId);
    }
}

/**
 * Dummy data to prefill the store with some data.
 */
const dummyData = [
    {
        productId: "1111",
        adId: "11111111",
        companyName: "Form One",
        companyUrl: "asdas",
        companyAvatar: null,
        postText: "Lorem ipsum",
        mainImage: null,
        headlineSubtitle: "Lorem ipsum",
        headlineTitle: "Lorem ipsum",
        description: "Lorem ipsum",
        ctaButtonText: "Download",
        ctaButtonLink: "Lorem ipsum",
    },
    {
        productId: "2222",
        adId: "22222222",
        companyName: "AdMockups.com",
        companyUrl: "Lorem ipsum",
        companyAvatar: null,
        postText: "Try Ad MockUp Now! Its Free",
        mainImage: null,
        headlineSubtitle: "Admockups.com",
        headlineTitle: "Try Ad Mockup Now! Its Free",
        description:
            "Ad Mockups lets you create fast and easy mockups all in one place. Test it out!",
        ctaButtonText: "Download",
        ctaButtonLink: "Lorem ipsum",
    },
    {
        productId: "1111",
        adId: "33333333",
        companyName: "Form Two",
        companyUrl: "Lorem ipsum",
        companyAvatar: null,
        postText: "Lorem ipsum",
        mainImage: null,
        headlineSubtitle: "Lorem ipsum",
        headlineTitle: "dfs",
        description: "Lorem ipsum",
        ctaButtonText: "Download",
        ctaButtonLink: "Lorem ipsum",
    },
    {
        productId: "1111",
        adId: "44444444",
        companyName: "AdMockups.com",
        companyUrl: "asdas",
        companyAvatar: null,
        postText: "Lorem ipsum",
        mainImage: null,
        headlineSubtitle: "Lorem ipsum",
        headlineTitle: "Lorem ipsum",
        description: "Lorem ipsum",
        ctaButtonText: "Download",
        ctaButtonLink: "Lorem ipsum",
    },
    {
        productId: "1111",
        adId: "55555555",
        companyName: "Form three",
        companyUrl: "asdas",
        companyAvatar: null,
        postText: "Lorem ipsum",
        mainImage: null,
        headlineSubtitle: "Lorem ipsum",
        headlineTitle: "Lorem ipsum",
        description: "Lorem ipsum",
        ctaButtonText: "Lorem ipsum",
        ctaButtonLink: "Lorem ipsum",
    },
];
