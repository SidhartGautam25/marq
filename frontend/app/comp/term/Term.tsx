import Image from "next/image";
import condi from "@/public/condi.jpg";
export default function Term() {
  return (
    <div className=" my-4 p-8 relative shadow-xl hover:shadow-slate-600 ">
      <div className="absolute inset-0">
        <Image src={condi} alt="" className="h-full w-full opacity-5" />
      </div>
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold my-6">
        Delivery of Reports
      </h1>
      <p>
        Upon receipt of payment, Marqstat Intelligence Pvt. Ltd. ensures online
        delivery of published reports within 24-48 hours. For ongoing reports,
        delivery timelines are shared by a company representative upon client
        request.
      </p>
      {/* Add the rest of the text content here for each section following the same pattern */}

      <h2 className="text-xl md:text-4xl text-gray-800  font-semibold mt-10 my-6">
        Customization
      </h2>
      <p>
        For report-related queries, Marqstat Intelligence Pvt. Ltd. provides 15
        hours of interaction with the analyst at no additional cost. The
        delivery time for customization requests is at the researchers
        discretion, considering the nature, scope, and complexity of the
        customization. The standard delivery timeframes mentioned may not apply
        for custom reports.
      </p>

      <h2 className="text-xl md:text-4xl text-gray-800 font-semibold mt-10 my-6">
        Defective Content
      </h2>
      <p>
        In the event of a client receiving a corrupted file (via email) or a
        report with printing defects (hard copy), Marqstat Intelligence Pvt.
        Ltd. will provide a replacement. Clients are requested to notify us of
        such issues via email or phone. Please note that damages during
        transportation do not qualify for replacement requests.
      </p>

      <h2 className="text-xl md:text-4xl text-gray-800 font-semibold mt-10 my-6">
        Purchase Policy
      </h2>
      <p>
        We strongly advise clients to carefully review report details before
        placing an order, as refund or cancellation requests cannot be
        accommodated once payment has been made. For any report-related queries,
        please contact us at enquiry@marq-stats.com before making a purchase.
        Post-purchase payment-related queries can be communicated to
        care@marq-stats.com. Refund requests, if entertained, will be at the
        sole discretion of Marqstat Intelligence Pvt. Ltd.s management, and the
        procurer will be responsible for any customs, sales, or other applicable
        taxes.
      </p>

      <h2 className="text-xl md:text-4xl text-gray-800 font-semibold mt-10 my-6">
        Disclaimer
      </h2>
      <div className="flex flex-col gap-4">
        <p>
          Marqstat Intelligence Pvt. Ltd. prioritizes clients interests in its
          research activities, ensuring reliability and accuracy in market
          research publications. However, the data in publications may fluctuate
          as it is based on primary interviews with industry officials. The firm
          disclaims responsibility for any incorrect data provided by key
          industry players.
        </p>
        <p>
          Information or analysis in the firms publications represents
          research-based opinions and should not be considered factual
          statements. While efforts are made to ensure the accuracy of reports
          at the time of publication, they cannot be guaranteed. The firm does
          not endorse any products, services, or vendors mentioned in its
          research publications.
        </p>
        <p>
          All intellectual properties, including trademarks and copyrights,
          belong to their respective owners and may be protected. Reproduction
          in any form without prior written consent from the owners is strictly
          prohibited.
        </p>
        <p>
          Market research reports ordered from Marqstat Intelligence Pvt. Ltd.
          are for internal use within the company and should not be disclosed to
          third parties or published without written permission. No part of the
          service, report, or its content may be reproduced, republished,
          resold, revealed, distributed, circulated, or sublicensed in any
          medium or form without written permission from Marqstat Intelligence
          Pvt. Ltd.
        </p>
      </div>

      {/* Continue with more sections as necessary */}

      <p className="mt-6">
        For permissions and other queries, please email:{" "}
        <a
          href="mailto:enquiry@marqstats.com"
          className="text-blue-600 hover:text-blue-800"
        >
          enquiry@marqstats.com
        </a>
      </p>
    </div>
  );
}
