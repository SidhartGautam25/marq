import Image from "next/image";
import condi from "@/public/condi.jpg";
export default function Priv() {
  return (
    <div className=" my-4 p-8 relative shadow-xl hover:shadow-slate-600 ">
      <div className="absolute inset-0">
        <Image src={condi} alt="" className="h-full w-full opacity-5" />
      </div>
      <section className="mb-10">
        <h1 className="text-xl md:text-4xl text-gray-800 font-semibold my-6">
          Personal Information Collection
        </h1>
        <p className="mb-4 text-2xl text-blue-800">
          We collect the following personal data from you:
        </p>
        <ul className="mb-4 space-y-2 flex flex-col gap-4">
          <h3>when you request product or service information:</h3>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>
              Contact details including email, first and last name, phone
              number, and company name.
            </li>
          </ul>
          <h3>when you create an account:</h3>
          <ul className="list-disc list-inside  ml-5 space-y-2">
            <li>Contact details including email, first and last name.</li>
          </ul>
        </ul>
        <p className="mb-4">
          Storage and Use of Personal Information We store and utilize your
          personal information to:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Provide you with a user account.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Process your orders.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Send you order confirmations.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>
              Evaluate your business needs for appropriate product
              recommendations.
            </li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Provide you with requested product or service information.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Send newsletters.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Respond to your inquiries.</li>
          </ul>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl text-blue-800">Your Rights</h2>
        <p className="mb-4">General guidelines:</p>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-inside space-y-2">
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Have your data rectified or updated.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Have your data erased from our system.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Access your personal information and data stored with us.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>
              Rectify your information by contacting us at
              support@marq-stats.com.
            </li>
          </ul>
        </ul>
      </section>

      <section className="mb-10">
        <h1 className="text-xl md:text-4xl text-gray-800 font-semibold my-6">
          Information Sharing & Transfer
        </h1>
        <h2 className="mb-4 text-2xl text-blue-800">General guidance</h2>
        <p className="mb-4">
          Marqstat Intelligence Private Limited does not engage in renting or
          selling your personal information to third parties.
        </p>
        <h2 className="mb-4 text-2xl text-blue-800">
          Transfers to third parties
        </h2>
        <p className="mb-4">
          We engage the services of trusted providers for specific functions
          such as customer relationship management (CRM), credit card
          processing, DNS, data management, web hosting, and web development. We
          share only the necessary information with these providers to enable
          them to perform their services, ensuring they also uphold the privacy
          concerns of our clients.
        </p>
        <p className="mb-4">Disclosure of personal information or content:</p>
        <p className="mb-4">
          In compliance with the law, we may disclose your personal information
          or content if we have a good-faith belief that such disclosure is
          permitted or reasonably necessary to:
        </p>
        <ul className="list-inside space-y-2">
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>
              Comply with legal requirements or processes, including subpoenas,
              court orders, and other compulsory disclosures in civil and
              criminal matters.
            </li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Enforce our Privacy Policy or Terms of Service.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Respond to claims of third-party rights infringement.</li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>
              Protect the rights, property, or safety of Prescient & Strategic
              Intelligence Private Limited, our users, visitors, or the public.
            </li>
          </ul>
          <ul className=" list-disc list-inside ml-5 space-y-2">
            <li>Address service inquiries.</li>
          </ul>
        </ul>
        {/* ... additional information */}
      </section>

      {/* Repeat for other sections like "Disclaimer", "Purchase Policy" and so on */}
    </div>
  );
}
