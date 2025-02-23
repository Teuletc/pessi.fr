"use client";

import psg from "@/assets/images/psg.png";
import petioli from "@/assets/images/petioli.png";
import Inter_Miami_CF_logo from "@/assets/images/Inter_Miami_CF_logo.png";
import newellsoldboyslogo from "@/assets/images/newells-old-boys-logo.png";
import fcb from "@/assets/images/fcb.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const logos = [
    { name: "psg", image: psg },
    { name: "fcb", image: fcb },
    { name: "Inter Miami CF", image: Inter_Miami_CF_logo },
    { name: "Newell's Old Boys", image: newellsoldboyslogo },
    { name: "petioli", image: petioli },
];

export default function LogoTicker() {
    return (
        <section className="overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Ils nous font confiance
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-24 pr-24 "
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <React.Fragment key={i}>
                                {logos.map((each) => (
                                    <Image
                                        src={each.image}
                                        alt={each.name}
                                        key={each.name}
                                        width={150}
                                        height={150}
                                        className="grayscale-1"
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
