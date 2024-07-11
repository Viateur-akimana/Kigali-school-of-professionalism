import Card from './Card';
import experienceImg from "../../../../public/experience.png";
import internshipImg from "../../../../public/internship.png";
import opportunitiesImg from "../../../../public/opportunity.png";

const Chance: React.FC = () => {
    return (
        <div className="bg-white-900 py-12 border-t-2 border-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
                    <Card
                        title="Opportunities"
                        description="Job mastery class"
                        imageSrc={opportunitiesImg.src}
                        imageAlt="Opportunities"
                        imageWidth={opportunitiesImg.width}
                        imageHeight={opportunitiesImg.height}
                    />
                    <Card
                        title="OUR INTERNERNSHIP HUB"
                        description="Learn from our technical experts"
                        imageSrc={internshipImg.src}
                        imageAlt="Internship Hub"
                        imageWidth={internshipImg.width}
                        imageHeight={internshipImg.height}
                    />
                    <Card
                        title="EXPERIENCE HUB"
                        description="Gain IT experience through our experience hub"
                        imageSrc={experienceImg.src}
                        imageAlt="Experience Hub"
                        imageWidth={experienceImg.width}
                        imageHeight={experienceImg.height}
                    />


                </div>
            </div>
        </div>
    );
};

export default Chance;
