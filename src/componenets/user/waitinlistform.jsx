"use client";


export default function EmailFormWaiting() {
  return (
    <>
      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdG5dsbDSew0qav5htBK7ik6aLBSbJR1BSXQ6MM2Wbop9yHRA/viewform?embedded=true"
          frameBorder="0"
          className="responsive-iframe"
          title="Email Sign-up Form"
        >
          Loading…
        </iframe>
      </div>

      <div className="flex items-start gap-2 text-gray-500 mt-4">
        <p className="text-xs -mt-[0.5] max-w-sm">
          No worries! Your data is completely safe and will only be utilized to
          provide you with updates about our product.
        </p>
      </div>
    </>
  );
}
