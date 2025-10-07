"use client";

export default function ActivatePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Use the exact screenshot as background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.imgur.com/otto-oxford-screenshot.jpg')`,
          backgroundColor: '#f3f4f6', // Fallback
        }}
      >
        {/* Use the exact screenshot as the complete background */}
      </div>
    </div>
  );
}