import Link from "next/link";

const relatedReports = [
  {
    title: "Automotive Industry with AI and Crypto",
    link: "/reports/automotive-ai-crypto",
  },
  {
    title: "Electric Vehicle Charging Infrastructure",
    link: "/reports/ev-charging-infrastructure",
  },
  {
    title: "Global Marine Propulsion Market",
    link: "/reports/marine-propulsion-market",
  },
  // Add more reports as needed
];

const Relatedreport = () => {
  return (
    <div id="relatedreport" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Related Reports</h1>
      <div className="flex flex-col gap-3">
        {relatedReports.map((report, index) => (
          <Link
            href={report.link}
            key={index}
            className="flex items-center border-b border-gray-700"
          >
            <div className="bg-gray-500 w-4 h-14 "></div>
            <div className="p-4 bg-gray-100 flex-1 ">{report.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Relatedreport;
