import { useRef } from "react";
import { useInView } from "framer-motion";

const useScrollReveal = (options = { once: true, margin: "-100px" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  return { ref, isInView };
};

export default useScrollReveal;