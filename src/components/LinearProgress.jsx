import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LinearProgressBar({ percentage = 70 }) {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1, // Triggers when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < percentage ? prevProgress + 10 : percentage
        );
      }, 300);

      return () => clearInterval(interval);
    }
    setProgress(0);
  }, [inView, percentage]);

  return (
    <div className="relative">

    <div ref={ref} className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
      <motion.div
        className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }} // Initial width when component mounts
        animate={{ width: `${progress}%` }} // Animate width based on progress
      />
    </div>
      <p className="z-10 absolute h-4 bottom-0 left-36">
        {progress}%
      </p>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// export default function LinearProgressBar({ percentage = 70 }) {
//   const [progress, setProgress] = useState(0);
//   const { ref, inView } = useInView({
//     threshold: 0.1, // Triggers when 10% of the component is in view
//   });

//   useEffect(() => {
//     if (inView) {
//       const interval = setInterval(() => {
//         setProgress((prevProgress) =>
//           prevProgress < percentage ? prevProgress + 10 : percentage
//         );
//       }, 300);

//       return () => clearInterval(interval);
//     }
//     setProgress(0);
//   }, [inView, percentage]);
//   console.log("inview ", inView);

//   return (
//     <div ref={ref} className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
//       <motion.div
//         className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"
//         style={{ width: `${progress}%` }}
//         initial={{ width: "0%" }} // Initial width when component mounts
       
//         animate={{ width: `${progress}%` }} // Animate width based on progress
//       >
       
//         </motion.div>
//        <p className="z-10 absolute h-4 bottom-0 left-28">{progress}% </p> 
//     </div>
//   );
// }
