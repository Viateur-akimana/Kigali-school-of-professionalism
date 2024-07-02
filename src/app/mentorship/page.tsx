import React from 'react';
import Link from 'next/link';
import image1 from '../../../public/mentor.jpg'
import Image from 'next/image'
const Mentorship: React.FC = () => {
return (
<div className="max-w-7xl mx-auto mt-10 py-12 px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 border-b-2">
<h1 className="text-3xl flex mx-auto justify-center text-blue-600 font-bold mt-10">Mentorship Program</h1>
<p className="mb-10 text-gray-700 mx-12 my-6 text-xl">
 Our mentorship program is designed to provide guidance, support, and inspiration to individuals seeking to grow both personally and professionally. By pairing mentees with experienced mentors, we aim to foster meaningful connections and facilitate the exchange of knowledge, skills, and perspectives.
</p>
</div>
<div className="flex flex-col md:flex-row items-center mb-8">
<div className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600">
<h2 className="text-4xl text-blue-600 font-bold mb-2">Benefits for Mentees</h2>
<ul className="list-disc pl-5 text-xl">
<li>Gaining valuable insights and advice from experienced professionals</li>
<li>Developing skills and knowledge in specific areas of interest</li>
<li>Expanding professional networks and building meaningful connections</li>
</ul>
</div>
<div className="relative">
<div className="right-20 top-0">
<Image src={image1} alt="Image 1" width={500} height={500} />
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center">
<div className="p-6 bg-white rounded-lg mx-auto justify-center border-t-2 shadow-lg">
<h1 className="text-2xl flex mx-auto justify-center text-blue-600 font-bold">Ready for an mentorship?</h1>
<p className="mb-4 text-gray-600 mx-6 my-6">
 Join our mentorship program and unlock the potential to grow personally and professionally. Tailored for individuals seeking guidance and support, our program provides the opportunity to connect with experienced mentors who can help you reach your goals. Do not miss out on this chance to elevate your skills and expand your network
</p>
<Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" target="_blank">
<button className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded">
 Register as a Mentee
</button>
</Link>
</div>
</div>
</div>
 );
};
export default Mentorship;