"use client";

export default function ActivatePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Rope texture background */}
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: '400px 400px',
            backgroundColor: '#c9b8a0',
          }}
        >
        {/* Recreate the exact Activate interface */}
        <div className="absolute inset-0 flex flex-col bg-white">
          {/* Top Header Bar */}
          <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <svg className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" opacity="0.6" />
                  <path d="M2 12L12 17L22 12" opacity="0.6" />
                </svg>
                <span className="text-[10px] font-semibold text-gray-800">Activate</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-lg p-1.5 hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="rounded-lg p-1.5 hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="rounded-lg p-1.5 hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5">
                <span className="text-sm font-medium text-gray-900">axiis</span>
                <span className="text-sm text-gray-600">Bay Adelaide Centre</span>
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Content with Sidebar */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar */}
            <div className="flex w-[72px] flex-col items-center gap-6 border-r border-gray-200 bg-white py-6">
              <button className="flex flex-col items-center gap-1 text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-[11px] font-medium">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-[11px]">Building</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-[11px]">Retail</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-[11px]">Menu</span>
              </button>
            </div>

            {/* Main Content Area */}
            <div
              className="flex-1 overflow-auto bg-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
                backgroundSize: '400px 400px',
                backgroundColor: '#c9b8a0',
              }}
            >
              {/* Otto Hero Section */}
              <div className="relative flex h-80 items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')`,
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-300 opacity-90 mix-blend-multiply" />
                <div className="relative z-10 text-center">
                  <h1 className="mb-2 text-6xl font-bold text-white">Otto</h1>
                  <p className="mb-8 text-xl text-white">by Oxford</p>
                  <h2 className="mb-8 text-2xl font-semibold text-white">Welcome to Richmond-Adelaide Centre</h2>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    <button className="flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-white transition-all hover:bg-blue-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Welcome to Otto
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-white transition-all hover:bg-blue-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                      Order Food
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-white transition-all hover:bg-blue-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      Key Services
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-white transition-all hover:bg-blue-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Happening Section */}
              <div className="relative py-16 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop')`,
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-blue-500 opacity-85 mix-blend-multiply" />
                <div className="relative z-10 px-6">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-white">Happening at Richmond-Adelaide Centre</h2>
                    <button className="text-white hover:underline">View All</button>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {/* Event Card 1 */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop')`,
                        }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">NOW OPEN: Everyside Social Eatery & Taphouse</h3>
                        <p className="text-sm text-gray-600">Your new local eatery is here! Tap to view features, happy hour, and reserve your...</p>
                      </div>
                    </div>
                    
                    {/* Event Card 2 */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop')`,
                        }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Live Music Moments Presented by Oxford</h3>
                        <p className="text-sm text-gray-600">Enjoy live music at Richmond-Adelaide Centre.</p>
                      </div>
                    </div>
                    
                    {/* Event Card 3 */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop')`,
                        }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Coming Soon: Columbus Café & Co</h3>
                        <p className="text-sm text-gray-600">The café next door will be opening soon in the 130 Adelaide W lobby. Tap to lear...</p>
                      </div>
                    </div>
                    
                    {/* Event Card 4 */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop')`,
                        }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Booster Juice Charcoal Menu</h3>
                        <p className="text-sm text-gray-600">Experience the NEW charcoal menu at Booster Juice, available for a limited tim...</p>
                      </div>
                    </div>
                    
                    {/* Event Card 5 */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop')`,
                        }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">What&apos;s Happening at Chefs Hall</h3>
                        <p className="text-sm text-gray-600">Discover events & promotions happening at Richmond-Adelaide Centre&apos;s social...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapsible Sections */}
              <div className="px-6 py-8">
                {/* Amenities */}
                <div
                  className="mb-4 rounded-lg relative bg-blue-900 p-6 text-white transition-all hover:bg-blue-800 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-lg" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold">Amenities</h3>
                  </div>
                </div>
                
                {/* Events */}
                <div
                  className="mb-4 rounded-lg relative bg-blue-900 p-6 text-white transition-all hover:bg-blue-800 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-lg" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold">Events</h3>
                  </div>
                </div>
                
                {/* Retail & Promotions */}
                <div
                  className="mb-4 rounded-lg relative bg-blue-900 p-6 text-white transition-all hover:bg-blue-800 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-lg" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold">Retail & Promotions</h3>
                  </div>
                </div>
                
                {/* Fitness & Wellness */}
                <div
                  className="mb-4 rounded-lg relative bg-blue-900 p-6 text-white transition-all hover:bg-blue-800 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-lg" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold">Fitness & Wellness</h3>
                  </div>
                </div>
                
                {/* Building Notices */}
                <div
                  className="mb-4 rounded-lg relative bg-blue-700 p-6 text-white transition-all hover:bg-blue-600 overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1589178678640-fefe7f8a62e0?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-blue-700 opacity-70 rounded-lg" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold">Building Notices</h3>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-800 px-6 py-8 text-center text-white">
                <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
                <div className="flex justify-center gap-4">
                  <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 text-white transition-all hover:bg-gray-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </button>
                  <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 text-white transition-all hover:bg-gray-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 text-white transition-all hover:bg-gray-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}