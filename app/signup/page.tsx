"use client";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FCFCF3] flex flex-col items-center px-4 py-8 relative overflow-hidden">
      {/* Decorative SVG Background Shapes */}
      <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0">
        {/* Top Shape */}
        <div
          className="absolute left-1/2 -translate-x-1/6 top-0"
          style={{ zIndex: 1 }}
        >
          <svg
            width="761"
            height="164"
            viewBox="0 0 761 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M380.265 163.409C590.13 163.409 760.26 -6.53021 760.26 -216.161C760.26 -425.791 590.13 -595.73 380.265 -595.73C170.399 -595.73 0.269531 -425.791 0.269531 -216.161C0.269531 -6.53021 170.399 163.409 380.265 163.409Z"
              fill="#007950"
            />
          </svg>
        </div>
        {/* Bottom Left Shape */}
        <div className="absolute left-0 bottom-0" style={{ zIndex: 1 }}>
          <svg
            width="402"
            height="540"
            viewBox="0 0 402 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-70.2978"
              y="-21.3057"
              width="596.791"
              height="596.791"
              rx="56.8829"
              transform="rotate(34.0677 -70.2978 -21.3057)"
              fill="#D1F9EA"
            />
          </svg>
        </div>
        {/* Bottom Right Shape */}
        <div className="absolute right-0 bottom-0" style={{ zIndex: 1 }}>
          <svg
            width="636"
            height="335"
            viewBox="0 0 636 335"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M701.802 363.287C750.28 393.366 748.016 464.644 697.728 491.587L110.005 806.473C59.7173 833.416 -0.87929 795.817 0.931436 738.794L22.0936 72.3685C23.9043 15.3462 86.7645 -18.3325 135.242 11.7468L701.802 363.287Z"
              fill="#04DA8D"
            />
          </svg>
        </div>
      </div>
      {/* Back Button */}
      <div className="w-full max-w-[75rem] flex items-center">
        <Link
          href="/"
          className="flex text-xs items-center text-blue-700 hover:underline"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M3.80769 8.46698L7.72341 12.3396L7.05565 13L2 8L7.05565 3L7.72341 3.66041L3.80769 7.53302L14 7.53302L14 8.46698L3.80769 8.46698Z"
              fill="#205CD4"
            ></path>
          </svg>
          <span className="text-black">Back</span>
        </Link>
      </div>
      <div className="w-full max-w-[75rem] px-20 flex flex-col md:flex-row gap-22 items-start mt-5">
        {/* Left: Logo and Bullets */}
        <div className="flex-1 flex flex-col items-start">
          <Image
            src="https://images.ctfassets.net/wonkqgvit51x/y4Mi0FOAsCCh8s9GYIrDL/8849b3828458a8ccb35f4f224b29a96f/Logo-TP_Business.svg"
            alt="Trustpilot for Business logo"
            width={160}
            height={65}
            className="mt-20 mb-10"
          />
          <div className="space-y-5">
            <div className="flex items-start gap-5">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="currentColor"
                width="24"
                height="24"
                className="mt-1 text-[#1c1c1c]"
              >
                <circle cx="8" cy="8" r="8" fill="#text-[#1c1c1c]" />
                <path
                  fill="#fff"
                  d="M7.112 11.56l5.603-5.87-.723-.69-4.897 5.13-2.388-2.388L4 8.449l3.112 3.112Z"
                />
              </svg>
              <div>
                <span className="font-bold text-xl text-[#1c1c1c]">
                  Build credibility with reviews
                </span>
                <p className="text-[#1c1c1c] text-base font-medium">
                  Collect trustworthy reviews on an open, transparent platform
                  millions of consumers use.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="currentColor"
                width="24"
                height="24"
                className="mt-1 text-[#1c1c1c]"
              >
                <circle cx="8" cy="8" r="8" fill="#1c1c1c" />
                <path
                  fill="#fff"
                  d="M7.112 11.56l5.603-5.87-.723-.69-4.897 5.13-2.388-2.388L4 8.449l3.112 3.112Z"
                />
              </svg>
              <div>
                <span className="font-bold text-xl text-[#1c1c1c]">
                  Strengthen your reputation
                </span>
                <p className="text-[#1c1c1c] text-base font-medium">
                  94% of new users that automated review invites increased their
                  TrustScore*
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="currentColor"
                width="24"
                height="24"
                className="mt-1 text-[#1c1c1c]"
              >
                <circle cx="8" cy="8" r="8" fill="#1c1c1c" />
                <path
                  fill="#fff"
                  d="M7.112 11.56l5.603-5.87-.723-.69-4.897 5.13-2.388-2.388L4 8.449l3.112 3.112Z"
                />
              </svg>
              <div>
                <span className="font-bold text-xl text-[#1c1c1c]">
                  Grow performance
                </span>
                <p className="text-[#1c1c1c] text-base font-medium">
                  Trustpilot stars and content are proven to convert at higher
                  rates than those of competitors
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Signup Form (now external iframe) */}
        <div className="flex flex-col z-50">
          <div className="flex-1 w-full max-w-xl bg-white rounded-2xl shadow-md p-8 flex flex-col items-center ml-9">
            <div className="w-full">
              <iframe
                aria-label="Free account signup form"
                id="signup-form-frame"
                src="https://signup.business.trustpilot.com/form?locale=en-US&amp;url=https%3A%2F%2Fbusiness.trustpilot.com%2Fsignup&amp;hideDisclaimer=false&amp;utm_term_origin=undefined&amp;utm_term=undefined&amp;utm_source_origin=undefined&amp;utm_source=undefined&amp;utm_medium_origin=undefined&amp;utm_medium=undefined&amp;utm_campaign_origin=undefined&amp;utm_campaign=undefined&amp;utm_content_origin=undefined&amp;utm_content=undefined&amp;tracking=true&amp;lastReferrer=direct"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  height: "1000px",
                }}
              />
            </div>
          </div>
          <div className="flex justify-center max-w-7/12 mx-auto">
            <p className="text-sm text-center text-[#1c1c1c] font-normal mt-4">
              *Trustpilot data analysis of users who joined and automated
              invitations in 2023 (February 2024)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
