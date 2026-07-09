import { Hero } from "@/components/hero";
import { InfoSection } from "@/components/info-section";
import { SuppliesSection } from "@/components/supplies-section";

export default function SuppliesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero/>
            <SuppliesSection/>
            <InfoSection/>
        </main>
    )
}