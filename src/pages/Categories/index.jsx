import MainLayout from "../../layouts/main-layout";
import ConrnerButton from "../../components/common/CornerButton";
import useLocale from "../../contexts/LocaleContext";
import FormBuilder from "./../../components/formBuilder/index";
import { categoryFormConfig } from "../../formConfigs/category";
import { useState } from "react";
import Modal from "../../components/Modal/index";
import { AnimatePresence } from "framer-motion";
import Crud from "../../components/common/Crud";
const CategoriesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLocale();

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <MainLayout>
        <Crud
          name="category"
          fields={[
            {
              name: "icon",
              type: "icon",
            },
            {
              name: "label",
              type: "text",
            },
            {
              name: "createdAt",
              type: "date",
            },
            {
              name: "updatedAt",
              type: "date",
            },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 h-full overflow-y-auto overflow-x-hidden p-4">
          <ConrnerButton onClick={() => (modalOpen ? close() : open())} />
          <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            exitBeforeEnter={true}
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal
                title={"Add Category"}
                modalOpen={modalOpen}
                handleClose={close}
              >
                <FormBuilder config={categoryFormConfig(onSubmit)} />
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </MainLayout>
    </div>
  );
};

export default CategoriesPage;
