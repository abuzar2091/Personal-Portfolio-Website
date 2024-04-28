"use client"
import React, { useEffect, useState} from "react";
import { motion} from "framer-motion";
import { CircularProgress, Card, CardBody } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
export default function CircularProgress({ percentage }) {
  const [progress, setProgress] = useState(0);
  const {ref,inView } = useInView();


  useEffect(() => {
    if (inView ) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < percentage ? prevProgress + 10 : percentage
        );
      }, 300);

      return () => clearInterval(interval);
    }
    setProgress(0);
  }, [inView,percentage]);


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



