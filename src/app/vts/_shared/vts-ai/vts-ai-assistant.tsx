"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VtsAiHeader from "./_vts-ai-header";

type FlowType = "new-visitor" | "book-room" | "access-amenities" | "order-food" | "portfolio-analyst" | null;
type RoomType = "Conference Room" | "Focus Room" | "Board Room" | null;
type PassType = "QR Pass" | "Printed Pass" | null;
type AmenityType = "Gym" | "Sauna" | "Meditation Room" | "Therapy Room" | null;
type RestaurantType = "Subway" | "Chipotle" | "Sweetgreen" | "Starbucks" | null;

interface FlowState {
  // New Visitor
  visitorName?: string;
  visitorDateTime?: string;
  passType?: PassType;

  // Book Room
  roomType?: RoomType;
  roomDateTime?: string;

  // Access Amenities
  amenityType?: AmenityType;
  amenityDateTime?: string;

  // Order Food
  restaurant?: RestaurantType;
  orderDetails?: string;
  deliveryTime?: string;

  // Portfolio Analysis
  selectedAnalysis?: "expiring-leases" | "declining-satisfaction" | "blueriver-retention";
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface VtsAiAssistantProps {
  className?: string;
  isOpen: boolean;
}

const formatText = (text: string | string[]) => {
  if (Array.isArray(text)) {
    return text.map((line, index) => (
      <Fragment key={index}>
        {line.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={`${index}-${partIndex}`}>{part.slice(2, -2)}</strong>;
          }
          return <Fragment key={`${index}-${partIndex}`}>{part}</Fragment>;
        })}
      </Fragment>
    ));
  }
  
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
};

