export interface StepFeature {
  text: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  features: StepFeature[];
  iconName: 'lightning' | 'cart' | 'dollar'; // Identifier for the icon
  imageSide: 'left' | 'right';
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Install the Extension',
    description:
      'Add Honey to your browser in just one click. We support Chrome, Firefox, and Safari.',
    features: [
      { text: 'Free to install' },
      { text: 'Works on all major browsers' },
      { text: 'No registration required' },
    ],
    iconName: 'lightning',
    imageSide: 'left',
  },
  {
    stepNumber: 2,
    title: 'Shop as Usual',
    description:
      'Visit your favorite online stores and shop normally. Honey works in the background to find the best deals.',
    features: [
      { text: 'Works on 10,000+ stores' },
      { text: 'Automatic price tracking' },
      { text: 'Real-time deal alerts' },
    ],
    iconName: 'cart',
    imageSide: 'right', // Reversed for alternating layout
  },
  {
    stepNumber: 3,
    title: 'Save Automatically',
    description:
      'At checkout, Honey automatically finds and applies the best coupons and deals to save you money.',
    features: [
      { text: 'Automatic coupon application' },
      { text: 'Cashback rewards' },
      { text: 'Price history tracking' },
    ],
    iconName: 'dollar',
    imageSide: 'left',
  },
];
