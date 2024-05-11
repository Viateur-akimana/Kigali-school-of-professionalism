import React from 'react';
import Testimonial from './Testimonial';
import avatar from '../../../public/avatar.png'

const testimonials = [
  {
    name: 'Mariya Knowless',
    role: 'Project Manager',
    testimonial: 'Working with this AI Software Development and Tech Blogging firm has been an excellent experience. Their team is knowledgeable, professional, and always willing to go the extra mile to meet our project requirements.',
    avatar: '/avatar.png',
  },
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    testimonial: 'The UI/UX design work and web development services provided by this company were top-notch. They truly understand the importance of user experience and delivered exceptional results.',
    avatar: '/avatar.png',
  },
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    testimonial: 'The UI/UX design work and web development services provided by this company were top-notch. They truly understand the importance of user experience and delivered exceptional results.',
    avatar: '/avatar.png',
  }
 
];

const Testimonials: React.FC = () => {
  return (
    <div className="m-12">
      <h2 className="text-2xl font-bold mb-600 text-blue-600 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4 p-4">
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