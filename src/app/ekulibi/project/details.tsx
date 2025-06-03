'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, Disclosure, Tab } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const sections = {
  "Overview": (
    <>
      <h3 className="text-xl font-semibold mb-2">Overview of Agriculture in Ghana</h3>
      <p>
        Agriculture in Ghana is largely characterized by smallholder farming, with approximately 90% of farmers cultivating less than 2 hectares of land. Despite the vast agricultural potential, only 0.4% of the 7.85 million hectares of cultivated land is under irrigation. This highlights a significant underutilization of irrigation technology in the country.
      </p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li><strong>Employment Contribution:</strong> Agriculture employs about 52% of the workforce.</li>
        <li><strong>GDP Contribution:</strong> In 2016, agriculture contributed 19.5% to Ghana’s GDP (ISSER, 2016).</li>
        <li><strong>Land Use:</strong> 56% of Ghana’s land area is used for cultivation.</li>
      </ul>
    </>
  ),
  "Challenges": (
    <>
      <h3 className="text-xl font-semibold mb-2">Key Challenges in the Agricultural Sector</h3>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <strong>Low Yields and Productivity:</strong> Ghana’s crop yields are significantly lower compared to other African countries.
          <ul className="list-disc ml-6 mt-1">
            <li>Maize Yields (MT/Ha, 2014): Ghana: 1.73 | Ethiopia: 3.42 | Uganda: 2.50 | Zambia: 2.78 | Kenya: 1.95</li>
            <li>Groundnut Yields (MT/Ha, 2014): Ghana: 1.28 | Ethiopia: 1.60 | Uganda: 0.70 | Kenya: 1.51 | Tanzania: 0.89</li>
          </ul>
        </li>
        <li><strong>Low Adoption of Improved Technology:</strong> Farmers have limited access to modern tools and knowledge.</li>
        <li><strong>High Post-Harvest Losses:</strong> Poor storage, transport, and processing lead to significant waste.</li>
        <li><strong>Poor Quality Produce:</strong> Caused by pest infestations, poor handling, and lack of quality controls.</li>
      </ol>
    </>
  ),
  "Ekulibi Loans": (
    <>
      <h3 className="text-xl font-semibold mb-2">Design (I): Ekulibi Loans</h3>
      <p>A savings and loan product tailored for smallholder farmer collectives:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Groups of 15–20 farmers organize to apply for credit</li>
        <li>Minimum savings required for each group</li>
        <li>Mandatory weekly training for one month on improved farming techniques</li>
        <li>Individuals apply through the group; funds go to individual accounts</li>
        <li>Loans provided in cash and kind based on savings and repayment history</li>
        <li>Loan term: 1 year</li>
        <li>Helps build credit history</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Target Population</h3>
      <p>Smallholder farmers with no access to formal financial services.</p>
    </>
  ),
  "Theory of Change": (
    <>
      <h3 className="text-xl font-semibold mb-2">Design (II): Theory of Change</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Group formation:</strong> Groups → Savings → Credit → Better inputs</li>
        <li><strong>Mandatory training:</strong> Training → Knowledge → Higher yields</li>
        <li><strong>Mandatory savings:</strong> Savings → Loans → Inputs → Output → Savings → Credit history → Safety net</li>
      </ul>
    </>
  ),
  "Implementation": (
    <>
      <h3 className="text-xl font-semibold mb-2">Implementation</h3>
      <ul className="list-disc ml-6">
        <li>Group mobilization</li>
        <li>Training</li>
        <li>Loan disbursement</li>
        <li>Monitoring and evaluation</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Actors, Roles, and Incentives</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Farmer Groups:</strong> Mobilize to borrow, invest, learn → incentive: access to credit & productivity</li>
        <li><strong>FSPs:</strong> Provide loans & services → incentive: market expansion</li>
        <li><strong>Ministry of Agriculture:</strong> Support productivity/resource use → incentive: boost GDP</li>
      </ul>
    </>
  ),
  "Monitoring & Evaluation": (
    <>
      <h3 className="text-xl font-semibold mb-2">Test (I): Process Monitoring and Refining</h3>
      <table className="table-auto text-sm border-collapse border border-gray-300 my-4 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Program Feature</th>
            <th className="border px-2 py-1">Stage 1</th>
            <th className="border px-2 py-1">Stage 2</th>
            <th className="border px-2 py-1">Stage 3</th>
            <th className="border px-2 py-1">Final Stage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Kuapa Loans</td>
            <td className="border px-2 py-1">Better farming knowledge</td>
            <td className="border px-2 py-1">Better inputs</td>
            <td className="border px-2 py-1">Improved yield</td>
            <td className="border px-2 py-1">Higher productivity</td>
          </tr>
        </tbody>
      </table>
      <ul className="list-disc ml-6">
        <li>Training evaluation (1 month)</li>
        <li>Volume of in-kind loan (2 weeks)</li>
        <li>Harvest data (12 months)</li>
        <li>Sustained productivity (24 months)</li>
      </ul>
    </>
  ),
  "Impact Evaluation": (
    <>
      <h3 className="text-xl font-semibold mb-2">Test (II): Data and Analytics</h3>
      <p>Impact evaluation is done using Randomized Controlled Trials (RCT):</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Baseline data collected (demographics, yield, income)</li>
        <li>Loan assignment is randomized for treatment vs control groups</li>
        <li>Surveys conducted every 6 months by extension workers</li>
        <li>12-month follow-up survey by FSPs</li>
        <li>Yield and productivity are compared between treatment and control groups</li>
      </ul>
    </>
  ),
  "Outcomes": (
    <>
      <h3 className="text-xl font-semibold mb-2">Expected Outcomes</h3>
      <ul className="list-disc ml-6">
        <li><strong>Better Farming Knowledge:</strong> Achieved through mandatory training</li>
        <li><strong>Improved Inputs and Yields:</strong> Enabled via loans</li>
        <li><strong>Sustained Productivity:</strong> Monitored over 24 months</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Indicators Used to Measure Outcomes</h3>
      <table className="table-auto text-sm border-collapse border border-gray-300 my-4 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Stage</th>
            <th className="border px-2 py-1">Indicator</th>
            <th className="border px-2 py-1">Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Training</td>
            <td className="border px-2 py-1">Evaluation at end of training</td>
            <td className="border px-2 py-1">1 month</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Inputs</td>
            <td className="border px-2 py-1">Volume of in-kind loan</td>
            <td className="border px-2 py-1">2 weeks</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Yield</td>
            <td className="border px-2 py-1">Harvest data</td>
            <td className="border px-2 py-1">12 months</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Productivity</td>
            <td className="border px-2 py-1">Sustained yield increase</td>
            <td className="border px-2 py-1">24 months</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Digital Credit Scoring": (
    <>
      <h3 className="text-xl font-semibold mb-2">Digital Credit Scoring</h3>
      <p>
        A data-driven credit scoring system helps assess creditworthiness of smallholder farmers who lack traditional financial records.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Approach:</strong> Uses verified agricultural data and repayment history</li>
        <li><strong>Score Range:</strong> 1–5, based on farm performance and financial behavior</li>
      </ul>
    </>
  ),
};


