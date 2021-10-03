import { AdMockForm } from "./AdMockForm";
import { FacebookAdMockUp } from "./FacebookAdMockUp";
import "../css/FormWithFacebookMockup.css";

export const FormWithFacebookMockup = ({ formData, handleChange, handleSave }) => {
    return (
        <div className="FormWithFacebookMockup">
            <div className="FormWithFacebookMockup-Ad">
                <AdMockForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSave={handleSave}
                />
            </div>
            <div className="FormWithFacebookMockup-Mockup">
                <FacebookAdMockUp {...formData} />
            </div>
        </div>
    );
};
