export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 md:py-6 absolute bottom-0 w-full">
      <div className="mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs md:text-md text-gray-500">
        <p>© {new Date().getFullYear()} $Phaser Art Gallery. Powered by $Phaser Beary.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#privacy" className="hover:text-yellow-700 transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-yellow-700 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
