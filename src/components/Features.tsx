import { ShoppingCartIcon, CreditCardIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface Feature {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const features: Feature[] = [
  {
    name: 'Automatic Coupon Finding',
    description: 'Our extension automatically searches for and applies the best available coupons at checkout.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Cashback Rewards',
    description: 'Earn cashback on every purchase from participating stores, automatically credited to your account.',
    icon: CreditCardIcon,
  },
  {
    name: 'Price History Tracking',
    description: 'Track price changes and get notified when items go on sale at your favorite stores.',
    icon: SparklesIcon,
  },
]

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-turtle">Save Faster</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-mute-navy sm:text-4xl">
          Everything you need to save money
        </p>
        <p className="mt-6 text-lg leading-8 text-navy">
          Our browser extension works seamlessly with your favorite stores to automatically find and apply the best deals.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-mute-navy">
                <feature.icon className="h-5 w-5 flex-none text-turtle" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
} 