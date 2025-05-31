
import Deatils from './details';
import { ImageSection } from './goal';
import HeroSlider from './hero';

export default function Page() {

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Banner */}
      <HeroSlider />   

      <section className="py-16">
      <div className="container mx-auto px-4">
        <Deatils />
        </div>
      </section>

      <section>
        <ImageSection />
      </section>

    
    </div>
  );
}