"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type AnimatedContainerProps = {
    children: ReactNode[];
};

export function AnimatedContainer({ children }: AnimatedContainerProps) {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            {children.map((child, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}