'use client';

import CertificateItem from "./CertificateItem";
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import React from 'react';

// Ultra-optimized background blobs with minimal parallax
const CertificateBlobs = ({ y1, y2, y3, isMobile }: { y1: MotionValue<number>; y2: MotionValue<number>; y3: MotionValue<number>; isMobile: boolean; }) => {
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 overflow-hidden z-0 hidden sm:block pointer-events-none" aria-hidden="true">
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-400/10 rounded-full blur-xl animate-blob" />
      <motion.div style={{ y: y2 }} className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-blob" />
      <motion.div style={{ y: y3 }} className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-fuchsia-400/10 rounded-full blur-xl animate-blob" />
    </div>
  );
};

const Certificates = () => {
  const sectionRef = useRef(null);
  const [visibleCertificates, setVisibleCertificates] = useState(6); // Show 6 certificates initially (2 rows of 3)
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ultra-optimized parallax effect for blobs - disabled on mobile
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -25]);

  const certificates = [
    {
      key: "1",
      title: "Basics of Java Programming",
      organization: "Chandigarh University collaborated with byteXL",
      issueDate: "December 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190860/Portfolio_certificates_images/Basics_of_Java_Programming_ByteXL_wf9oey.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190860/Portfolio_certificates_images/Basics_of_Java_Programming_ByteXL_wf9oey.jpg",
    },
    {
      key: "2",
      title: "Basics of Java Programming",
      organization: "Chandigarh University",
      issueDate: "October 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190860/Portfolio_certificates_images/Abhinav_Sharma_CET7329171_pages-to-jpg-0001_x2suhs.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190860/Portfolio_certificates_images/Abhinav_Sharma_CET7329171_pages-to-jpg-0001_x2suhs.jpg",
    },
    {
      key: "3",
      title: "AWS Solutions Architecture Job Simulation",
      organization: "Amazon Web Services (AWS)",
      issueDate: "October 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767189840/Portfolio_certificates_images/AWS_Solutions_Architecture_Job_Simulation_tlqnqt.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767189840/Portfolio_certificates_images/AWS_Solutions_Architecture_Job_Simulation_tlqnqt.jpg",
    },
    {
      key: "4",
      title: "Data Science",
      organization: "Chandigarh University",
      issueDate: "October 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190871/Portfolio_certificates_images/Abhinav_Sharma_CET7329171_page-0001_god28m.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190871/Portfolio_certificates_images/Abhinav_Sharma_CET7329171_page-0001_god28m.jpg",
    },
    {
      key: "5",
      title: "Introduction to AI",
      organization: "Chandigarh University",
      issueDate: "October 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191002/Portfolio_certificates_images/Introduction_to_AI_CU_jqktu6.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191002/Portfolio_certificates_images/Introduction_to_AI_CU_jqktu6.jpg"
    },
    {
      key: "6",
      title: "Applied Data Analytics for Business Decisions",
      organization: "Chandigarh University",
      issueDate: "October 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767189781/Portfolio_certificates_images/Applied_Data_Analytics_for_Business_Decisions_qtshgh.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767189781/Portfolio_certificates_images/Applied_Data_Analytics_for_Business_Decisions_qtshgh.jpg"
    },
    {
      key: "7",
      title: "React JS Course",
      organization: "Scaler",
      issueDate: "September 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191024/Portfolio_certificates_images/Scaler_ReactJS-Certificate_ipulg0.png",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191024/Portfolio_certificates_images/Scaler_ReactJS-Certificate_ipulg0.png",
    },
    {
      key: "8",
      title: "Full Stack Development",
      organization: "Chandigarh University",
      issueDate: "September 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190881/Portfolio_certificates_images/ACP_L1_P1_Certificate_PDF_-_ACP_L1_P1_Certificate_PDF_page-0001_dls4fa.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190881/Portfolio_certificates_images/ACP_L1_P1_Certificate_PDF_-_ACP_L1_P1_Certificate_PDF_page-0001_dls4fa.jpg",
    },
    {
      key: "9",
      title: "Software Engineering Job Simulation",
      organization: "JPMorgan",
      issueDate: "September 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191017/Portfolio_certificates_images/JP_Morgan_Software_Engineering_Job_Simulation_completion_certificate_g20rzl.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191017/Portfolio_certificates_images/JP_Morgan_Software_Engineering_Job_Simulation_completion_certificate_g20rzl.jpg",
    },
    {
      key: "10",
      title: " Build Real World AI Applications with Gemini and Imagen",
      organization: "Google",
      issueDate: "September 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190894/Portfolio_certificates_images/build-real-world-ai-applications-with-gemini-and-im_v8mxm7.png",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190894/Portfolio_certificates_images/build-real-world-ai-applications-with-gemini-and-im_v8mxm7.png",
    },
    {
      key: "11",
      title: " Introduction to Generative AI",
      organization: "Google",
      issueDate: "September 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191010/Portfolio_certificates_images/Introdunction_to_Ai_certificate_page-0001_hjw614.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767191010/Portfolio_certificates_images/Introdunction_to_Ai_certificate_page-0001_hjw614.jpg",
    },
    {
      key: "12",
      title: "Strategy Planning and Execution",
      organization: "Harvard Business Publishing",
      issueDate: "August 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190978/Portfolio_certificates_images/strategy_planning_and_execution_page-0001_dlu02w.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190978/Portfolio_certificates_images/strategy_planning_and_execution_page-0001_dlu02w.jpg",
    },
    {
      key: "13",
      title: "Decision Making",
      organization: "Harvard Business Publishing",
      issueDate: "August 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190911/Portfolio_certificates_images/decision_making_page-0001_mznecl.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190911/Portfolio_certificates_images/decision_making_page-0001_mznecl.jpg",
    },
    {
      key: "14",
      title: " Digital Intelligence",
      organization: "Harvard Business Publishing",
      issueDate: "August 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190928/Portfolio_certificates_images/digital_intelligence_page-0001_svi0rp.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190928/Portfolio_certificates_images/digital_intelligence_page-0001_svi0rp.jpg",
    },
    {
      key: "15",
      title: "Innovation and Creativity",
      organization: "Harvard Business Publishing",
      issueDate: "August 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190958/Portfolio_certificates_images/innovation_and_creativity_page-0001_hab6jc.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190958/Portfolio_certificates_images/innovation_and_creativity_page-0001_hab6jc.jpg",
    },
    {
      key: "16",
      title: "Team Management",
      organization: "Harvard Business Publishing",
      issueDate: "August 2025",
      certificateImg: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190986/Portfolio_certificates_images/team_management_page-0001_s04t5t.jpg",
      verifyUrl: "https://res.cloudinary.com/abhinavsharma/image/upload/v1767190986/Portfolio_certificates_images/team_management_page-0001_s04t5t.jpg",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCertificates(prev => Math.min(prev + 6, certificates.length));
  };

  const handleShowLess = () => {
    setVisibleCertificates(6);
    // Scroll to the top of the certificates section
    const section = document.getElementById('certificates');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayedCertificates = certificates.slice(0, visibleCertificates);
  const totalCertificates = certificates.length;

  return (
    <section id="certificates" ref={sectionRef} className="py-8 min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#0f172a] relative">
      <CertificateBlobs y1={y1} y2={y2} y3={y3} isMobile={isMobile} />

      <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: isMobile ? 0.3 : 0.8, type: 'spring', bounce: 0.22 }}
          className="font-orbitron text-center font-bold dark:text-white text-4xl sm:text-5xl mt-4 text-blue-950 drop-shadow-lg"
        >
          Certificates ({totalCertificates})
        </motion.h1>

        <div className="mx-auto mt-3 mb-8 h-1 w-full max-w-[340px] md:max-w-[480px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-400" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedCertificates.map((certificate, index) => {
            const { key, ...rest } = certificate;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: isMobile ? 0.2 : 0.6, delay: index * (isMobile ? 0.05 : 0.1), type: 'spring', bounce: 0.22 }}
              >
                <CertificateItem key={key} {...rest} />
              </motion.div>
            );
          })}
        </div>

        {certificates.length > visibleCertificates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, type: 'spring', bounce: 0.22 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Load More Certificates
            </button>
          </motion.div>
        )}

        {visibleCertificates > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, type: 'spring', bounce: 0.22 }}
            className="flex justify-center mt-4"
          >
            <button
              onClick={handleShowLess}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;