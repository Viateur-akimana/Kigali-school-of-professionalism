import React from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: 'Mariya Knowless',
    role: 'Project Manager',
    testimonial: 'Working with this AI Software Development and Tech Blogging firm has been an excellent experience. Their team is knowledgeable, professional, and always willing to go the extra mile to meet our project requirements.',
    avatar: '/avatar1.png',
  },
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    testimonial: 'The UI/UX design work and web development services provided by this company were top-notch. They truly understand the importance of user experience and delivered exceptional results.',
    avatar: '/avatar2.png',
  },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            testimonial={testimonial.testimonial}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;