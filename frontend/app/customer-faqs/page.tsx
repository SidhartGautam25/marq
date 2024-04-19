import Image from "next/image";
import { Footer, NavBar } from "../comp";
import Slide1 from "@/public/Slide1.png";
import Faq from "../comp/faq-card/Faq";
import { Fragment } from "react";
interface FaqItem {
  que: string;
  ans: string;
}
interface obj {
  heading: string;
  para: string;
  arr: FaqItem[];
}
export default function Page() {
  const data: obj[] = [
    {
      heading: "Report Related FAQs",
      para: "Discover answers to commonly asked questions about our market research reports and services, ensuring a seamless experience for your data-driven decision-making.",
      arr: [
        {
          que: "I’m visiting this website for the first time. How can I ensure the quality of your services?",
          ans: "Please explore our website to find relevant content. Afterward, reach out to our sales team (at sales@marq-stats.com) to request complimentary sample copies of the studies you are interested in and schedule follow-up calls with our analysts for a detailed product review.",
        },
        {
          que: "Are samples available for all the studies published by Marqstat Intelligence Pvt. Ltd.?",
          ans: "Certainly, upon receiving your inquiry, our sales team will provide you with a sample copy of the study. Additionally, we offer demo samples for upcoming studies. These sample copies offer a preview of the report format and provide sample market information for data validation before making a purchase.",
        },
        {
          que: "What should I do if I have additional questions about a report or need customization?",
          ans: "While our syndicated studies cater to a broad audience, if you require specific customizations or have further inquiries about a report, please complete the query form located next to the report description page. Alternatively, you can reach out to us via email at sales@marq-stats.com or call us at +91 9341800264.",
        },
        {
          que: "How can I ensure that my expectations are accurately understood by your team?",
          ans: "Any customization requests or messages you send by email or during a telephonic conversation will be forwarded to our research team. After assessing feasibility, our research team will create a consumer-centric study tailored to your requirements. Furthermore, they may request a telephonic conference with you to discuss customization needs and propose suitable solutions.",
        },
        {
          que: "What will be the price and delivery timeline for a customized report?",
          ans: "Once the list of deliverables is finalized, our sales representative will share the price and timeline for a customized report. Please note that Marqstat Intelligence Pvt. Ltd. offers a complimentary 10% customization on all reports. For further information, kindly contact our sales team.",
        },
        {
          que: "Are discounts available?",
          ans: "To support students, academicians, NGOs, and startups with their research and consulting needs, we have implemented a special pricing policy that includes discounts and flexible payment plans. To access our special pricing, please contact our sales representative at +91-9341800264 or email us at sales@marqstatintelligence.com.",
        },
      ],
    },
    {
      heading: "Ordering and Delivery",
      para: "Find answers to frequently asked questions about placing orders, licensing options, and timely delivery of our market research reports, ensuring a seamless experience for your business needs.",
      arr: [
        {
          que: "How can I purchase a report?",
          ans: "To procure a report from Marqstat Intelligence Pvt. Ltd., simply locate the “Buy Now” option on the right-hand side of the report description page. Click on the button and follow the instructions provided.Step One: Select the desired reports.Step Two: Complete the payment process through wire transfer or online purchase.Step Three: Upon receipt of payment, we will send you the invoice. For wire transfers, please sign the purchase contract.Step Four: Our dispatch team will promptly share the report within 2 to 48 hours.",
        },
        {
          que: "How soon will I receive the report?",
          ans: "Reports are typically delivered within 2 to 48 hours following confirmation of payment. Delivery times may vary based on different time zones. Rest assured, all published reports are dispatched within 48 hours after payment confirmation. Kindly note that if your purchase is made during a weekend or holiday, you will be contacted on the next business day.",
        },
        {
          que: "What are the available ordering methods?",
          ans: "If you are placing an order on behalf of a company, you must be authorized to make purchase decisions. You can place your order using the following channels:Ordering by Telephone: Call us on +91-9341800264 and speak with our customer service representative to place your order.Ordering by Email: Send your requirements and queries to sales@marq-stats.com. Please include your complete details, including billing and delivery addresses, along with the preferred payment method. Our executives will respond within one business day.",
        },
        {
          que: "What are single user, multiple user, and enterprise user licenses?",
          ans: "Our licensing options are tailored to manage readership and distribution rights effectively.A Single User License provides exclusive access to a specific report for one individual only and cannot be shared with other employees within the same company. A Multi User License allows access to a specific report for two to five users within the same department and company. An Enterprise License extends access to a specific report to the entire company, including subsidiary companies or other entities within a group.",
        },
        {
          que: "Can I purchase individual chapters or segments from a study?",
          ans: "While we generally encourage the purchase of complete studies to provide a comprehensive understanding of the market, we do offer select chapters in special cases based on client requirements. For further details, please reach out to our sales representative at phone: +91-9341800264 or email: sales@marq-stats.com.",
        },
      ],
    },
    {
      heading: "Payments and Invoicing",
      para: "Get answers to frequently asked questions about accepted payment methods, secure transactions, invoices, and payment terms to ensure a seamless experience with payments and invoicing for our market research services.",
      arr: [
        {
          que: "What types of payment are accepted?",
          ans: "We facilitate secure transactions through our trusted partners, Razorpay and PayPal. If you prefer to pay by check, bank wire transfer, or invoice, please contact our customer service at sales@marq-stats.com.",
        },
        {
          que: "Will I receive an invoice for my purchase?",
          ans: "An electronic invoice will be promptly sent to you upon completing the purchase. Additionally, Grand View Research offers pro-forma invoices to facilitate purchase decisions. For further inquiries, please contact our sales department at sales@marq-stats.com.",
        },
        {
          que: "What are the payment terms?",
          ans: "Payments made are non-refundable, as per our standard company and industry policy. Our products and reports are designed for knowledge transfer, making refunds unfeasible after the client has accessed the study. To mitigate such situations, Marqstat Intelligence provides comprehensive and transparent pre-purchase facilities to all clients.",
        },
      ],
    },
    {
      heading: "Post-Sale Queries",
      para: "Find answers to commonly asked questions about analyst access, customization options, and pricing for post-sale requirements, ensuring a comprehensive understanding of our market research services beyond the initial purchase.",
      arr: [
        {
          que: "Can I communicate with the analyst regarding the purchased report?",
          ans: "Marqstat Intelligence Pvt. Ltd. provides complimentary 4 hour analyst access with every report purchase. This valuable opportunity allows our clients to engage with analysts, addressing queries, concerns, and gaining insights into their perspectives.",
        },
        {
          que: "The report does not encompass all the information I require. How can Marqstat Intelligence Pvt. Ltd. assist?",
          ans: "While our reports are designed to provide a comprehensive overview for all market participants, we understand that specific requirements can vary. We encourage you to share your customization requests prior to purchase. However, if the report does not fully meet your needs, we offer post-sale customization options.",
        },
        {
          que: "Are there charges for post-sale customization requests?",
          ans: "We offer a complimentary 10% customization service on our syndicated reports. If you haven’t utilized this pre-sale facility, kindly communicate your requirements to our sales team. The research team will evaluate the feasibility of post-sale customization and provide details on pricing (if applicable) and timelines.",
        },
      ],
    },
  ];
  return (
    <>
      <div className="">
        <div className=" bg-gray-900">
          <NavBar />
        </div>
        <div className="h-44 md:h-72 flex items-center justify-center relative">
          <div className="absolute inset-0">
            <Image src={Slide1} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <h1 className="text-3xl md:text-7xl text-white  font-bold z-50 uppercase text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex justify-center bg-[url('/assets/faq-bg.jpg')] bg-contain">
          <div className="justify-around flex  w-full md:w-[80%] p-5 md:p-10 flex-wrap">
            {data.map((item, indx) => {
              return (
                <Fragment key={indx}>
                  <Faq heading={item.heading} para={item.para} arr={item.arr} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
