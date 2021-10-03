/**
 * Icons import
 */
import { Upload } from "grommet-icons";
/**
 * CSS Import
 */
import "../css/ImageInput.css";

export const ImageInput = ({ name, value, onChange, label }) => {
    /**
     *
     * Handle the upload image input. The temp variable
     * mimics how a typical event object is. This is so the onChange
     * method in the parent can handle all inputs the same way.
     */
    const handleChange = (e) => {
        /**
         * Convert image to a dataurl
         */
        const dataUrl = URL.createObjectURL(e.target.files[0]);
        /**
         * Mimics a typical event object.
         */
        const temp = { target: { name: e.target.name, value: dataUrl } };
        onChange(temp);
    };

    return (
        <div className="ImageInput-Container">
            <label htmlFor={name} className="ImageInput">
                <Upload className="ImageInput-Icon" size="medium" color="white" />
                {label}
            </label>
            <input
                id={name}
                type="file"
                onChange={handleChange}
                name={name}
                accept="image/png, image/jpeg"
            ></input>
        </div>
    );
};
