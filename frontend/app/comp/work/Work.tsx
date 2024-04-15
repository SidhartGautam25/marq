"use client";
import React from 'react';


export default function Work() {
    const reasons = [
    {
      number: '01.',
      title: 'Strategic Vision',
      description:
        'Through the sustainable and effective implementation of strategies, we support clients in improving their performance and innovative strength.',
    },
    {
      number: '02.',
      title: 'Comprehensive Support',
      description:
        'We work with your team to create comprehensive and customised services that will augment your growth.',
    },
    {
      number: '03.',
      title: 'Capabilities Driven',
      description:
        'Our approach, built on distinctive capabilities, enables businesses to focus on their strengths and gain a competitive advantage.',
    },
    {
      number: '04.',
      title: 'Client Centric',
      description:
        'The team adopts a customer-centric approach to unlock value powered by the in-depth analysis.',
    },
    {
      number: '05.',
      title: 'Extensive Data',
      description:
        'Custom designed solutions you require based on our extensive portfolio of information, analysis and expertise.',
    },
    {
      number: '06.',
      title: 'Result Oriented',
      description:
        'Driven by our industry experience, we are fiercely devoted to help our clients capture growth opportunities around the world.',
    },
    {
      number: '07.',
      title: 'Defined Ambition',
      description:
        'We are an ambitious firm with an aim to provide best-in-class solutions guided by our well-defined quality assurance system.',
    },
    {
      number: '08.',
      title: 'Actionable Intelligence',
      description:
        'Team of industry experts providing actionable insights to make informed decisions.',
    },
    // Add more reasons...
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Work With Us?</h2>
          <div className="mt-2">
            <hr className="inline-block w-16 border-2 border-blue-600" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {reasons.map((reason, index) => (
            <div key={index} className="text-left hover:border-t-2 hover:border-blue-600">
              <h3 className="text-blue-600 font-bold">{reason.number}</h3>
              <h4 className="text-2xl font-semibold my-2">{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
