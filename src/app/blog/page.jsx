"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const router = useRouter();

  const [loading, setLoading] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // ======================================================
  // TODAY’S ONLY BLOG POST
  // ======================================================
  const blogs = [
    {
      title: "Ways to Overcome Anxiety",
      image: "/blog1.png",
      link: "/ways-to-overcome-anxiety",
      dateDisplay: "Dec 11, 2025",
      dateISO: "2025-12-11",
      objectPosition: "object-center",
    },
  ];

  // ======================================================
  // FILTER LOGIC
  // ======================================================
  useEffect(() => {
    if (!filterDate) {
      setFilteredPosts(blogs);
      return;
    }

    const results = blogs.filter((post) => post.dateISO === filterDate);
    setFilteredPosts(results);
  }, [filterDate]);

  // ======================================================
  // PAGE UI
  // ======================================================
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <div className="w-full bg-yellow-400 text-black py-24 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-lg mt-2">Daily insights for growth & wellness</p>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <label className="block mb-2 font-semibold text-black">Filter by date</label>

        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* BLOG LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence>
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className={`w-full h-48 object-cover ${post.objectPosition}`}
              />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{post.dateDisplay}</p>

                {/* FIXED TITLE — readable + bold */}
                <h2 className="text-xl font-bold text-black mb-3">{post.title}</h2>

                {/* READ MORE BUTTON */}
                <button
                  onClick={() => router.push(post.link)}
                  className="mt-2 inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* If no results */}
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No blog post found for this date</div>
        )}
      </div>
    </div>
  );
}
