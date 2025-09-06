import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-mute-turtle/10 via-white to-pale-turtle/10 animate-gradient">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16 animate-fade-in">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-mute-turtle/10 px-3 py-1 text-sm font-semibold leading-6 text-mute-navy ring-1 ring-inset ring-mute-turtle/20">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium text-navy">
                <span>Just shipped v1.0</span>
                <svg className="h-5 w-5 text-mute-turtle" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-mute-navy sm:text-6xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Save Money on Every Purchase
          </h1>
          <p className="mt-6 text-lg leading-8 text-navy animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Never miss a deal again. Click.Save.Shop. automatically finds and applies the best coupons and cashback offers when you shop online.
          </p>
          <div className="mt-10 flex items-center gap-x-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="/signup"
              className="rounded-md bg-turtle px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mute-turtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mute-turtle hover-lift"
            >
              Get started
            </a>
            <a href="/how-it-works" className="text-sm font-semibold leading-6 text-navy hover:text-mute-navy">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/hero-image.svg"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 