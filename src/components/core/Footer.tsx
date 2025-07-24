export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Events Explorer. All rights reserved.</p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
