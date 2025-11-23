"use client";
export default function Footer(){
  return (
    <footer className="py-8 text-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto text-gray-600 dark:text-gray-400 text-sm">
        <p>© 2025 Gian Cristian Baguna. All rights reserved.</p>
        <div className="mt-3 flex justify-center gap-4 text-sm">
          <a href="https://github.com/gianCristianBaguna">GitHub</a>
          <a href="https://www.linkedin.com/in/gian-cristian-baguna-076b42374/">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}