import React from 'react';

interface StepSectionProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  reverse?: boolean;
}

const StepSection: React.FC<StepSectionProps> = ({
  title,
  description,
  features,
  icon,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center mb-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="relative w-full h-[300px]">
          <div className="absolute inset-0 bg-orange-100 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <div className={`md:w-1/2 ${reverse ? 'md:pr-12' : 'md:pl-12'}`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepSection;
