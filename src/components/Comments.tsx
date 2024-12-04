import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      author: 'John Doe',
      text: 'Amazing gym! The coaches are super knowledgeable and supportive.',
      date: '2 days ago',
    },
    {
      author: 'Maria Garcia',
      text: 'Best boxing gym in the area. Great atmosphere and community!',
      date: '1 week ago',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        {
          author: 'Guest User',
          text: comment,
          date: 'Just now',
        },
        ...comments,
      ]);
      setComment('');
    }
  };

  return (
    <section id="comments" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Members Say</h2>
        </AnimatedSection>
        
        <AnimatedSection direction="up">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Post
              </button>
            </div>
          </form>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-6">
          {comments.map((comment, index) => (
            <AnimatedSection key={index} direction="right" delay={index * 0.2}>
              <div className="bg-black p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">{comment.author}</h3>
                  <span className="text-gray-400 text-sm">{comment.date}</span>
                </div>
                <p className="text-gray-300">{comment.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;