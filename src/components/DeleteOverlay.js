import { Clear, Trash } from "grommet-icons";

import "../css/DeleteOverlay.css";

export const DeleteOverlay = ({ handleDelete, handleCancel }) => {
    return (
        <div className="DeleteOverlay">
            <div className="DeleteOverlay-Box">
                <h3>Are you sure you want to delete this ad?</h3>
                <div className="DeleteOverlay-Button-Group">
                    <button className="DeleteOverlay-Delete-Button" onClick={handleDelete}>
                        <Trash className="Delete-Button-Icon" size="16px" color="white" />
                        Yes
                    </button>
                    <button className="DeleteOverlay-Cancel-Button" onClick={handleCancel}>
                        <Clear className="Delete-Button-Icon" size="16px" color="white" />
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};
