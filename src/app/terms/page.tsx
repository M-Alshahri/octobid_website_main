export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-poppins text-[#161C2D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Terms & Conditions
          </h1>
          <p className="text-lg  leading-relaxed max-w-3xl mx-auto">
            By accessing and using{" "}
            <span className="font-semibold">Octobid</span>, you agree to be
            bound by the following Terms & Conditions. Please read them
            carefully.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className=" leading-relaxed mb-6">
              By registering or placing an order on Octobid, you confirm that
              you are in agreement with these Terms & Conditions. These terms
              apply to the entire website, mobile app, and any related
              communication (including emails or notifications) between you and
              Octobid.
            </p>

            <p className=" leading-relaxed">
              <span className="font-semibold">Octobid</span> shall not be liable
              for any direct, indirect, incidental, or consequential damages,
              including but not limited to, loss of profit, data, or business
              opportunities, arising from the use—or inability to use—our
              platform. If your use of Octobid&apos;s services results in the need
              for system servicing, data recovery, or equipment repair, you
              agree to assume any associated costs.
            </p>
          </div>

          {/* License Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">License</h2>
            <p className=" leading-relaxed mb-4">
              When you create or promote a product on Octobid, you are granted a
              limited, non-exclusive license to use our platform under these
              Terms. Ownership of digital assets, products, or promotional
              material uploaded by users remains with the respective owners, not
              Octobid.
            </p>
            <p className=" leading-relaxed">
              You agree not to copy, resell, or misuse any materials, resources,
              or data from Octobid without prior written consent.
            </p>
          </div>

          {/* User Responsibilities Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">
              User Responsibilities
            </h2>
              <ul className="space-y-4 list-disc list-inside">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#161C2D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">
                      For Suppliers/Companies:
                    </span>
                    <span className=" ml-1">
                      You are responsible for ensuring that the products or
                      services you list are accurate,
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#161C2D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">For Affiliates:</span>
                    <span className=" ml-1">
                      You agree to promote products ethically and comply with
                      applicable advertising laws, avoiding false or misleading
                      claims.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#161C2D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">For All Users:</span>
                    <span className=" ml-1">
                      You must not use Octobid for unlawful purposes, fraudulent
                      activities, or anything that could harm the platform or its
                      community.
                    </span>
                  </div>
                </li>
              </ul>
          </div>

          {/* Changes About Terms Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">
              Changes about terms
            </h2>
            <p className=" leading-relaxed">
              If we change our terms of use we will post those changes on this
              page. Registered users will be sent an email that outlines changes
              made to the terms of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
