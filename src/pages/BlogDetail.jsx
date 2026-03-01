import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug);
  const others = blogs.filter(b => b.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-background-main flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Article not found</h2>
          <Link to="/blogs" className="text-brand-interactive hover:text-alternative-interactiveDark font-semibold">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blogs" className="inline-flex items-center text-brand-interactive hover:text-alternative-interactiveDark font-semibold mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blogs
          </Link>
          <span className="inline-block bg-brand-interactive text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-text-primary/60 text-sm">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-8 md:p-12">
            <p className="text-lg text-text-primary/80 mb-8 font-medium border-l-4 border-brand-interactive pl-6">
              {post.subtitle || post.excerpt}
            </p>
            {post.content && post.content.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">{section.heading}</h2>
                )}
                {section.body && (
                  <p className="text-text-primary/80 leading-relaxed mb-4">{section.body}</p>
                )}
                {section.subsections && section.subsections.map((sub, j) => (
                  <div key={j} className="mb-5 ml-2">
                    {sub.title && (
                      <h3 className="text-base font-bold text-text-primary mb-2 text-brand-interactive">{sub.title}</h3>
                    )}
                    {sub.points && (
                      <ul className="space-y-2 ml-2">
                        {sub.points.map((pt, k) => (
                          <li key={k} className="flex items-start gap-2 text-text-primary/80">
                            <span className="text-brand-interactive mt-1 flex-shrink-0">•</span> {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {others.length > 0 && (
        <section className="py-12 bg-background-card border-y-2 border-utility-border/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map(other => (
                <Link key={other.slug} to={`/blogs/${other.slug}`} className="group">
                  <div className="bg-background-main rounded-2xl border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300 p-6">
                    <span className="inline-block bg-brand-interactive/10 text-brand-interactive text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {other.category}
                    </span>
                    <h3 className="font-bold text-text-primary mb-2 group-hover:text-brand-interactive transition-colors">{other.title}</h3>
                    <p className="text-text-primary/60 text-sm line-clamp-2 mb-4">{other.subtitle || other.excerpt}</p>
                    <span className="inline-flex items-center text-brand-interactive font-semibold text-sm">
                      Read <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
