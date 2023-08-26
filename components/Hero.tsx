import Image from 'next/image';
import { CustomButton } from '@/components';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Start your day with A-Mart Xpress - faster than ever!
        </h1>
        <p className="hero__subtitle">
          Streamline your morning routine with the a-mart experience to get you
          in and on your way.{' '}
        </p>
        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
