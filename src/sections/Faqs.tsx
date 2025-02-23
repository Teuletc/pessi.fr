"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question:
            "Comment Pessi gère-t-il les défaites en Ligue des Champions ?",
        answer: "Après chaque élimination, Pessi se console en envoyant des messages à son ancien coéquipier Paymar, lui demandant des conseils sur la manière de gérer les défaites avec style.",
    },
    {
        question:
            "Pourquoi Penaldo insiste-t-il pour tirer tous les penaltys ?",
        answer: "Penaldo croit fermement que chaque penalty est une opportunité divine de gonfler ses statistiques et de rappeler au monde qu'il est le roi incontesté du point de penalty.",
    },
    {
        question: "Moappé peut-il vraiment courir plus vite que la lumière ?",
        answer: "Selon des sources proches, Moappé envisage de participer aux Jeux Olympiques en athlétisme, affirmant que sa vitesse dépasse celle d'un guépard sous caféine.",
    },
    {
        question: "Paymar retournera-t-il un jour au FC Barcelone ?",
        answer: "Paymar a déclaré qu'il retournerait volontiers au FC Barcelone, mais uniquement si le club accepte de lui fournir une réserve inépuisable de roulettes et de paillettes pour ses soirées festives.",
    },
    {
        question: "Que pense Pessi des comparaisons avec Penaldo ?",
        answer: "Pessi trouve les comparaisons avec Penaldo aussi fatigantes qu'un marathon, préférant laisser ses pieds parler sur le terrain pendant que Penaldo perfectionne son art du plongeon.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Des questions ? Nous avons des{" "}
                    <span className="text-lime-400">réponses</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() =>
                                setSelectedIndex(
                                    selectedIndex === faqIndex ? null : faqIndex
                                )
                            }
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium m-0">
                                    {faq.question}
                                </h3>
                                <Plus
                                    size={30}
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition-transform duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
