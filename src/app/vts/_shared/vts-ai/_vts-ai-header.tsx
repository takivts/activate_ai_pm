import { useAppContext, VtsAiPersona } from "../../../context/AppContext";

interface VtsAiHeaderProps {
  onReset?: () => void;
  showPersonaToggle?: boolean;
}

export default function VtsAiHeader({
  onReset,
  showPersonaToggle = true,
}: VtsAiHeaderProps) {
  const { setVtsAiContentType, vtsAiPersona, setVtsAiPersona } = useAppContext();

  const handleResetVtsAi = () => {
    setVtsAiContentType("default");
    onReset?.();
  };

  const personas: VtsAiPersona[] = ["Analyst", "Assistant"];

  return (
    <div className="mb-4 flex flex-auto items-center px-2 text-sm text-white">
      <div className="flex flex-auto items-center gap-1">
        <div className="mr-2 flex size-8">
          <svg className="h-full w-full" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M47.9468 29.5968L36.0295 21.6846L36.0001 21.7035L24.0743 29.6178L15.2571 23.7891L36.0001 10.0189L36.0295 10L56.7662 23.766L47.9468 29.5968Z"
              fill="currentColor"
            />
            <path
              d="M0 24.3111L35.9937 46.862L36 46.8578L72 24.3027V39.3464L36 61.8995L35.9937 61.9037L0 39.3527V24.3111Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h5 className="text-sm font-bold">VTS AI</h5>
      </div>

      {showPersonaToggle && (
        <div className="relative flex flex-auto justify-center rounded-full border-2 border-white/25 bg-black/25 p-1 text-white">
          <div
            className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-white/80 transition-transform duration-200 ease-in-out"
            style={{
              transform: `translateX(${personas.indexOf(vtsAiPersona) * 100}%)`,
            }}
          />
          {personas.map((persona) => (
            <button
              key={persona}
              onClick={() => setVtsAiPersona(persona)}
              className={`relative w-1/2 rounded-full px-1 py-1 text-sm font-medium duration-200 ${
                vtsAiPersona === persona ? "text-vts-purple-700" : "cursor-pointer text-white/50 hover:text-white"
              }`}
            >
              {persona}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-auto justify-end gap-2">
        <span
          className="hover:text-vts-purple-700 flex cursor-pointer justify-end gap-1 rounded-full px-3 py-1 text-white transition-all duration-200 hover:bg-white/80"
          onClick={handleResetVtsAi}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Reset
        </span>
      </div>
    </div>
  );
}
