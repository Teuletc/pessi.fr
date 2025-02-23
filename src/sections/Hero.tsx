"use client";

import designExample1 from "@/assets/images/design-example-1.webp";
import designExample2 from "@/assets/images/design-example-2.webp";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorImage from "@/assets/images/cursor-you.svg";
import Link from "next/link";
import AutoTiltCard from "@/components/AutoTiltCard";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section
            className="pt-24 overflow-x-clip min-h-screen"
            style={{
                cursor: `url(${cursorImage.src}), auto`,
            }}
        >
            <div className="container relative flex flex-col items-center justify-center">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 50, x: -50 }}
                    className="absolute -left-96 -top-48 hidden lg:block"
                    drag
                >
                    <Image
                        draggable={false}
                        src={designExample1}
                        alt="design example 1"
                        className="scale-[0.4]"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="Encara" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    ref={rightDesignScope}
                    className="absolute -right-80 -top-16 hidden lg:block"
                    drag
                >
                    <Image
                        draggable={false}
                        src={designExample2}
                        alt="design example 2"
                        className="scale-50"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 0 }}
                    className="absolute top-52 right-28 hidden lg:block"
                >
                    <Pointer color="red" name="Bobo" />
                </motion.div>

                <div className="flex justify-center">
                    <Link
                        href={"https://x.com/corentin_saas"}
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-white hover:scale-105 animate-bounce duration-200 font-semibold"
                    >
                        ✨ pessi.fr a vendre ✨
                    </Link>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
                    ¿Que mira a bobo?
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Bienvenue sur Pessi.fr : l'espoir, c'est surfait… la
                    déception est garantie !
                </p>
                {/* <form className="mx-auto flex border border-white/50 rounded-full p-2 mt-8 max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-1 w-full"
                    />
                    <Button
                        size="sm"
                        className="whitespace-nowrap"
                        type="submit"
                        variant="primary"
                    >
                        Sign Up
                    </Button>
                </form> */}

                {/* Ici on intègre le TiltCard pour l'effet 3D avec shiny sur l'image */}
                <div className="flex justify-center mt-12 h-96 w-1/2">
                    <AutoTiltCard />
                </div>
            </div>
        </section>
    );
}
