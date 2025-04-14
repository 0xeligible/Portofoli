
import Head from 'next/head'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({ once: true });
  }, [])

  return (
    <div className={\`\${darkMode ? 'dark' : ''}\`}>
      <Head>
        <title>Ade Kurnia – Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen font-sans scroll-smooth transition-colors duration-500">
        {/* TOGGLE BUTTON */}
        <div className="absolute top-6 right-6 z-50">
          <button
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow hover:scale-105 transition"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center h-screen" data-aos="fade-up">
          <img src="/ade-anime.png" alt="Ade Anime" className="w-40 h-40 object-cover rounded-full mb-4 shadow-lg" />
<h1 className="text-5xl font-bold font-inter">Ade Kurnia</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-xl">Frontend Developer • Web3 Enthusiast</p>
          <div className="mt-6 flex gap-6 text-gray-600 dark:text-gray-400">
            <a href="https://x.com/Adekurnia122" target="_blank">@Adekurnia122</a>
            <a href="https://github.com/0xeligible" target="_blank">GitHub</a>
            <a href="mailto:akurnia121298@gmail.com" target="_blank">Email</a>
            <a href="https://instagram.com/0xde12.eth" target="_blank">IG</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-2xl mx-auto px-4 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Saya Ade Kurnia, seorang frontend developer yang tertarik dengan teknologi Web3,
            UI/UX design, dan pengembangan produk digital yang minimalis dan elegan.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="max-w-4xl mx-auto px-4 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold">Project A</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Deskripsi singkat tentang project A.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold">Project B</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Deskripsi singkat tentang project B.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center py-20" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">Reach me via email at <a className="underline" href="mailto:akurnia121298@gmail.com">akurnia121298@gmail.com</a></p>
        </section>
      </main>
    </div>
  )
}
