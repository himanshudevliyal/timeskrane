import GetInTouch from "./getInqarry";

// Sidebar CTA card: background image + dark overlay, short copy, and a
// "Get Enquiry" button that opens the shared enquiry popup form.
export default function EnquiryCard({
  heading = "Need the Right Crane for Your Plant?",
  text = "Share your requirement and our experts will suggest the best lifting solution with a quick quote.",
  backgroundImage = "/img/header1.webp",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}
    >
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,61,116,0.85)]" />

      <div className="relative px-5 py-6 text-white">
        <h3 className="text-lg font-semibold leading-snug">{heading}</h3>
        <p className="mt-2 text-sm text-white/85">{text}</p>

        <div className="mt-4">
          <GetInTouch
            buttonLabel="Get Enquiry"
            showIcon={false}
            buttonClassName="bg-[#F4CC07] hover:bg-[#e0bb06] text-[#003366] font-bold text-sm px-5 py-2 rounded-md transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
