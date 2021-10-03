import { TextInput } from "./TextInput";

import "../css/AdMockForm.css";
import { ImageInput } from "./ImageInput";
export const AdMockForm = ({ handleChange, formData, handleSave }) => {
    return (
        <div className="AdMockForm">
            <TextInput
                name="companyName"
                placeholder="Headline text"
                value={formData.companyName}
                onChange={handleChange}
            />
            <TextInput
                name="companyUrl"
                placeholder="Link for headline text"
                value={formData.companyUrl}
                onChange={handleChange}
            />
            <TextInput
                name="postText"
                placeholder="Post text"
                value={formData.postText}
                onChange={handleChange}
            />
            <TextInput
                name="headlineSubtitle"
                placeholder="Headline subtitlew"
                value={formData.headlineSubtitle}
                onChange={handleChange}
            />
            <TextInput
                name="headlineTitle"
                placeholder="Headline title"
                value={formData.headlineTitle}
                onChange={handleChange}
            />
            <TextInput
                name="description"
                placeholder="Headline description"
                value={formData.description}
                onChange={handleChange}
            />
            <TextInput
                name="ctaButtonText"
                placeholder="Call to action text"
                value={formData.ctaButtonText}
                onChange={handleChange}
            />
            <TextInput
                name="ctaButtonLink"
                placeholder="Call to action link"
                value={formData.ctaButtonLink}
                onChange={handleChange}
            />
            <ImageInput name="companyAvatar" onChange={handleChange} label="Upload avatar image" />
            <ImageInput name="mainImage" onChange={handleChange} label="Upload main image" />
            <button className="CreateAdd-button" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};
