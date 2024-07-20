import { Mail, MapPin, MessagesSquare } from "lucide-react";
import ContactCard from "./ContactCard";

const contactCardContent = [
  {
    Icon: Mail,
    title: "Email Us",
    description: "from your app",
    content: "Gizmocompany@gmail.com",
  },
  {
    Icon: MessagesSquare,
    title: "Call or Message Us",
    description: "from your device",
    content: "0711 12 0100",
  },
  {
    Icon: MapPin,
    title: "Visit Us",
    description: "lets discusss in our location",
    content: "Palembang, Sumatera Selatan",
  },
];

const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="space-y-12 px-6 pb-12 pt-12 lg:px-24 lg:pt-24"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center lg:text-start">
        <h1
          data-aos="fade-down"
          data-aos-duration="300"
          className="max-w-xl text-center text-4xl font-semibold lg:text-5xl"
        >
          We are here for you, contact us at{" "}
          <span className="text-primary">anytime</span>
        </h1>
        <p data-aos="fade-up" data-aos-duration="300" className="font-medium">
          Have any question about any product or our services? please reach out
        </p>
      </div>
      <div className="grid grid-cols-1 justify-between gap-12 text-slate-800 lg:grid-cols-3">
        {contactCardContent.map((contact, index) => (
          <ContactCard
            index={index}
            key={contact.title}
            Icon={contact.Icon}
            title={contact.title}
            description={contact.description}
            content={contact.content}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
