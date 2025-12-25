import { Hero } from "./components/ui/Hero";
import { Features } from "./components/ui/Features";
import { Cards } from "./components/ui/Cards";
import { Testimonials } from "./components/ui/Testimonials";
import { Footer } from "./components/ui/Footer";

export default function HomePage() {
    return (
        <div className="bg-bg min-h-screen">
            <main>
                <Hero />
                <Features />
                <Cards />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}