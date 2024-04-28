// import React from 'react'
// import { motion } from "framer-motion";

// const containerStyle = {
//     position: "relative",
//     height: "4rem",
//     width: "4rem"
// }

// const circularStyle = {
//     display: "block",
//     height: "4rem",
//     width: "4rem",
//     border: "0.5rem solid #e9e9e9", // Make the border transparent
//     borderTop: "0.5rem solid #3498db", // Only apply border to top to make the circle
//     borderRadius: "50%",
//     position: "absolute",
//     boxSizing: "border-box",
//     top: "0",
//     left: "0"
// }

// const spinTransition = {
//     loop: Infinity,
//     duration: 1,
//     ease: "linear"
// }

// function Loader() {
//   return (
//     <div style={containerStyle}>
//         <motion.span style={circularStyle} animate={{ rotate: 360 }} transition={spinTransition}></motion.span>
//     </div>
//   )
// }

// export default Loader;


// import React from "react";
// import {CircularProgress, Card, CardBody} from "@nextui-org/react";

// export default function App() {
//   return (
//     <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
//       <CardBody className="justify-center items-center pb-0">
//         <CircularProgress
//           classNames={{
//             svg: "w-36 h-36 drop-shadow-md",
//             indicator: "stroke-white",
//             track: "stroke-white/10",
//             value: "text-3xl font-semibold text-white",
//           }}
//           value={70}
//           strokeWidth={4}
//           showValueLabel={true}
//         />
//       </CardBody>
      
//     </Card>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { motion,useInView } from "framer-motion";
// import { CircularProgress, Card, CardBody } from "@nextui-org/react";

// export default function App({percentage}) {
//   const [progress, setProgress] = useState(0);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const { ref, inView } = useInView();
//   useEffect(() => {
//     if (inView && !isCompleted) {
//       const interval = setInterval(() => {
//         setProgress((prevProgress) =>
//           prevProgress < percentage ? prevProgress + 10 : percentage
//         );
//       }, 500);

//       return () => clearInterval(interval);
//     }
//   }, [inView, percentage, isCompleted]);

//   useEffect(() => {
//     if (progress === percentage) {
//       setIsCompleted(true);
//     }
//   }, [progress, percentage]);
//   return (
//     <motion.div ref={ref} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//       <Card
//         className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500"
//       >
//         <CardBody className="justify-center items-center pb-0">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//             style={{ width: "9rem", height: "9rem" }}
//           >
//             <CircularProgress
//               classNames={{
//                 svg: "w-36 h-36 drop-shadow-md",
//                 indicator: "stroke-white",
//                 track: "stroke-white/10",
//                 value: "text-3xl font-semibold text-white",
//               }}
//               value={progress}
//               strokeWidth={4}
//               showValueLabel={true}
//             />
//           </motion.div>
//         </CardBody>
//       </Card>
//     </motion.div>
//   );
// }
"use client"
import React, { useEffect, useState,useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircularProgress, Card, CardBody } from "@nextui-org/react";

export default function Loader({ percentage }) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef(null);
  const {inView } = useInView({ref});


  useEffect(() => {
   // console.log("inView:", inView);
    if (!isCompleted) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < percentage ? prevProgress + 10 : percentage
        );
      }, 500);

      return () => clearInterval(interval);
    }
  }, [inView,percentage,progress]);

  useEffect(() => {
    if (progress === percentage) {
      setIsCompleted(true);
    }
  }, [progress, percentage]);
 // console.log("ref",ref);

  return (
    <motion.div 
    className="w-[240px] h-[240px]" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
    ref={ref} >
      <Card 
        className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500 flex justify-center items-center"
      >
        <CardBody className="flex justify-center items-center pb-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: "9rem", height: "9rem" }}
          >
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              value={progress}
              strokeWidth={3}
              showValueLabel={true}
              
            />
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
}



