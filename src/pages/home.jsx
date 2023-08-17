import { LeftCard } from "../components/leftCard/lefCard";
import { MainCard } from "../components/mainCard/mainCard";
import { RightCard } from "../components/rightCard/rightCard";

function Home() {

    return (
        <MainCard>
            <LeftCard />
            <RightCard />
        </MainCard>
    )
}

export { Home }