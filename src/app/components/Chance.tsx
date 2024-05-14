
import Card from './Card';
import experience from "../../../public/experience.png";
import internship from "../../../public/internship.png";
import opportunities from "../../../public/opportunity.png"



const Chance: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 border-t-2 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Opportunities"
            description="Job mastery class"
            imageSrc={opportunities}
            imageAlt="Opportunities"
          />
          <Card
            title="OUR INTERNERNSHIP HUB"
            description="Learn from our technical experts"
            imageSrc={internship}
            imageAlt="Internship Hub"
          />
          <Card
            title="EXPERIANCE HUB"
            description="Gain IT experience through our experience hub"
            imageSrc={experience}
            imageAlt="Experience Hub"
          />
        </div>
      </div>
    </div>
  );
};

export default Chance;