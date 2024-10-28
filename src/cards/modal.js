import { previewTabs } from "/src/core/tabs";
import Block from "./block.json";
import { Modal } from "@wordpress/components";

export const renderModal = (
  setAttributes,
  attributes,
  activeTab,
  setActiveTab,
  setIsModalOpen,
  tabContent,
  tabItems,
  tabStyle,
  tabView
) => {
  return (
    <Modal
      title={`Block - ${Block.title}`}
      className="modal block-modal-xl"
      onRequestClose={() => setIsModalOpen(false)}
    >
      <div className="modal__wrapper">
        {previewTabs({
          setAttributes,
          attributes,
          activeTab,
          setActiveTab,
          tabContent,
          tabItems,
          tabStyle,
          tabView,
        })}
      </div>
    </Modal>
  );
};
