import { useNavigate } from "react-router-dom";

import TrashIcon from "../assets/trash.svg";
import TailwindModal from "./TailwindModal";

type Props = {
    closeModal: () => void;
    deletePost: () => void;
};

function DeleteModal(props: Props) {
    const navigate = useNavigate();

    return (
        <TailwindModal
            title="Delete Post"
            icon={TrashIcon}
            content={
                <p className="text-left text-lg font-medium text-gray-800">
                    Are you sure you want to delete this post? This action
                    cannot be undone.
                </p>
            }
            okButton={{
                text: "Confirm",
                buttonColor: "bg-red-600 hover:bg-red-700 text-white",
                action: () => {
                    props.deletePost();
                    props.closeModal();
                    navigate(import.meta.env.BASE_URL);
                },
            }}
            cancelButton={{
                text: "Cancel",
                buttonColor:
                    "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
                action: () => props.closeModal(),
            }}
        />
    );
}

export default DeleteModal;
