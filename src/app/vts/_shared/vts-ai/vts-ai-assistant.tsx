"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VtsAiHeader from "./_vts-ai-header";

type FlowType = "new-visitor" | "book-room" | "access-amenities" | "order-food" | null;
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
}

interface VtsAiAssistantProps {
  className?: string;
  isOpen: boolean;
}

export default function VtsAiAssistant({ className, isOpen }: VtsAiAssistantProps) {
  const [currentFlow, setCurrentFlow] = useState<FlowType>(null);
  const [flowState, setFlowState] = useState<FlowState>({});
  const [step, setStep] = useState(0);

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

  const resetConversation = () => {
    setCurrentFlow(null);
    setFlowState({});
    setStep(0);
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
          <div className="relative z-50 h-[calc(100%-56px)] w-full overflow-auto rounded-[1.25rem] bg-white text-sm">
            <div className="flex h-full flex-col overflow-auto p-4">{renderFlow()}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
