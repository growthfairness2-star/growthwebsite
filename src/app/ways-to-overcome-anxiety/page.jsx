"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogPost() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen text-black">

      {/* HERO IMAGE */}
      <div className="w-full h-72 relative">
        <Image
          src="/blog1.png"
          alt="Ways to Overcome Anxiety"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white px-4 text-center">
            Ways to Overcome Anxiety
          </h1>
        </div>
      </div>

      {/* EXACT 400 WORD CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-lg leading-relaxed text-justify">

        <p>
          Anxiety affects many people in different ways and it often appears at moments when the mind feels vulnerable or overwhelmed. Understanding anxiety begins with recognizing that it is a natural response created by the body to protect you from imagined danger. When the mind senses uncertainty it sends signals that activate physical tension and emotional worry. This reaction can feel uncomfortable but it does not mean something is wrong with you. It simply means your mind is trying to keep you safe even when no real threat exists.
        </p>

        <p className="mt-6">
          One helpful way to reduce anxiety is to bring your attention back to your breathing. Slow intentional breathing helps calm the nervous system and sends a message of safety throughout the body. When you breathe deeply your heart rate settles and your thoughts become clearer. This simple practice can guide you back into the present moment where calm is easier to find. Even a few minutes of steady breathing can create a meaningful shift in how you feel.
        </p>

        <p className="mt-6">
          Another strategy is to organize your thoughts. Anxiety grows stronger when thoughts remain unspoken and tangled. Writing down what you feel allows you to separate yourself from the worry and gives your mind room to understand each thought with clarity. This process helps you recognize which concerns are true and which ones are created by fear. The more clearly you see your thoughts the less power anxiety holds over you.
        </p>

        <p className="mt-6">
          Movement is also important for emotional balance. Gentle physical activity releases tension and encourages the body to reset. A short walk or simple stretching can ease tightness in the muscles and help the mind feel more grounded. Movement creates natural rhythm in the body and rhythm naturally leads to emotional steadiness.
        </p>

        <p className="mt-6">
          Connection with others is another powerful support. Speaking with someone you trust allows you to share your feelings and receive understanding. Emotional support reminds you that you are not facing life alone and that your experiences are valid. Honest conversation can lift the weight from your mind and replace fear with clarity.
        </p>

        <p className="mt-6">
          Finally self compassion plays a central role in overcoming anxiety. Treat yourself with patience and kindness during stressful moments. Remind yourself that healing takes time and that you deserve care and gentleness. With consistent practice awareness and support anxiety becomes easier to manage and your inner peace grows stronger. Each new day offers another chance to continue building lasting calm within.
        </p>

        {/* RETURN TO BLOG BUTTON */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => router.push("/blog")}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Return to Blog
          </button>
        </div>

      </div>
    </div>
  );
}
