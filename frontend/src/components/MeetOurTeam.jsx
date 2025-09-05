// MeetOurTeam.jsx
import { FaUserTie } from "react-icons/fa";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    quote:
      "Passionate about connecting communities through technology.",
    img: "/images/team1.png",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    quote: "Dedicated to creating seamless user experiences.",
    img: "/images/team2.png",
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Developer",
    quote: "Building reliable solutions for local businesses.",
    img: "/images/team3.png",
  },
];

const MeetOurTeam = () => {
   return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
          <FaUserTie className="text-orange-500" /> Meet Our Team
        </h2>
        <p className="text-gray-600">Passionate about making local services digital</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center space-y-4"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-orange-600">{member.role}</p>
            <p className="text-gray-600 text-sm italic">"{member.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetOurTeam
