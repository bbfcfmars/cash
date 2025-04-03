export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.featured ? 'border-2 border-emerald-600' : ''
              }`}
            >
              {plan.featured && (
                <div className="bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Basic coupon finding',
      'Works on 10,000+ stores',
      'Browser extension',
      'Basic support',
      'Up to 5% savings'
    ],
    featured: false
  },
  {
    name: 'Pro',
    price: '9.99',
    features: [
      'Everything in Free',
      'Priority coupon finding',
      'Cashback rewards',
      'Price tracking',
      'Premium support',
      'Up to 15% savings'
    ],
    featured: true
  },
  {
    name: 'Business',
    price: '29.99',
    features: [
      'Everything in Pro',
      'Team management',
      'Expense tracking',
      'API access',
      'Dedicated support',
      'Up to 25% savings'
    ],
    featured: false
  }
];

const faqs = [
  {
    question: 'How does Click.Save.Shop. work?',
    answer: 'Click.Save.Shop. is a browser extension that automatically finds and applies the best coupons and deals when you shop online. Simply install the extension and shop as you normally would - we\'ll do the rest!'
  },
  {
    question: 'Is Click.Save.Shop. free to use?',
    answer: 'Yes! Our basic version is completely free to use. We also offer premium plans with additional features for those who want to save even more.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We take your privacy seriously and never share your data with third parties. All information is encrypted and stored securely.'
  }
]; 