import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import { useState, useEffect } from "react";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    const [key, setKey] = useState(0);
    
    useEffect(() => {
      const handleResize = () => {
        // Force rerender on resize by changing key
        setKey(prev => prev + 1);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <motion.section
        key={key}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;