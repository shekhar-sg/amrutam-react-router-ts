import { motion } from "framer-motion";
import Backdrop from "~/components/atoms/backdrop";
import type { ComponentProps, ReactNode } from "react";
import { newspaper } from "~/animations";

interface ModalProps extends ComponentProps<typeof motion.div> {
  handleClose: () => void;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { handleClose, children, ...rest } = props;

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center size-fit justify-center"
        variants={newspaper}
        initial="hidden"
        animate="visible"
        exit="exit"
        {...rest}
      >
        <div>{children}</div>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
