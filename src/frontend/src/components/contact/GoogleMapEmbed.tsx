interface GoogleMapEmbedProps {
  className?: string;
}

export default function GoogleMapEmbed({ className = '' }: GoogleMapEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`}>
      <div className="aspect-[4/3] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.9310106638054!2d72.96080567584603!3d21.27419827930238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa31c4a35e61fc015%3A0x623cd7f2c543bf6d!2sUtthan%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1754195623752!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Utthan Physiotherapy Clinic Location"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
