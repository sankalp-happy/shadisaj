import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const categoryColors = {
  'Business Tips': 'bg-brand-interactive text-white',
  'Industry Insights': 'bg-green-600 text-white',
  'Wedding Planning': 'bg-purple-600 text-white',
  'Traditions': 'bg-orange-500 text-white',
  'Venues': 'bg-blue-600 text-white',
  'Photography': 'bg-pink-600 text-white',
  'Budget': 'bg-red-600 text-white',
  'Food & Catering': 'bg-amber-600 text-white',
};

const emojis = ['💡', '📈', '💍', '🪔', '🏛️', '📸', '💰', '🍽️'];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 overflow-hidden py-14 md:py-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Wedding Business <span className="text-brand-interactive">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-text-primary/80 max-w-2xl mx-auto">
            Expert tips, industry trends, and guides for wedding professionals across India.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogs.map((post, idx) => (
              <Link key={post.slug} to={`/blogs/${post.slug}`} className="group">
                <article className="bg-background-card rounded-2xl overflow-hidden shadow-lg border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image/emoji */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-interactive/20 to-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-6xl">{emojis[idx % emojis.length]}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`${categoryColors[post.category] || 'bg-brand-interactive text-white'} text-xs font-semibold px-3 py-1 rounded-full`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs text-text-primary/50 mb-2">{post.date} · {post.author}</div>
                    <h2 className="text-lg font-bold text-text-primary mb-3 group-hover:text-brand-interactive transition-colors flex-1">{post.title}</h2>
                    <p className="text-text-primary/70 text-sm line-clamp-2 mb-4">{post.subtitle || post.excerpt}</p>
                    <span className="inline-flex items-center text-brand-interactive font-semibold text-sm mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
