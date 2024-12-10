import React, { useState } from "react";

const InfoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setOpenSection(null); // Reset sections when closing
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* Trigger Button */}
      <button className="btn btn-info" onClick={toggleModal}>
        Learn About Spoon Theory
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box max-w-4xl bg-white p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 btn btn-sm btn-circle btn-error"
              onClick={toggleModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <h3 className="font-bold text-xl">Understanding Spoon Theory</h3>
            <p className="py-4">
              Spoon Theory was developed by Christine Miserandino as a way to explain the energy limitations experienced by people with chronic illnesses. It is also widely adopted by the neurodivergent (ND) community to describe how energy, focus, and mental capacity can vary throughout the day.
            </p>

            {/* Collapsible Sections */}
            <h4
              className="font-bold text-lg mt-4 cursor-pointer"
              onClick={() => toggleSection("spoons")}
            >
              What Are Spoons?
            </h4>
            {openSection === "spoons" && (
              <p className="py-4">
                Spoons are a metaphor for energy. Everyone starts their day with a certain number of spoons, representing their available energy. For neurotypical (NT) individuals, spoons may replenish more easily, and tasks may require fewer spoons. For neurodivergent (ND) individuals, everyday tasks can consume a significantly higher number of spoons.
              </p>
            )}

            <h4
              className="font-bold text-lg mt-4 cursor-pointer"
              onClick={() => toggleSection("energyUse")}
            >
              Neurotypical (NT) vs. Neurodivergent (ND) Energy Use
            </h4>
            {openSection === "energyUse" && (
              <ul className="list-disc list-inside py-4">
                <li>
                  <strong>NT Individuals:</strong> Tend to have more consistent energy levels and may find it easier to replenish spoons through rest, exercise, or food.
                </li>
                <li>
                  <strong>ND Individuals:</strong> May experience fluctuating energy levels due to conditions like ADHD, autism, or anxiety. Tasks requiring focus, emotional regulation, or sensory processing can deplete spoons faster.
                </li>
              </ul>
            )}

            <h4
              className="font-bold text-lg mt-4 cursor-pointer"
              onClick={() => toggleSection("spoonDrainers")}
            >
              Common Spoon Drainers for ND Individuals
            </h4>
            {openSection === "spoonDrainers" && (
              <ul className="list-disc list-inside py-4">
                <li>Sensory overload from loud noises, bright lights, or crowded spaces.</li>
                <li>Executive dysfunction making it difficult to initiate or complete tasks.</li>
                <li>Social interactions, especially in unfamiliar or high-demand environments.</li>
                <li>Masking (suppressing ND traits to appear more neurotypical).</li>
                <li>Unpredictable schedules or frequent interruptions.</li>
              </ul>
            )}

            <h4
              className="font-bold text-lg mt-4 cursor-pointer"
              onClick={() => toggleSection("reclaimSpoons")}
            >
              Ways to Reclaim Spoons
            </h4>
            {openSection === "reclaimSpoons" && (
              <ul className="list-disc list-inside py-4">
                <li>
                  <strong>Stimming:</strong> Engage in repetitive, soothing movements like hand-flapping, rocking, or using sensory toys.
                </li>
                <li>
                  <strong>Scheduled Breaks:</strong> Use timers or apps to ensure regular breaks.
                </li>
                <li>
                  <strong>Low-Stimulation Environments:</strong> Create quiet, dimly lit spaces to recharge.
                </li>
              </ul>
            )}

            <h4
              className="font-bold text-lg mt-4 cursor-pointer"
              onClick={() => toggleSection("plannerHelp")}
            >
              How This Planner Helps
            </h4>
            {openSection === "plannerHelp" && (
              <ul className="list-disc list-inside py-4">
                <li>
                  <strong>Task Prioritization:</strong> Focus on essentials first (Tier 1) before tackling additional tasks.
                </li>
                <li>
                  <strong>Spoon Tracking:</strong> Monitor your energy throughout the day.
                </li>
                <li>
                  <strong>Break Reminders:</strong> Use timers to schedule regular breaks.
                </li>
              </ul>
            )}

            {/* Footer Actions */}
            <div className="modal-action mt-6">
              <button className="btn btn-secondary" onClick={toggleModal}>
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;
