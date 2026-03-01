import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-main flex flex-col items-center justify-center px-4 pb-16 md:pb-0">
      <div className="text-center max-w-lg">
        <div className="text-[8rem] leading-none font-black text-brand-interactive/20 mb-4 select-none">404</div>
        <h1 className="text-3xl font-bold text-text-primary mb-4">Page Not Found</h1>
        <p className="text-text-primary/70 mb-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link to="/"
          className="inline-flex items-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
          <Home className="w-5 h-5" /> Go Back Home
        </Link>
      </div>
    </div>
  );
}
