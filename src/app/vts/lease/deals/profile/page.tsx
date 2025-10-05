"use client";

export default function ActivatePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Use the exact screenshot as background */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.imgur.com/placeholder-activate.jpg')`, // You'll need to upload the screenshot
          backgroundColor: '#f3f4f6', // Fallback while we create the exact replica
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
            <div className="flex-1 overflow-auto bg-gray-50">
              {/* Hero Section with City Background */}
              <div className="relative h-[320px] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2400&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-purple-50/30 to-pink-50/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-center text-7xl font-bold tracking-tight">
                    <span className="text-[#1e3a5f]">ax</span>
                    <span className="text-[#ef4444]">ii</span>
                    <span className="text-[#1e3a5f]">s</span>
                  </h1>
                </div>
              </div>

              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] px-8 py-5">
                <h2 className="text-xl font-semibold text-white">Welcome to Bay Adelaide Centre</h2>
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-2 gap-6 p-8">
                <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-10 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-3 rounded-full bg-blue-50 p-3">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-gray-900">Contact</h3>
                  <p className="text-sm text-gray-600">Our Team</p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-10 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-3 rounded-full bg-blue-50 p-3">
                    <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-gray-900">Service</h3>
                  <p className="text-sm text-gray-600">Requests</p>
                </div>
              </div>

              {/* Events Section */}
              <div className="px-8 pb-8">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Happening at Bay Adelaide Centre</h2>
                  <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    View All
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-5">
                  {/* Hollywood Event */}
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="h-44 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500" />
                    <div className="p-3">
                      <p className="mb-1 text-xs text-gray-500">Wednesday, September 10 at 1:00 PM</p>
                      <h3 className="text-sm font-semibold text-gray-900">Hollywood in Toronto</h3>
                    </div>
                  </div>

                  {/* Summer Sounds */}
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="h-44 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200" />
                    <div className="p-3">
                      <p className="mb-1 text-xs text-gray-500">Thursdays at 12:00 PM</p>
                      <h3 className="text-sm font-semibold text-gray-900">Summer Sounds</h3>
                    </div>
                  </div>

                  {/* Almonds Article */}
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                    <div
                      className="h-44 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop')`,
                      }}
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-gray-900">Almonds aren't the only culprit</h3>
                    </div>
                  </div>

                  {/* Wellness Sessions */}
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                    <div
                      className="h-44 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop')`,
                      }}
                    />
                    <div className="p-3">
                      <p className="mb-1 text-xs text-gray-500">September 2025</p>
                      <h3 className="text-sm font-semibold text-gray-900">Weekly Wellness Sessions</h3>
                    </div>
                  </div>

                  {/* Catering Card - Spans 2 columns */}
                  <div className="col-span-2 overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="flex h-full">
                      <div
                        className="w-1/2 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop')`,
                        }}
                      />
                      <div className="flex w-1/2 flex-col justify-center p-6">
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Catering made simple</h3>
                        <p className="text-sm text-gray-600">Food ordering services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}