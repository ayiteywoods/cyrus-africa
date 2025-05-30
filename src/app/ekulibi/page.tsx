
import HeroSlider from './hero';
import { ImageSection } from './goal';

export default function Page() {

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Banner */}
      <HeroSlider />   

      <section>
        <ImageSection />
      </section>

    
    </div>
  );
}