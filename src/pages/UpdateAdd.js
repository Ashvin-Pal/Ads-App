/**
 * Libraries import
 */
import Reflux from "reflux";
import { withRouter } from "react-router";
/**
 * Reflux stores import
 */
import { AdsActions, AdsStore } from "../reflux/AdsStore";
/**
 * Component import
 */
import { UpdateAdData } from "../components";
/**
 * This component renders the update an ad view
 */
class Comp extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = AdsStore;
    }
    /**
     * Once the component has mounted. Get the ad to be updated from the store.
     */
    componentDidMount() {
        AdsActions.getOneAd(this.props.match.params.adId);
    }

    /**
     *
     * Make sure the ad to be updated id & the url params id is the same.
     * This is needed as the data is only gotten from the store after
     * the component has been mopunted.
     */
    render() {
        if (this.state?.ad && this.state.ad?.adId === this.props.match.params?.adId) {
            return (
                <div className="CreateAdd">
                    <h2>Update your ad</h2>
                    <UpdateAdData formData={this.state.ad} />
                </div>
            );
        }
        return <></>;
    }
}

export const UpdateAdd = withRouter(Comp);
