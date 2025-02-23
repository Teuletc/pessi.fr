import Tag from "@/components/Tag";
import pessiIcon from "@/assets/images/pessi-icon.webp";
import penaldoIcon from "@/assets/images/penaldo-logo.jpg";
import moappeIcon from "@/assets/images/moappe-logo.jpeg";
import neymemeIcon from "@/assets/images/neymeme-logo.jpeg";
import suiiIcon from "@/assets/images/suii-logo.jpeg";
import goatIcon from "@/assets/images/goat-logo.jpeg";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
    {
        name: "Pessi",
        icon: pessiIcon,
        description:
            "Pessi, le maître des penalties manqués et des occasions ratées.",
    },
    {
        name: "Penaldo",
        icon: penaldoIcon,
        description:
            "Penaldo, spécialiste des plongeons et des tirs au but discutables.",
    },
    {
        name: "Moappé",
        icon: moappeIcon,
        description:
            "Moappé, connu pour sa vitesse fulgurante... vers les hors-jeux.",
    },
    {
        name: "Paymar",
        icon: neymemeIcon,
        description:
            "Paymar, expert en roulades dramatiques et en blessures imaginaires.",
    },
    {
        name: "Suii",
        icon: suiiIcon,
        description:
            "Suii, célébrant chaque but comme s'il avait gagné la Coupe du Monde.",
    },
    {
        name: "GOAT",
        icon: goatIcon,
        description:
            "GOAT, le 'Greatest Of All Trolls', légende des mèmes footballistiques.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>analyse</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            La culture juste et précise{" "}
                            <span className="text-lime-400">du football</span>
                        </h2>

                        <p className="text-white/50 mt-4 text-lg">
                            Découvrez nos analyses parodiques des stars du
                            ballon rond, où chaque dribble raté et chaque
                            plongeon théâtral sont passés au crible.
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
