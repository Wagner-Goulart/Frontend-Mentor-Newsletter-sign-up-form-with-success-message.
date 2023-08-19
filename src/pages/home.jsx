import { motion } from "framer-motion";
import { LeftCard } from "../components/leftCard/lefCard";
import { MainCard } from "../components/mainCard/mainCard";
import { RightCard } from "../components/rightCard/rightCard";

function Home() {

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{delay:0.2, type:'spring', stiffness: 50 }}
        >
            <MainCard>
                <LeftCard />
                <RightCard />
            </MainCard>
        </motion.div>
    )
}

export { Home }