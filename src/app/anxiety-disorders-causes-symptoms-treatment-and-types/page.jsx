"use client";
import Image from "next/image";
import Footer from "../Footer";
import { motion } from "framer-motion";

/** * SEO CONFIGURATION
 * Title: Anxiety Disorders: Causes, Symptoms, Treatment & Types | Comprehensive Guide
 * Description: An in-depth 1000-word guide on anxiety disorders. Learn about neurobiology, environmental triggers, clinical symptoms, and the latest in therapeutic treatments.
 */

const metadata = {
  title: "Anxiety Disorders: Causes, Symptoms, Treatment & Types",
  description: "A deep-dive educational guide on the neurobiology, types, and recovery paths for anxiety disorders.",
  keywords: [
    "comprehensive anxiety guide",
    "neurobiology of anxiety",
    "GAD vs Panic Disorder",
    "CBT for anxiety",
    "anxiety symptoms and causes",
    "mental health education",
    "anxiety treatment protocols"
  ]
};

export default function ComprehensiveAnxietyBlog() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white shadow-sm border-b border-yellow-50 rounded-b-[3rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 px-6 py-12 md:p-24 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-gray-900">
            Anxiety Disorders: <br />
            <span 
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #FACC15, #E1C16E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Causes, Symptoms, Treatment & Types
            </span>
          </h1>
          <p className="text-gray-600 text-xl font-light leading-relaxed">
            An exhaustive exploration into the mechanics of worry and the science of recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative"
        >
          <Image
            src="/blog6.png" 
            alt="Educational guide to mental health"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ===== Deep Dive Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-gray-800"
      >
        {/* Intro */}
        <div className="prose prose-lg max-w-none">
          <p className="text-2xl leading-relaxed mb-12 font-serif italic border-l-8 border-[#FACC15] pl-8 text-gray-700">
            Anxiety is not merely "stress." It is a sophisticated, albeit often misaligned, survival mechanism. To truly understand anxiety disorders, one must look beyond the surface-level nervousness and into the intricate architecture of the human brain and the history of the individual.
          </p>

          {/* Section 1: What exactly is anxiety? */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is Anxiety?</h2>
            <p className="mb-6">
              At its core, anxiety is the body’s "smoke detector." In a healthy state, it alerts us to potential threats, sharpening our focus and preparing us for action. However, an anxiety disorder occurs when this smoke detector becomes hypersensitive, sounding a deafening alarm at the slightest hint of steam or even when there is no smoke at all.
            </p>
            <p>
              Clinically, it is defined by a state of apprehension or dread regarding future uncertainties. While fear is a response to a <em>real and present</em> danger, anxiety is a response to a <em>perceived and future</em> threat.
            </p>
          </section>

          {/* Section 2: The Biological & Environmental Causes */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FACC15] inline-block">The Multifaceted Causes</h2>
            <div className="grid md:grid-cols-2 gap-10 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#8A6D3B]">1. Neurobiology & Genetics</h3>
                <p className="text-gray-700">
                  Research indicates that individuals with anxiety often have imbalances in neurotransmitters—the brain's chemical messengers. Serotonin, dopamine, and GABA play pivotal roles in regulating mood and relaxation. Furthermore, if a first-degree relative struggles with anxiety, the likelihood of developing a disorder increases, suggesting a strong hereditary component.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#8A6D3B]">2. Environmental Triggers</h3>
                <p className="text-gray-700">
                  The "nature vs. nurture" debate concludes that both matter. Chronic exposure to high-stress environments, childhood trauma (ACEs), or sudden life-altering events (like the loss of a loved one or financial instability) can "rewire" the brain to remain in a state of hyper-vigilance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Detailed Types */}
          <section className="mb-20 bg-gray-50 p-10 rounded-3xl border border-yellow-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Clinical Classifications: The Types</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#E1C16E] text-xl mb-2">Generalized Anxiety Disorder (GAD)</h4>
                <p>Characterized by at least six months of excessive, persistent worry about a variety of different things (e.g., money, health, family) rather than one specific event. Individuals often feel "on edge" constantly.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#E1C16E] text-xl mb-2">Panic Disorder</h4>
                <p>This involves recurrent, unexpected panic attacks. These are sudden periods of intense fear that may include palpitations, sweating, shaking, shortness of breath, or a feeling that one is "going crazy" or dying.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#E1C16E] text-xl mb-2">Social Anxiety Disorder</h4>
                <p>More than just shyness, this is an intense fear of being scrutinized or negatively evaluated by others in social or performance situations, leading to significant avoidance behaviors.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#E1C16E] text-xl mb-2">Specific Phobias & Agoraphobia</h4>
                <p>Agoraphobia involves fear and avoidance of places or situations that might cause panic or feelings of being trapped, while specific phobias target distinct objects like heights, needles, or animals.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Symptoms Breakdown */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Symptomatology</h2>
            <p className="mb-6">Anxiety manifests in a triad of symptoms: Physical, Cognitive, and Behavioral.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FACC15] text-gray-900">
                    <th className="p-4 border">Physical</th>
                    <th className="p-4 border">Cognitive</th>
                    <th className="p-4 border">Behavioral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border">Tachycardia (Rapid Heart Rate)</td>
                    <td className="p-4 border">Catastrophizing (Predicting the worst)</td>
                    <td className="p-4 border">Avoidance of triggers</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="p-4 border">Gastrointestinal Distress</td>
                    <td className="p-4 border">Hyper-focus on threats</td>
                    <td className="p-4 border">Social withdrawal</td>
                  </tr>
                  <tr>
                    <td className="p-4 border">Muscle Tension & Headaches</td>
                    <td className="p-4 border">Memory impairment / Brain fog</td>
                    <td className="p-4 border">Repetitive checking behaviors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Treatment Path */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Path to Recovery: Treatments</h2>
            <p className="mb-6">Modern medicine and psychology offer a high success rate for managing anxiety. The most effective approach is often a combination of the following:</p>
            <ul className="list-decimal pl-6 space-y-4">
              <li><strong>Psychotherapy:</strong> Cognitive Behavioral Therapy (CBT) helps patients identify irrational thought patterns and replace them with realistic ones. Exposure Therapy is also effective for phobias.</li>
              <li><strong>Pharmacology:</strong> SSRIs (Selective Serotonin Reuptake Inhibitors) or SNRIs are often prescribed for long-term management, while Benzodiazepines may be used for short-term, acute relief.</li>
              <li><strong>Neuromodulation:</strong> For treatment-resistant cases, therapies like TMS (Transcranial Magnetic Stimulation) are showing great promise.</li>
            </ul>
          </section>
        </div>

        {/* ===== People Also Ask Section ===== */}
        <section className="mt-24 pt-16 border-t-2 border-yellow-100">
          <h2 className="text-4xl font-black mb-12 text-gray-900 text-center tracking-tight">People Also Ask</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFFCF0] p-8 rounded-3xl border border-[#FEF3C7]">
              <h3 className="font-bold text-[#8A6D3B] text-xl mb-4">What are 5 symptoms of anxiety?</h3>
              <p className="text-gray-700">1. Physical tension (jaw clenching, tight shoulders). 2. Rapid, shallow breathing. 3. Intrusive, repetitive thoughts. 4. Persistent fatigue despite sleeping. 5. A constant sense of "dread" without a clear cause.</p>
            </div>
            <div className="bg-[#FFFCF0] p-8 rounded-3xl border border-[#FEF3C7]">
              <h3 className="font-bold text-[#8A6D3B] text-xl mb-4">What to do when you&apos;re anxious?</h3>
              <p className="text-gray-700">Engage the parasympathetic nervous system via "box breathing" (inhale 4s, hold 4s, exhale 4s, hold 4s). Ground yourself using the 5-4-3-2-1 method: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste.</p>
            </div>
            <div className="bg-[#FFFCF0] p-8 rounded-3xl border border-[#FEF3C7]">
              <h3 className="font-bold text-[#8A6D3B] text-xl mb-4">Can I live a normal life with anxiety?</h3>
              <p className="text-gray-700">Yes. Anxiety is a chronic condition for many, but it is not a life sentence. With tools like therapy and possibly medication, individuals lead highly successful careers and deep, meaningful relationships.</p>
            </div>
            <div className="bg-[#FFFCF0] p-8 rounded-3xl border border-[#FEF3C7]">
              <h3 className="font-bold text-[#8A6D3B] text-xl mb-4">When does worry become a disorder?</h3>
              <p className="text-gray-700">Worry becomes a clinical disorder when it is "maladaptive"—meaning it prevents you from functioning at work, school, or in your personal life for a period of six months or longer.</p>
            </div>
          </div>
        </section>

        {/* Conclusion Quote */}
        <div className="mt-24 text-center">
          <div className="inline-block p-12 bg-yellow-50 rounded-[4rem] border-2 border-[#FACC15]">
            <p className="text-3xl font-serif italic text-gray-800 leading-relaxed">
              "Healing is not the removal of the storm, but the discovery <br />
              of the strength to sail through it."
            </p>
          </div>
          <div className="w-24 h-2 bg-[#FACC15] mx-auto mt-10 rounded-full"></div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}