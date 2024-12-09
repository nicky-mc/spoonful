import React, { useState } from "react";

const InfoModal = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="modal">
      <div className="modal-box max-w-4xl">
        <h3 className="font-bold text-xl">Understanding Spoon Theory</h3>
        <p className="py-4">
          Spoon Theory was developed by Christine Miserandino as a way to explain the energy limitations experienced by people with chronic illnesses. However, it has also been widely adopted by the neurodivergent (ND) community to describe how energy, focus, and mental capacity can vary throughout the day.
        </p>

        <h4 className="font-bold text-lg mt-4 cursor-pointer" onClick={() => toggleSection('spoons')}>
          What Are Spoons?
        </h4>
        {openSection === 'spoons' && (
          <p className="py-4">
            Spoons are a metaphor for energy. Everyone starts their day with a certain number of spoons, representing their available energy. For neurotypical (NT) individuals, spoons may replenish more easily, and tasks may require fewer spoons. For neurodivergent (ND) individuals, everyday tasks like getting dressed, responding to emails, or interacting socially might consume a significantly higher number of spoons.
          </p>
        )}

        <h4 className="font-bold text-lg mt-4 cursor-pointer" onClick={() => toggleSection('energyUse')}>
          Neurotypical (NT) vs. Neurodivergent (ND) Energy Use
        </h4>
        {openSection === 'energyUse' && (
          <ul className="list-disc list-inside py-4">
            <li>
              <strong>NT Individuals:</strong> Tend to have more consistent energy levels and may find it easier to replenish spoons through rest, exercise, or food.
            </li>
            <li>
              <strong>ND Individuals:</strong> May experience more fluctuating energy levels due to conditions like ADHD, autism, or anxiety. Tasks requiring focus, emotional regulation, or sensory processing can deplete spoons faster.
            </li>
          </ul>
        )}

        <h4 className="font-bold text-lg mt-4 cursor-pointer" onClick={() => toggleSection('spoonDrainers')}>
          Common Spoon Drainers for ND Individuals
        </h4>
        {openSection === 'spoonDrainers' && (
          <ul className="list-disc list-inside py-4">
            <li>Sensory overload from loud noises, bright lights, or crowded spaces.</li>
            <li>Executive dysfunction making it difficult to initiate or complete tasks.</li>
            <li>Social interactions, especially in unfamiliar or high-demand environments.</li>
            <li>Masking (suppressing ND traits to appear more neurotypical).</li>
            <li>Unpredictable schedules or frequent interruptions.</li>
            <li>Processing large amounts of information or switching between tasks.</li>
          </ul>
        )}

        <h4 className="font-bold text-lg mt-4 cursor-pointer" onClick={() => toggleSection('reclaimSpoons')}>
          Ways to Reclaim Spoons for ND Individuals
        </h4>
        {openSection === 'reclaimSpoons' && (
          <p className="py-4">
            Reclaiming spoons involves intentional rest and self-care. Here are some strategies tailored to ND individuals:
          </p>
        )}
        {openSection === 'reclaimSpoons' && (
          <ul className="list-disc list-inside py-4">
            <li>
              <strong>Stimming:</strong> Engage in repetitive, soothing movements like hand-flapping, rocking, or using sensory toys to regulate emotions and sensory input.
            </li>
            <li>
              <strong>Scheduled Breaks:</strong> Use timers or apps to ensure regular breaks between tasks. Avoid overloading yourself with back-to-back activities.
            </li>
            <li>
              <strong>Low-Stimulation Environments:</strong> Create quiet, dimly lit spaces where you can recharge without sensory distractions.
            </li>
            <li>
              <strong>Focus on Nourishment:</strong> Eat energy-rich foods, stay hydrated, and avoid foods that may trigger sensory discomfort (e.g., certain textures or strong flavors).
            </li>
            <li>
              <strong>Delegate or Automate:</strong> Use tools, apps, or support networks to offload repetitive or energy-draining tasks.
            </li>
            <li>
              <strong>Gentle Movement:</strong> Activities like yoga, stretching, or slow walks can help restore energy without overwhelming your system.
            </li>
            <li>
              <strong>Say No:</strong> Set boundaries and learn to decline tasks or events that feel too overwhelming.
            </li>
            <li>
              <strong>Engage in Special Interests:</strong> Spending time on hobbies or passions can refuel your emotional energy.
            </li>
          </ul>
        )}

        <h4 className="font-bold text-lg mt-4 cursor-pointer" onClick={() => toggleSection('plannerHelp')}>
          How This Planner Helps
        </h4>
        {openSection === 'plannerHelp' && (
          <p className="py-4">
            This planner is designed to help ND individuals manage their spoons effectively:
          </p>
        )}
        {openSection === 'plannerHelp' && (
          <ul className="list-disc list-inside py-4">
            <li>
              <strong>Task Prioritization:</strong> By organizing tasks into tiers, you can focus on the essentials first (Tier 1) before deciding whether to tackle additional tasks.
            </li>
            <li>
              <strong>Spoon Tracking:</strong> Track your energy throughout the day to prevent burnout.
            </li>
            <li>
              <strong>Break Reminders:</strong> Use timers to schedule regular breaks and avoid pushing yourself too hard.
            </li>
            <li>
              <strong>Reflection:</strong> Use the journal feature to identify spoon-draining activities and explore ways to improve your routine.
            </li>
          </ul>
        )}

        <div className="modal-action">
          <label htmlFor="info-modal" className="btn">Got it!</label>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;