"use client";

import { motion } from "framer-motion"; 
import { Shield } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { FileText } from "lucide-react";
import { Users } from "lucide-react";
import { Database } from "lucide-react";



export const PrivacySection = () => {
  return (
    <section className="w-screen py-16 lg:py-24 bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
        
          >
           <div className="text-center">
            <div>
            
          <div className="flex items-center justify-center">
          <div className="w-12 h-0.5 bg-green-500"></div>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide ml-3">Privacy & Security</span>
          <div className="w-12 h-0.5 bg-green-500 ml-3 "></div>
          </div>

             
           <div className=" mt-6 flex items-center justify-center font-light"> 
           <p className="text-5xl">Privacy Policy</p>
           </div>


           <div className="mt-6 text-gray-500 text-xl font-light" >
             <p>Your privacy is important to us. This policy explains how we collect, use and protect<br/>your information.</p>
             </div>
           </div>

            <div className="flex items-center justify-center space-x-7 mt-15">
             <div className="w-65 h-80 bg-gray-100 rounded-lg shadow-md transform transition duration-300  hover:shadow-xl">
             <div className="w-10 h-10 bg-green-100 rounded-lg mt-8 ml-8 flex justify-center items-center"><Shield color="green" size={25}/></div>
              <div className="p-4 flex flex-col items-start ml-5 mt-2"><p className="text-xl text-black-800 font-semibold">Data Protection</p>
               <div className="text-left space-x-3">
             <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-[180px]">
             We implement industry-standard security measures to protect your personal and financial information.
             </p></div>
             </div>
             </div>


             <div className="w-65 h-80 bg-gray-100 rounded-lg shadow-md transform transition duration-300  hover:shadow-xl">
                 <div className="w-10 h-10 bg-green-100 rounded-lg mt-8 ml-8 flex justify-center items-center"><Lock color="green" size={25}/></div>
                 <div className="p-4 flex flex-col items-start ml-5 mt-2"><p className="text-xl text-black-800 font-semibold">Secure Transactions</p>
                 
               <div className="text-left space-x-3">
             <p className="text-base text-gray-600 mt-4 leading-relaxed">
              All transactions are encrypted using SSL technology to ensure your data remains secure.
             </p></div>
             </div>
             </div>



             <div className="w-65 h-80 bg-gray-100 rounded-lg shadow-md transform transition duration-300  hover:shadow-xl">
               <div className="w-10 h-10 bg-green-100 rounded-lg mt-8 ml-8 flex justify-center items-center"><Eye color="green" size={25}/></div>
               <div className="p-4 flex flex-col items-start ml-5 mt-2"><p className="text-xl text-black-800 font-semibold">Transparency</p>
               <div className="text-left space-x-3">
               <p className="text-base text-gray-600 mt-4 leading-relaxed">
               We are transparent about how we collect, use, and protect your information.
               </p></div>
               </div>
             </div>  
            </div>




            <div className="flex items-center justify-center space-x-7 mt-10">
               <div className="w-65 h-80 bg-gray-100 rounded-lg shadow-md transform transition duration-300  hover:shadow-xl">
               <div className="w-10 h-10 bg-green-100 rounded-lg mt-8 ml-8 flex justify-center items-center"><FileText color="green" size={25}/></div>
               <div className="p-4 flex flex-col items-start ml-5 mt-2"><p className="text-xl text-black-800 font-semibold">Your Rights</p>
               <div className="text-left space-x-3">
               <p className="text-base text-gray-600 mt-4 leading-relaxed">
               You have the right to access, modify, or delete your personal information at any time.
               </p></div>
               </div>    
             </div>




             <div className="w-65 h-80 bg-gray-100 rounded-lg shadow-md transform transition duration-300  hover:shadow-xl">
                <div className="w-10 h-10 bg-green-100 rounded-lg mt-8 ml-8 flex justify-center items-center"><Users color="green" size={25}/></div>
                <div className="p-4 mt-2"><p className="text-xl text-black-800 font-semibold items-left text-left leading-snug ml-4">No Third-Party <br/> Sharing</p>

                <div className="text-left ">
                <p className="text-base text-gray-600 mt-4 max-w-[195px] leading-relaxed ml-4">
                We do not sell, trade, or share your personal information with third parties without your consent.
                </p></div>
                </div> 
             </div>


             
             <div className="w-65 h-80 bg-gray-100 rounded-lg shadow-md transform transition duration-300  hover:shadow-xl">
                <div className="w-10 h-10 bg-green-100 rounded-lg mt-8 ml-8 flex justify-center items-center"><Database color="green" size={25}/></div>
                <div className="p-4 flex flex-col items-start ml-5 mt-2"><p className="text-xl text-black-800 font-semibold">Data Retention</p>

                <div className="text-left space-x-3">
                <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-[170px]">
                We retain your information only for as long as necessary to provide our services.
                </p></div>
                </div>
             </div>
             </div>

             <div className="relative w-[845px] h-87 bg-gray-100 rounded-lg mt-16 mx-auto text-start leading-relaxed">
                <div className="relative top-2 p-7 text-2xl ml-1 font-semibold">Information We Collect </div>
                <div className=" ml-8 mb-4 max-w-[755px]">We collect information you provide directly to us, such as when you create an account, make a transaction, or contact our support team. This may include:</div>
                <div className="ml-12">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Personal identification information (name, email, address, phone number)</li>
                        <li>Financial information (bank account details, transaction history)</li>
                        <li>Business information (company name, registration details)</li>
                        <li>Device and usage information (IP address, browser type, operating system)</li>
                        <li>Location information (when you use location-based services)</li>
                    </ul>
                </div>
             </div>





             <div className="relative w-[845px] h-90 bg-gray-100 rounded-lg mt-16 mx-auto text-start leading-relaxed">
                <div className="relative top-2 text-2xl p-7 ml-1 font-semibold">How We Use Your Information</div>
                <div className="ml-8 mb-4 max-w-[785px]">We use the information we collect to provide, maintain, and improve our services:</div>
                <div className="ml-10">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Process Transactions and provide payment services</li>
                        <li>Verify your identity and prevent fraud</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Send important updates about our services</li>
                        <li>Improve our products and develop new features</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>
                </div>
             </div>




             <div className="relative w-[845px] h-84 bg-gray-100 rounded-lg mt-16 mx-auto text-start leading relaxed">
                <div className=" relative top-2 text-2xl font-semibold ml-1 p-7 ">Information Sharing and Disclosure</div>
                <div className="ml-8 mb-4 max-w-[770px]">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</div>
                <div className="ml-10">
                    <ul className="list-disc list-inside space-y-2">
                        <li>With your explicit consent</li>
                        <li>To comply with legal obligations or court orders</li>
                        <li>To protect our rights, property or safety</li>
                        <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                        <li>In connection with a business transfer or merger</li>
                    </ul>
                </div>
             </div>



             <div className="relative w-[845px] h-85 bg-gray-100 text-start leading relaxed mt-16 mx-auto rounded-lg">
                <div className=" relative top-2 p-7 text-2xl ml-1 font-semibold">Data Security</div>
                <div className="ml-8 mb-4 max-w-[770px]">We implement appropriate technical and organizational security measures to protect your personal information:</div>
                <div className="ml-10">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments and updates</li>
                        <li>Access controls and authentication measures</li>
                        <li>Employee training on data protection</li>
                        <li>Incident response procedures</li>
                    </ul>
                </div>
             </div>



             <div className=" relative w-[845px] h-90 bg-gray-100 mx-auto rounded-lg leading-relaxed mt-18 text-start">
                <div className="relative top-2 ml-1 text-2xl font-semibold p-7">Your Rights and Choices</div>
                <div className="ml-8 mb-4 max-w-[785px]">You have certain rights regarding your personal information:</div>
                <div className="ml-12">
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold">Access:</span> Request a copy of your personal information</li>
                        <li><span className="font-semibold">Correction:</span> Update or correct inaccurate information</li>
                        <li><span className="font-semibold">Deletion:</span> Request deletion of your personal information</li>
                        <li><span className="font-semibold">Portability:</span> Receive your data in a portable format</li>
                        <li><span className="font-semibold">Objection:</span> Object to certain processing activities</li>
                        <li><span className="font-semibold">Withdrawal:</span> Withdrawal consent where applicable</li>
                    </ul>
                </div>
             </div>


             <div className=" relative w-[845px] h-63 bg-gray-100 mx-auto rounded-lg mt-18 text-start leading-relaxed space-y-2">
                <div className="relative top-2 ml-4 text-2xl font-semibold p-6">Contact Us</div>
                <div className="ml-10 mb-3 max-w-[785px]">If you have any questions about this Privacy Policy or our data practices, please contact us:</div>
                <div className="ml-10"><span className="font-semibold">Email:</span> privacy@globalpayng.com</div>
                <div className="ml-10"><span className="font-semibold">Phone:</span> +234 913 000 0310</div>
                <div className="ml-10"><span className="font-semibold">Address:</span> 5A Sogunle Street, Ikeja, Lagos State, Nigeria</div>
             </div>


             <div className="mt-13">Last updated: January 2025</div>











            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
