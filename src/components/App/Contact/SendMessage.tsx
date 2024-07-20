import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User } from "lucide-react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const socialMediaLinks = [
  {
    link: "#",
    label: "@Gizmo.tech",
    Icon: RiInstagramFill,
  },
  {
    link: "#",
    label: "Gizmo Tech",
    Icon: RiFacebookFill,
  },
  {
    link: "#",
    label: "gizmo_official",
    Icon: RiTwitterFill,
  },
];

const SendMessage = () => {
  return (
    <section id="contact-info" className="space-y-12 px-6 py-12 lg:px-24">
      <div className="flex flex-col items-center gap-12 space-y-3 lg:flex-row lg:gap-28">
        <div className="space-y-6">
          <h1 className="max-w-lg text-4xl font-semibold">
            Or you can <span className="text-primary">directly</span> sent
            message to us
          </h1>
          <p className="max-w-md font-medium">
            Your message will direcly sent into our email, so happily contact us
            right now!
          </p>
          <div className="flex-1 space-y-3">
            <div className="flex gap-3">
              <div className="relative w-1/2 overflow-hidden rounded-full border border-border">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  size={20}
                  strokeWidth={1.4}
                />
                <Input
                  className="border-none ps-12"
                  placeholder="Your full name"
                />
              </div>
              <div className="relative w-1/2 overflow-hidden rounded-full border border-border">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  size={20}
                  strokeWidth={1.4}
                />
                <Input
                  className="border-none ps-12"
                  placeholder="Your email addrress "
                />
              </div>
            </div>
            <Textarea
              className="h-36 rounded-2xl border-border"
              placeholder="Type your messages here"
            />
            <Button className="w-full rounded-full px-6 lg:w-auto">
              Send Message
            </Button>
          </div>
        </div>
        <div className="">
          <div className="flex-1 space-y-6 lg:space-y-8">
            {socialMediaLinks.map((social) => (
              <a
                key={social.link}
                className="flex cursor-pointer items-center gap-4"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
                  <social.Icon size={32} />
                </div>
                <div className="text-xl font-semibold text-slate-700">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendMessage;
