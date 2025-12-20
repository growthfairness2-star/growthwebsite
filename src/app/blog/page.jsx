"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MentalHealthBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // ======================================================
  // MENTAL HEALTH BLOG POSTS
  // ======================================================
  const blogs = [
    {
      title: "The Cycle of Self-Medication: Why We Reach for Relief",
      image: "/blog5.png",
      link: "/The-cycle-of-self-medication-why-we-reach-for-relief",
      dateDisplay: "Dec 20, 2025",
      dateISO: "2025-12-20",
      objectPosition: "object-center",
    },
    
    {
      title: "Schizophrenia Beyond the Myths: Understanding Reality Perception",
      image: "/blog4.png",
      link: "/schizophrenia-beyond-the-myths-understanding-reality-perception",
      dateDisplay: "Dec 15, 2025",
      dateISO: "2025-12-15",
      objectPosition: "object-center",
    },
    {
      title: "OCD Explained: When Thoughts Feel Loud and Uncontrollable",
      image: "/blog1.png",
      link: "/ocd-explained-when-thoughts-feel-loud-and-uncontrollable",
      dateDisplay: "Dec 14, 2025",
      dateISO: "2025-12-14",
      objectPosition: "object-center",
    },
    {
      title: "Depression Is Not Laziness: Understanding the Invisible Weight",
      image: "/blog2.png",
      link: "/depression-is-not-laziness-understanding-the-invisible-weight",
      dateDisplay: "Dec 13, 2025",
      dateISO: "2025-12-13",
      objectPosition: "object-center",
    },
    {
      title: "Living With Anxiety: When the Mind Refuses to Rest",
      image: "/blog3.png",
      link: "/living-with-anxiety-when-the-mind-refuses-to-rest",
      dateDisplay: "Dec 12, 2025",
      dateISO: "2025-12-12",
      objectPosition: "object-center",
    },
  ];

  // DATE FILTER
  const handleFilter = (e) => {
    const selectedDate = new Date(e.target.value);
    setFilterDate(e.target.value);
    const filtered = blogs.filter(
      (post) =>
        new Date(post.dateISO).toDateString() === selectedDate.toDateString()
    );
    setFilteredPosts(filtered);
  };

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    const updatePostsPerPage = () => {
      if (window.innerWidth < 768) setPostsPerPage(6);
      else setPostsPerPage(12);
    };
    updatePostsPerPage();
    window.addEventListener("resize", updatePostsPerPage);
    return () =>
      window.removeEventListener("resize", updatePostsPerPage);
  }, []);

  const list = filterDate ? filteredPosts : blogs;

  const totalPages = Math.ceil(list.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const pagePosts = list.slice(startIndex, endIndex);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-10 md:p-20"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #91a54aff, #ad9b44ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mental Health Reflections
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Thoughtful insights on anxiety, depression, OCD, schizophrenia, and emotional wellbeing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/mental-hero.png"
            alt="Mental Health Blog Hero"
            fill
            className="object-cover object-center rounded-bl-[2rem]"
          />
        </motion.div>
      </section>

      {/* BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* FILTER */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <label className="text-gray-700 font-medium text-base">
            Filter by Date:
          </label>
          <input
            type="date"
            min="2025-12-12"
            max="2025-12-15"
            onChange={handleFilter}
            value={filterDate}
            className="border border-[#ccc] rounded-lg px-4 py-2 w-[230px]"
          />
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key="posts"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {pagePosts.map((blog, i) => (
              <motion.div
                key={i}
                className="bg-white/90 border border-[#E6E6E6] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                variants={fadeUp}
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className={`object-cover ${blog.objectPosition}`}
                  />
                  <div className="absolute bottom-4 left-4 text-[#4A6FA5] bg-white px-3 py-1 rounded-md text-xs shadow-md">
                    {blog.dateDisplay}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-normal text-[#222] mb-4">
                    {blog.title}
                  </h3>

                  <button
                    onClick={() => {
                      setLoading(i);
                      router.push(blog.link);
                    }}
                    disabled={loading === i}
                    className="px-6 py-2 rounded-full text-white font-semibold"
                    style={{
                      background:
                        "linear-gradient(90deg, #90a54aff, #a6ad44ff)",
                    }}
                  >
                    {loading === i ? "Opening..." : "Read More"}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