const Details = () => {
  const [isOpen, setIsOpen] = useState(false)

 

  return (
    <div className="rounded-lg bg-white p-6 border grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1">
        <Image
          src="/project1.png"
          alt="Project"
          width={500}
          height={400}
          className="object-cover w-1/2 lg:w-2/3 h-44 md:h-auto p-4 mx-auto"
        />
      </div>

      <div className="col-span-2 bg-gray-200 p-6">
        <h1 className="text-3xl md:text-4xl py-3">Overview of Agriculture in Ghana</h1>
        <p className="py-4">
        Agriculture in Ghana is largely characterized by smallholder farming, with approximately 
        90% of farmers cultivating less than 2 hectares of land. Despite the vast agricultural potential, 
        only 0.4% of the 7.85 million hectares of cultivated land is under irrigation. This highlights a 
        significant underutilization of irrigation technology in the country.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-[#4db848] px-6 py-3 text-white hover:bg-[#3d9c3a] transition"
        >
          Read More about The Ekulibi Project
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            as="div"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen flex items-center justify-center p-4 bg-black/50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-xl w-full max-w-5xl p-6 relative"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
                >
                  &times;
                </button>

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-center w-full">EKULIBI PROJECT</h2>
                 
                </div>

                {/* Tabs on Desktop */}
                <div className="hidden md:block" id="print-content">
                  <Tab.Group>
                    <Tab.List className="flex space-x-2 border-b pb-2 mb-4 overflow-x-auto">
                      {Object.keys(sections).map((tab) => (
                        <Tab
                          key={tab}
                          className={({ selected }) =>
                            classNames(
                              'px-4 py-2 rounded-t-lg text-sm font-medium focus:outline-none',
                              selected
                                ? 'bg-[#4db848] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            )
                          }
                        >
                          {tab}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="space-y-4">
                      {Object.values(sections).map((content, idx) => (
                        <Tab.Panel key={idx}>{content}</Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                </div>

                {/* Collapsibles on Mobile */}
                <div className="block md:hidden space-y-2" id="print-content">
  {Object.entries(sections).map(([title, content]) => (
    <Disclosure key={title}>
      {({ open }) => (
        <div> {/* <-- replace Fragment with div */}
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180' : ''} h-5 w-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-gray-700">
            {content}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  ))}
</div>

              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Details
