type Props = {
    title: string;
    icon: string;
    content: React.ReactNode | string;
    cancelButton: {
        text: string;
        buttonColor: React.HTMLAttributes<HTMLDivElement>["className"];
        action: () => void;
    };
    okButton: {
        text: string;
        buttonColor: React.HTMLAttributes<HTMLDivElement>["className"];
        action: () => void;
    };
};

function TailwindModal(props: Props) {
    return (
        <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                {/* Centering the Modal */}
                <div className="flex min-h-full flex-col items-center justify-center">
                    {/* Modal Container */}
                    <div className="flex w-3/4 flex-col gap-2 rounded bg-gradient-to-r from-amber-400 to-amber-200 px-4 py-2">
                        {/* Title, content and Icon */}
                        <div className="flex items-center justify-start gap-4">
                            {/* Icon */}
                            <div className="flex items-center justify-center rounded-full border border-black p-2">
                                <img
                                    className="w-10 "
                                    src={props.icon}
                                    alt="icon"
                                />
                            </div>
                            {/* Actual Content */}
                            <div className="flex flex-grow flex-col items-center justify-start gap-2">
                                <h3 className="text-2xl font-semibold">
                                    {props.title}
                                </h3>
                                {props.content}
                            </div>
                        </div>
                        <div className="p-2" />
                        {/* Ok and Cancel Buttons - Container */}
                        <div className="flex items-center justify-center gap-2">
                            {/* Cancel Button */}
                            <button
                                className={[
                                    "rounded px-3 py-2",
                                    props.cancelButton.buttonColor,
                                ].join(" ")}
                                onClick={props.cancelButton.action}
                            >
                                {props.cancelButton.text}
                            </button>
                            {/* Ok Button */}
                            <button
                                className={[
                                    "rounded px-3 py-2",
                                    props.okButton.buttonColor,
                                ].join(" ")}
                                onClick={props.okButton.action}
                            >
                                {props.okButton.text}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TailwindModal;