export default function VtsAiAssistant({ className, isOpen }: VtsAiAssistantProps) {
  const [currentFlow, setCurrentFlow] = useState<FlowType>(null);
  const [flowState, setFlowState] = useState<FlowState>({});
  const [step, setStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const resetConversation = () => {
    setCurrentFlow(null);
    setFlowState({});
    setStep(0);
    setChatMessages([]);
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || isLoading) return;

    const userMessage = chatInput.trim();
    setChatInput("");
    setIsLoading(true);

    // Add user message
    setChatMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAvHeDTReKaVUPZMxdCZ6LeCw7Su88tsBI`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a helpful property management AI assistant for VTS Activate. Help users with property management questions, building amenities, visitor management, room bookings, and general inquiries. Keep responses concise and helpful.\n\nUser question: ${userMessage}`,
                  },
                ],
              },
            ],
          }),
        },
      );

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request.";

      // Add AI response
      setChatMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const startFlow = (flow: FlowType) => {
    setCurrentFlow(flow);
    setStep(1);
    setFlowState({});
  };

  const renderFlowStarters = () => (
    <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <p className="mb-4 text-left">Hi, I&apos;m your VTS Assistant. How can I help you today?</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200"
        onClick={() => startFlow("new-visitor")}
      >
        <div className="flex items-center gap-2">
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
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>
          <span className="font-medium">New Visitor</span>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200"
        onClick={() => startFlow("book-room")}
      >
        <div className="flex items-center gap-2">
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <span className="font-medium">Book a Room</span>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200"
        onClick={() => startFlow("access-amenities")}
      >
        <div className="flex items-center gap-2">
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
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
          <span className="font-medium">Access Amenities</span>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200"
        onClick={() => startFlow("order-food")}
      >
        <div className="flex items-center gap-2">
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="font-medium">Order Food</span>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200"
        onClick={() => startFlow("portfolio-analyst")}
      >
        <div className="flex items-center gap-2">
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
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>
          <span className="font-medium">Portfolio Analyst</span>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderNewVisitorFlow = () => {
    if (step === 1) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Great! What&apos;s the visitor&apos;s full name?
          </motion.div>
          <input
            type="text"
            placeholder="Enter visitor name..."
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                setFlowState({ ...flowState, visitorName: e.currentTarget.value });
                setStep(2);
              }
            }}
            autoFocus
          />
        </motion.div>
      );
    } else if (step === 2) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.visitorName}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            When will they arrive?
          </motion.div>
          <input
            type="datetime-local"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            onChange={(e) => {
              if (e.currentTarget.value) {
                setFlowState({ ...flowState, visitorDateTime: e.currentTarget.value });
                setStep(3);
              }
            }}
            autoFocus
          />
        </motion.div>
      );
    } else if (step === 3) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {new Date(flowState.visitorDateTime!).toLocaleString()}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Do you want a QR visitor pass or printed pass?
          </motion.div>
          <div className="flex gap-2">
            <button
              className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 flex-1 rounded-lg border border-purple-300 px-4 py-2 transition-all duration-200"
              onClick={() => {
                setFlowState({ ...flowState, passType: "QR Pass" });
                setStep(4);
              }}
            >
              QR Pass
            </button>
            <button
              className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 flex-1 rounded-lg border border-purple-300 px-4 py-2 transition-all duration-200"
              onClick={() => {
                setFlowState({ ...flowState, passType: "Printed Pass" });
                setStep(4);
              }}
            >
              Printed Pass
            </button>
          </div>
        </motion.div>
      );
    } else if (step === 4) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.passType}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Perfect. Visitor pass for <strong>{flowState.visitorName}</strong> on{" "}
            <strong>{new Date(flowState.visitorDateTime!).toLocaleString()}</strong> with{" "}
            <strong>{flowState.passType}</strong> has been created.
          </motion.div>
          <button className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-4 py-2 text-white transition-all duration-200 hover:brightness-120">
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            {flowState.passType === "QR Pass" ? "Download QR Code" : "Print Pass"}
          </button>
        </motion.div>
      );
    }
  };

  const renderBookRoomFlow = () => {
    if (step === 1) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Which type of room would you like to book?
          </motion.div>
          <div className="flex flex-col gap-2">
            {(["Conference Room", "Focus Room", "Board Room"] as RoomType[]).map((room) => (
              <button
                key={room}
                className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border border-purple-300 px-4 py-2 text-left transition-all duration-200"
                onClick={() => {
                  setFlowState({ ...flowState, roomType: room });
                  setStep(2);
                }}
              >
                {room}
              </button>
            ))}
          </div>
        </motion.div>
      );
    } else if (step === 2) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.roomType}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            When do you need the room?
          </motion.div>
          <input
            type="datetime-local"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            onChange={(e) => {
              if (e.currentTarget.value) {
                setFlowState({ ...flowState, roomDateTime: e.currentTarget.value });
                setStep(3);
              }
            }}
            autoFocus
          />
        </motion.div>
      );
    } else if (step === 3) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {new Date(flowState.roomDateTime!).toLocaleString()}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100 p-4"
          >
            <h3 className="mb-3 font-semibold">Booking Confirmation</h3>
            <div className="mb-3 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Room Type:</span>
                <span className="font-medium">{flowState.roomType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-medium">{new Date(flowState.roomDateTime!).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">1 hour</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-4 py-2 text-white transition-all duration-200 hover:brightness-120"
                onClick={() => setStep(4)}
              >
                Confirm Booking
              </button>
              <button
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-all duration-200 hover:bg-gray-50"
                onClick={resetConversation}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (step === 4) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Your <strong>{flowState.roomType}</strong> has been booked for{" "}
            <strong>{new Date(flowState.roomDateTime!).toLocaleString()}</strong>. Confirmation sent to your email.
          </motion.div>
        </motion.div>
      );
    }
  };

  const renderAccessAmenitiesFlow = () => {
    if (step === 1) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Here are the amenities available right now. Which would you like to access?
          </motion.div>
          <div className="flex flex-col gap-2">
            {(["Gym", "Sauna", "Meditation Room", "Therapy Room"] as AmenityType[]).map((amenity) => (
              <button
                key={amenity}
                className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border border-purple-300 px-4 py-2 text-left transition-all duration-200"
                onClick={() => {
                  setFlowState({ ...flowState, amenityType: amenity });
                  setStep(2);
                }}
              >
                {amenity}
              </button>
            ))}
          </div>
        </motion.div>
      );
    } else if (step === 2) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.amenityType}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            When would you like to use the {flowState.amenityType}?
          </motion.div>
          <input
            type="datetime-local"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            onChange={(e) => {
              if (e.currentTarget.value) {
                setFlowState({ ...flowState, amenityDateTime: e.currentTarget.value });
                setStep(3);
              }
            }}
            autoFocus
          />
        </motion.div>
      );
    } else if (step === 3) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {new Date(flowState.amenityDateTime!).toLocaleString()}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100 p-4"
          >
            <h3 className="mb-3 font-semibold">Access Confirmation</h3>
            <div className="mb-3 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Amenity:</span>
                <span className="font-medium">{flowState.amenityType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-medium">{new Date(flowState.amenityDateTime!).toLocaleString()}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-4 py-2 text-white transition-all duration-200 hover:brightness-120"
                onClick={() => setStep(4)}
              >
                Confirm Access
              </button>
              <button
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-all duration-200 hover:bg-gray-50"
                onClick={resetConversation}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (step === 4) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Access to the <strong>{flowState.amenityType}</strong> reserved for{" "}
            <strong>{new Date(flowState.amenityDateTime!).toLocaleString()}</strong>. Enjoy!
          </motion.div>
        </motion.div>
      );
    }
  };

  const renderOrderFoodFlow = () => {
    if (step === 1) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Hungry? Here are today&apos;s restaurant partners:
          </motion.div>
          <div className="grid grid-cols-2 gap-2">
            {(["Subway", "Chipotle", "Sweetgreen", "Starbucks"] as RestaurantType[]).map((restaurant) => (
              <button
                key={restaurant}
                className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border border-purple-300 px-4 py-2 transition-all duration-200"
                onClick={() => {
                  setFlowState({ ...flowState, restaurant });
                  setStep(2);
                }}
              >
                {restaurant}
              </button>
            ))}
          </div>
        </motion.div>
      );
    } else if (step === 2) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.restaurant}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            What would you like to order?
          </motion.div>
          <textarea
            placeholder="e.g., Turkey sub with lettuce, tomato, and mayo..."
            className="min-h-24 rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && e.currentTarget.value) {
                e.preventDefault();
                setFlowState({ ...flowState, orderDetails: e.currentTarget.value });
                setStep(3);
              }
            }}
            autoFocus
          />
        </motion.div>
      );
    } else if (step === 3) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.orderDetails}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            When should it be delivered?
          </motion.div>
          <input
            type="time"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            onChange={(e) => {
              if (e.currentTarget.value) {
                setFlowState({ ...flowState, deliveryTime: e.currentTarget.value });
                setStep(4);
              }
            }}
            autoFocus
          />
        </motion.div>
      );
    } else if (step === 4) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.deliveryTime}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100 p-4"
          >
            <h3 className="mb-3 font-semibold">Order Confirmation</h3>
            <div className="mb-3 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Restaurant:</span>
                <span className="font-medium">{flowState.restaurant}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-600">Order:</span>
                <span className="font-medium">{flowState.orderDetails}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Time:</span>
                <span className="font-medium">{flowState.deliveryTime}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-4 py-2 text-white transition-all duration-200 hover:brightness-120"
                onClick={() => setStep(5)}
              >
                Confirm Order
              </button>
              <button
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-all duration-200 hover:bg-gray-50"
                onClick={resetConversation}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (step === 5) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Order placed with <strong>{flowState.restaurant}</strong>. Your food will be delivered at{" "}
            <strong>{flowState.deliveryTime}</strong>. Bon appétit!
          </motion.div>
        </motion.div>
      );
    }
  };

  const renderPortfolioAnalystFlow = () => {
    if (step === 1) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Welcome to Portfolio Analysis. Select an analysis to review:
          </motion.div>
          <div className="flex flex-col gap-2">
            <button
              className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border border-purple-300 px-4 py-2 text-left transition-all duration-200"
              onClick={() => {
                setFlowState({ ...flowState, selectedAnalysis: "expiring-leases" });
                setStep(2);
              }}
            >
              Which tenants have leases expiring in the next 18 months and high unresolved work orders?
            </button>
            <button
              className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border border-purple-300 px-4 py-2 text-left transition-all duration-200"
              onClick={() => {
                setFlowState({ ...flowState, selectedAnalysis: "declining-satisfaction" });
                setStep(2);
              }}
            >
              Show buildings with declining Host survey satisfaction and above-average response times
            </button>
            <button
              className="hover:bg-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border border-purple-300 px-4 py-2 text-left transition-all duration-200"
              onClick={() => {
                setFlowState({ ...flowState, selectedAnalysis: "blueriver-retention" });
                setStep(2);
              }}
            >
              What is the best retention strategy for BlueRiver 3PL?
            </button>
          </div>
        </motion.div>
      );
    } else if (step === 2) {
      const analysisContent = {
        "expiring-leases": {
          summary: "Across the A&B Logistics portfolio, **23 tenants** (8.1M sf; **$54.2M** annual rent) have leases expiring within **18 months and ≥5 unresolved work orders older than 14 days.**\n\nThese accounts represent 38% of the 2026-2027 expiries by rent and 71% of open WO aging risk.",
          insights: [
            "**Top risk cohort (by rent):**",
            "• BlueRiver 3PL – DFW Cross-Dock 12 – Mar '26 – 14 open WOs (avg age 21d; 3 critical: dock doors, roof leak, truck court potholes)",
            "• ParcelPro Fulfillment – NJ Turnpike Park Bldg 7 – Jan '26 – 9 open WOs (2 safety)",
            "• NorthStar Auto Parts – IE West Hub 3 – Jun '26 – 12 open WOs (HVAC & lighting)",
            "\n**Renewal likelihood** drops 26% historically when tenants carry >7 aged WOs into the 12-month pre-expiry window; this cohort is trending there now.",
            "\n**Root causes** cluster around dock equipment (31%), roof/water intrusion (22%), and yard/traffic control (18%)—all directly impacting throughput."
          ],
          action: 'Launch a "Fix-then-Renew" sprint—48-hour triage + GM walk-through—prioritized by rent at risk; fold into renewal proposals within 30 days.',
          followUps: [
            "How are the top risk cohorts tenant satisfaction survey responses?",
            "How are rents in top risk cohort markets?"
          ]
        },
        "declining-satisfaction": {
          summary: "**8 buildings** show a ≥10-point drop in Host satisfaction over the last 90 days and first-response times >150% of portfolio average (19h vs 8h). Combined, they house 41 tenants (5.4M sf) and $29.6M of annual rent.",
          insights: [
            "**Worst deltas:** IE Gateway 4 (-18 pts; 22h FR), DFW Cross-Dock 12 (-15 pts; 20h), NJ Turnpike B7 (-13 pts; 19h).",
            "\nComment themes: **dock scheduling conflicts, restroom/cleaning gaps, yard congestion** during peak inbound windows.",
            "\nBuildings with **vendor changeovers** in the last 60 days saw 2.3× slower response; weekend coverage is the bottleneck."
          ],
          action: 'Stand up "Ops Prime Hours" (Mon–Sat 6a–10a) at flagged sites + reinstate SLA 8h FR; expect +9–12 pts Host recovery inside one cycle.',
          followUps: [
            "How are tenant satisfaction survey responses tracking at those 8 buildings?"
          ]
        },
        "blueriver-retention": {
          summary: "BlueRiver 3PL, occupying 650k sf at DFW Cross-Dock 12, faces lease expiry in March 2026.\n\nWith 14 unresolved work orders (avg. age 21 days, including 3 critical dock/roof issues), Host satisfaction has declined -15 points over the last quarter.\n\nBlueRiver contributes $8.4M annual rent - ~7% below current submarket rates - and anchors one of the top five logistics hubs. Retention probability is currently 0.62 without intervention.",
          insights: [
            "WO backlog is eroding trust: **40% of BlueRiver's survey comments** reference slow fixes; unresolved roof leaks and potholes in the truck court are cited in 3 renewal risk flags.",
            "\nRent positioning: BlueRiver currently pays ~7% below submarket average, making them a retention priority—competitors can undercut on quality of ops, not price.",
            "\nHistorical pattern: In similar industrial tenants with high WO, proactive ops capex reduced churn by 32% and unlocked 24-36 month renewals."
          ],
          action: [
            "**Immediate Ops Sprint (0-30 days)**",
            "\n• Clear all 14 WOs with 48-hour triage; prioritize dock door modernization (top driver of tenant complaints).",
            "\n• Launch Ops Prime Hours coverage (6a–10a Mon–Sat) at DFW 12.",
            "\n• Schedule GM + CBRE + BlueRiver COO walk-through to visibly reset trust.",
            "\n\n**Capex-Linked Renewal Offer (30-60 days)**",
            "\n• Package dock modernization + roof membrane scope as part of renewal.",
            "\n• Offer 24-month renewal at market –1% with 3 months rent credit contingent on capex completion.",
            "\n• Tie rent step-ups to SLAs (8h response / 48h fix) to align with BlueRiver's service commitments.",
            "\n\n**Strategic Account Play (60-120 days)**",
            "\n• Propose exclusive yard management pilot (traffic control + scheduling) as value-add differentiator.",
            "\n• Engage BlueRiver's top 3PL client (from CRM integration) to co-sponsor efficiency metrics, reinforcing partnership value.",
            "\n• Introduce preferred tenant renewal path—giving BlueRiver first option on expansion space at DFW."
          ],
          followUps: [
            "What are the current market rates for similar facilities?",
            "How does BlueRiver's operational performance compare to portfolio averages?"
          ]
        }
      };

      const content = flowState.selectedAnalysis ? analysisContent[flowState.selectedAnalysis] : analysisContent["expiring-leases"];

      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-gray-200 max-w-4/5 self-end rounded-2xl border border-gray-200 px-4 py-3"
          >
            {flowState.selectedAnalysis === "expiring-leases" && "Which tenants have leases expiring in the next 18 months and high unresolved work orders?"}
            {flowState.selectedAnalysis === "declining-satisfaction" && "Show buildings with declining Host survey satisfaction and above-average response times"}
            {flowState.selectedAnalysis === "blueriver-retention" && "What is the best retention strategy for BlueRiver 3PL?"}
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.div variants={itemVariants}>
              <h4 className="mb-2 text-sm font-medium text-gray-600">Summary</h4>
              <p className="whitespace-pre-line text-sm text-gray-600 leading-relaxed">{formatText(content.summary)}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="mb-2 text-sm font-medium text-gray-600">Key Insights</h4>
              <ul className="flex flex-col gap-2">
                {content.insights.map((insight, index) => (
                  <li key={index} className="text-sm text-gray-600 leading-relaxed">{formatText(insight)}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="mb-2 text-sm font-medium text-gray-600">Suggested Action:</h4>
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{formatText(content.action)}</div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center gap-4">
              <button className="text-vts-purple-700 hover:text-vts-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-.75m0-1.896V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M12 10.5h.008v.008H12v-.008Z" />
                </svg>
              </button>
              <button className="text-vts-purple-700 hover:text-vts-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </button>
              <button className="text-vts-purple-700 hover:text-vts-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
              </button>
              <button className="text-vts-purple-700 hover:text-vts-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
              </button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-600">Suggested follow-ups</h4>
              <button className="text-sm text-purple-700 hover:text-purple-800">Show all</button>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              {content.followUps.map((followUp, index) => (
                <button
                  key={index}
                  className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-3 py-2 text-left text-sm transition-all duration-200"
                >
                  {followUp}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mt-4 flex gap-2">
            <button
              className="flex items-center gap-2 rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-4 py-2 text-white transition-all duration-200 hover:brightness-120"
              onClick={() => setStep(3)}
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Report
            </button>
            <button
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-all duration-200 hover:bg-gray-50"
              onClick={() => setStep(1)}
            >
              Back
            </button>
          </div>
        </motion.div>
      );
    } else if (step === 3) {
      return (
        <motion.div className="flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3"
          >
            Your portfolio analysis report has been generated. You can download it or share it with your team.
          </motion.div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-4 py-2 text-white transition-all duration-200 hover:brightness-120">
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Report
            </button>
          </div>
        </motion.div>
      );
    }
  };

  const renderFlow = () => {
    if (!currentFlow) return renderFlowStarters();

    switch (currentFlow) {
      case "new-visitor":
        return renderNewVisitorFlow();
      case "book-room":
        return renderBookRoomFlow();
      case "access-amenities":
        return renderAccessAmenitiesFlow();
      case "order-food":
        return renderOrderFoodFlow();
      case "portfolio-analyst":
        return renderPortfolioAnalystFlow();
      default:
        return renderFlowStarters();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`layered-shadow animate-ai-linear-gradient z-50 flex h-180 w-lg flex-col rounded-4xl bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_100%)] bg-[length:200%_200%] p-4 text-gray-700 ${className}`}
        >
          <VtsAiHeader onReset={resetConversation} showPersonaToggle={false} />
          <div className="relative z-50 flex h-[calc(100%-56px)] w-full flex-col rounded-[1.25rem] bg-white text-sm">
            <div className="flex flex-1 flex-col overflow-auto p-4">
              {renderFlow()}
              
              {/* Chat Messages */}
              {chatMessages.length > 0 && (
                <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`max-w-4/5 rounded-2xl px-4 py-3 ${
                        msg.role === "user"
                          ? "bg-vts-gray-200 self-end border border-gray-200"
                          : "bg-vts-purple-50 self-start"
                      }`}
                    >
                      {msg.content}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="bg-vts-purple-50 max-w-4/5 self-start rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: "0.1s" }} />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400" style={{ animationDelay: "0.2s" }} />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              )}
            </div>
            
            {/* Chat Input Bar */}
            <div className="flex items-center gap-2 border-t border-gray-200 p-4">
              <input
                ref={inputRef}
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendChatMessage();
                  }
                }}
                placeholder="Ask me anything about property management..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                disabled={isLoading}
              />
              <button
                onClick={sendChatMessage}
                disabled={isLoading || !chatInput.trim()}
                className="rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] p-2 text-white transition-all duration-200 hover:brightness-120 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
