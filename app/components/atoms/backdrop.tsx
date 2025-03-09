// import { motion } from "framer-motion";
// import type { HTMLAttributes } from "react";
//
// interface BackdropProps extends HTMLAttributes<HTMLDivElement> {}
//
// const Backdrop = (props: BackdropProps) => {
//   const { onClick, children, ...rest } = props;
//   return (
//     <motion.div
//       onClick={onClick}
//       className="backdrop"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       {...rest}
//     >
//       {children}
//     </motion.div>
//   );
// };
// export default Backdrop;

import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import clsx from "clsx";

interface BackdropProps extends ComponentProps<typeof motion.div> {}

const Backdrop = (props: BackdropProps) => {
  const { className, children, ...rest } = props;
  return (
    <motion.div
      className={clsx(
        "bg-secondary-100/20 z-50 fixed inset-0 backdrop-blur-sm flex items-center justify-center",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
