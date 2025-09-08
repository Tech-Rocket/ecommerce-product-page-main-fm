import Header from "./components/ui/header/header";
import HeroSection from "./components/hero-section/hero-section";

export default function App() {
  return (
    <>
      <Header />
      <div className="max-w mb-8">
        <HeroSection />
        <div className="space-y-4 py-6 px-5">
          <p className="text-sm uppercase tracking-wider text-[#6D717A] font-bold">
            Sneaker company
          </p>
          <h3 className="text-3xl font-bold text-[#1E2126]">
            Fall Limited Edition Sneakers
          </h3>
          <p className="text-sm text-[#6D717A] font-medium">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="px-5 w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-3xl font-bold text-[#1E2126] flex items-center">
              $125.00
              <span className="bg-black text-white ml-3 px-2 py-1 rounded text-sm font-bold">
                50%
              </span>
            </h3>

            <p className="text-[#6D717A] text-sm font-semibold line-through">
              $250.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
