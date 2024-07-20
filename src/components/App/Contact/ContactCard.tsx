import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

interface ContactCardProps {
  index: number;
  Icon: IconType | LucideIcon;
  title: string;
  description: string;
  content: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  index,
  Icon,
  title,
  description,
  content,
}) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="300"
      data-aos-delay={index * 200}
      className="flex flex-1 flex-col items-center gap-3 rounded-xl bg-background bg-white p-6 shadow-lg"
    >
      <div className="flex size-20 items-center justify-center rounded-full bg-secondary">
        <Icon size={40} strokeWidth={1.4} className="text-primary" />
      </div>
      <div className="space-y-1 text-center">
        <div className="text-lg font-bold">{title}</div>
        <div className="">{description}</div>
      </div>
      <Separator />
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default ContactCard;
