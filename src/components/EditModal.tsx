import { useEffect, useState } from "react";

import PencilIcon from "../assets/pencil.svg";
import TailwindModal from "./TailwindModal";

type Props = {
    title: string;
    content: string;
    closeModal: () => void;
    editPost: (title: string, content: string) => void;
};

function EditModal(props: Props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setTitle(props.title);
        setContent(props.content);

        return () => {
            setTitle("");
            setContent("");
        };
    }, [props]);

    return (
        <TailwindModal
            title="Edit Post"
            icon={PencilIcon}
            content={
                <form
                    // onSubmit={handleSubmit}
                    className="flex w-full flex-col items-center justify-center gap-1 px-4"
                >
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="title"
                            className="text-xl font-semibold"
                        >
                            Title:
                        </label>
                        <input
                            id="title"
                            className="rounded border bg-amber-100 px-2 py-1"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="content"
                            className="text-xl font-semibold"
                        >
                            Content:
                        </label>
                        <textarea
                            id="content"
                            className="h-24 rounded border bg-amber-100 p-2"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </form>
            }
            okButton={{
                text: "Edit",
                buttonColor: "bg-red-600 hover:bg-red-700 text-white",
                action: () => {
                    props.editPost(title, content);
                    props.closeModal();
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

export default EditModal;
