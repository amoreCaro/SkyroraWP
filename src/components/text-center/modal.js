import { previewTabs } from "/src/base/tabs";
import { Modal } from "@wordpress/components";

export const renderModal = ({data}) => {
  return (
    <Modal
      title={`Block - ${data.blockName}`}
      className="modal block-modal-xl"
      onRequestClose={() => data.closeModal()}
    >
      <div className="modal__wrapper">
        {previewTabs({data})}
      </div>
    </Modal>
  );
};
