import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { LightningIcon } from './icons/LightningIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { DollarIcon } from './icons/DollarIcon';
import type { HowItWorksStep, StepFeature } from '@/data/how-it-works-steps';

interface StepSectionProps extends HowItWorksStep {}

// Map icon names to components
const iconComponents = {
  lightning: LightningIcon,
  cart: ShoppingCartIcon,
  dollar: DollarIcon,
};

export function StepSection({
  stepNumber,
  title,
  description,
  features,
  iconName,
  imageSide,
}: StepSectionProps) {
  const IconComponent = iconComponents[iconName];
  const sectionId = `step-${stepNumber}`;
  const titleId = `step-${stepNumber}-title`;

  const imageContent = (
    <div className="md:w-1/2 mb-8 md:mb-0">
      <div className="relative w-full h-[300px]">
        <div className="absolute inset-0 bg-orange-100 rounded-lg flex items-center justify-center">
          <IconComponent className="w-24 h-24 text-orange-500" aria-hidden="true" />
        </div>
      </div>
    </div>
  );

  const textContent = (
    <div className={`md:w-1/2 ${imageSide === 'left' ? 'md:pl-12' : 'md:pr-12'}`}>
      <h2 id={titleId} className="text-3xl font-bold mb-4">{`${stepNumber}. ${title}`}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature.text} className="flex items-center">
            <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      aria-labelledby={titleId}
      className={`flex flex-col items-center mb-16 ${
        imageSide === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      id={sectionId}
    >
      {imageContent}
      {textContent}
    </section>
  );
}
