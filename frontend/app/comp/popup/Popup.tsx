import React, { ReactNode } from "react";

interface PopupProps {
  isOpen: boolean;
  title?: string;
  content: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  title,
  content,
  onClose,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        {/* Title (Optional) */}
        {title && <h2 className="text-xl font-semibold">{title}</h2>}

        {/* Content */}
        <div className="mt-2">{content}</div>

        {/* Footer (Optional) */}
        <div className="mt-4 flex justify-end space-x-2">
          {footer || (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={onClose}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
