'use client';
import Image from 'next/image';
import { CustomButton } from '@/components';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Start your day with <span className="hero__sub">A-Mart Express</span>-
          faster than ever!
        </h1>
        <p className="hero__subtitle">
          Streamline your morning routine with the a-mart experience to get you
          in and on your way.
        </p>
        <CustomButton
          title="Show Now"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/coffee.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
