import React from "react";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-5 px-4 mt-20 flex flex-col items-center justify-center gap-6 bg-primary text-on-primary">
      <div className="w-full max-w-container-max flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/10 pb-20">
        {/* Left */}
        <div className="max-w-xs">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-headline-md text-headline-md text-on-primary">
              GlobalPath
            </span>
          </div>

          <p className="font-body-sm text-body-sm text-on-primary-fixed-variant mb-10">
            © 2024 GlobalPath Visa & Education. Providing expert guidance for
            international students and families pursuing excellence abroad.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
          {/* Navigation */}
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-6">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-white transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-white transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-white transition-colors"
                  href="#"
                >
                  Career Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-label-md text-label-md text-on-primary mb-6">
              Office Locations
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-white transition-colors"
                  href="#"
                >
                  New York HQ
                </a>
              </li>
              <li>
                <a
                  className="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-white transition-colors"
                  href="#"
                >
                  London Branch
                </a>
              </li>
              <li>
                <a
                  className="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-white transition-colors"
                  href="#"
                >
                  Sydney Office
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-label-md text-label-md text-on-primary mb-6">
              Newsletter
            </h4>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-primary-container border border-on-primary-fixed-variant rounded-lg px-3 py-2 font-body-sm text-white w-full outline-none"
              />

              <button className="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary-container transition-all">
                <span className="material-symbols-outlined text-white">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center">
        <span className="font-label-sm text-label-sm text-on-primary-fixed-variant italic">
          Trusted by over 50+ Partner Universities worldwide.
        </span>
      </div>
    </footer>
  );
}
