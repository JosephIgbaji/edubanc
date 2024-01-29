const faqs = [
  {
    question: "What is Edubanc?",
    answer:
      "Edubanc is an Edtech startup focused on solving basic human capital problems as regards access to quality and affordable education. ",
    category: "edubanc",
  },
  {
    question: "What are the objectives of Edubanc? ",
    answer:
      "To increase the number of children in School, improve educational infrastructures, improve the quality of teachers and create conducive learning environment. ",
    category: "edubanc",
  },
  {
    question: "What is Edubanc offering?",
    answer:
      "Edubanc is focused on improving the quality and standard of education in Nigeria by: Providing financial services to Stakeholders (Grants, Investment opportunities, etc.) Organising of training programs for Teachers, towards capacity building. Provision of welfare-enhancing packages for stakeholders. ",
    category: "edubanc",
  },
  {
    question: "What products are available under Edubanc? ",
    answer:
      "There are lot of amazing products/offering on Edubanc, these include: TEACHERS TRAINING - A free online learning platform that avail all Nigeria teachers the opportunity to acquire soft skills and also have access to a preparatory training for TRCN (Teachers Registration Council of Nigeria) certification. This program is done in partnership with 1million teachers (1MT) EDINVEST - An investment platform that allows you earn attractive interest on your investment while availing you an opportunity to contribute to an improved education system in Nigeria. EDPAY - A lending platform that offers finance to Parents/Guardians solely for the purpose of school fee payment for Students. EDCLUB - A target savings product that allows you save for a minimum of 3 months with the benefit of personal loan of up to 200% of total savings, and an alternative access asset financing. ALTMALL - An e-commerce platform that enables you purchase items of your choice online with an opportunity for a convenient repayment plan. ",
    category: "edubanc",
  },
  {
    question: "Who can benefit from Edubanc? ",
    answer:
      "All stakeholders in the Education Sector (Schools, School Owners/Administrators, Academic & Non-Academic Staff, Parents/Guardians). ",
    category: "edubanc",
  },
  {
    question: "How can I be a part of Edubanc? ",
    answer:
      "Click on the Join community button to register and be part of the amazing world of Edubanc. ",
    category: "edubanc",
  },
  {
    question: "I have more questions, who can I talk to?",
    answer:
      "Please click the HELP button on the platform to ask your questions and we would get back to you as soon as possible. ",
    category: "edubanc",
  },
  {
    question: "What is EdPay?",
    answer:
      "EdPay is a loan offering which provides Parents/Guardians with quick access to affordable funds to enable payment of fees. It also helps to provide revenue assurance for schools to enable seamless execution of programs and activities throughout the term/session. ",
    category: "edpay",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "To apply for a loan, visit www.edubanc.ng, join the Edubanc community and proceed to EdPay for the loan application. ",
    category: "edpay",
  },
  {
    question: "What are the criteria for the EdPay loan application?",
    answer:
      "    The applicant should be a salary-earner or a business owner. <br /> Applicant should provide details of operational account reflecting salary or business earnings in the last 6 months. <br /> Applicants Bank Verification Numbers (BVN) must be linked to the account details provided. <br />The loan request should not be more than 33.3% of applicant's monthly income. <br />The applicant should have a good credit report.",
    category: "edpay",
  },
  {
    question: "What is your interest rate?",
    answer:
      "EdPay interest rate ranges from as low as 9% to a maximum of 19.75%. This is subject to applicable terms of agreement with the registered schools. ",
    category: "edpay",
  },
  {
    question: "What are the documents required?",
    answer:
      "EdPay loan application does not require any neither documentation or collateral. ",
    category: "edpay",
  },
  {
    question: "How many children can I take the EdPay loan for?",
    answer:
      "The EdPay loan qualification is subject to your capacity to repay, irrespective of the number of children you apply for. ",
    category: "edpay",
  },
  {
    question: "Do I need to upload Bank statement during my loan application?",
    answer:
      "No, you do not need to. Six months Bank statement of your operational account with any bank will be verified and analyzed by the platform in the process of your application. ",
    category: "edpay",
  },
  {
    question: "Will I be charged for Statement Analysis?",
    answer:
      "Yes, you will be charged for the statement verification process, however the cost is subject to the volume of your statement of account, and your originating bank’s charges for that service. ",
    category: "edpay",
  },
  {
    question: "Do I have to apply for a loan every term?",
    answer:
      "No, you can apply for a full session at once if the total sum is within your credit capability instead of repeating the application from term to term. ",
    category: "edpay",
  },
  {
    question: "How long will it take to get my loan?",
    answer: "Loan is disbursed within 5 minutes of a successful application. ",
    category: "edpay",
  },
  {
    question: "Will the fund be disbursed into my account?",
    answer:
      "Yes. However, you would not have access to it instead the funds would be transferred to your selected school account for payment of fees. ",
    category: "edpay",
  },
  {
    question: "What is Nexford?",
    answer:
      "Nexford is an American university licensed in Washington DC. The University offers 100% online learning experience with a high-quality tech-driven platform that prepares students for the global workplace system. ",
    category: "nexford",
  },
  {
    question: "Why Nexford?",
    answer:
      "Nexford University, in partnership with Edubanc offers an incredible discount on school fees and equally provides low interest loans for school-fee financing. ",
    category: "nexford",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "To apply for a loan, visit our website edubanc.ng to join the community and click on the Nexford card on the dashboard and then proceed to your loan application. ",
    category: "nexford",
  },
  {
    question: "What are the criteria for loan application?",
    answer:
      "    You must have gotten your admission number from Nexford university. <br/> Your BVN must be linked to the operational account provided. <br/>You must have been in employment for a minimum of 6 months as a salary earner. <br/>Your business must have been running for at least 6 months as a business owner. <br/>Your loan should not be more than 33.3% of your monthly income. <br/>You must have a good credit report. <br/>Your loan application cannot be more than the expected school fee amount. ",
    category: "nexford",
  },
  {
    question: "What is your interest rate?",
    answer:
      "Edubanc offers 5% interest on Nexford school fees financing which is subject to discount obtained from university. ",
    category: "nexford",
  },
  {
    question: "What is your exchange rate?",
    answer:
      "Exchange rate is currently N490 per dollar. This rate is subject to the prevailing market rate as at the time of applying for your loan. ",
    category: "nexford",
  },
  {
    question: "Is the loan available to everyone?",
    answer:
      "Yes, it is available to every applicant who meets the financial Qualifications and academic Qualifications for the academic programme. ",
    category: "nexford",
  },
  {
    question: "What is the loan amount for the MBA?",
    answer:
      "The Tuition fee of $1,632 is paid on behalf of the applicant for one year.",
    category: "nexford",
  },
  {
    question: "What is the loan amount for the BBA?",
    answer:
      "The Tuition fee of $816 is paid on behalf of the applicant for one year.",
    category: "nexford",
  },
  {
    question: "What are the required documents?",
    answer: "Loan application requires neither documentation nor collateral.",
    category: "nexford",
  },
  {
    question: "Can I make early repayment?",
    answer:
      "Yes, early repayment is allowed. In fact, it is highly encouraged.",
    category: "nexford",
  },
  {
    question:
      "As a parent/Guardian, how many students can I take out loans for?",
    answer:
      "You can apply for as many students as possible, so far, the total sum is within your credit eligibility and capacity. ",
    category: "nexford",
  },
  {
    question: "What happens if a candidate submits false information?",
    answer:
      "Edubanc would double-check all the information provided by all candidates and if any information is found as false, that candidate’s application will be rejected. ",
    category: "nexford",
  },
  {
    question:
      "Do I need to upload my bank statement during my loan application?",
    answer:
      "No, you do not need to upload a bank statement. A 6-month bank statement of your operational account with any bank will be verified and analyzed by the platform in the process of your application. ",
    category: "nexford",
  },
  {
    question: "Will I be charged for the Statement Verification?",
    answer:
      "Yes, you will be charged for the statement verification process. The cost of the statement verification is subject to the volume of your bank statement. ",
    category: "nexford",
  },
  {
    question: "Do I have to apply for the loan monthly?",
    answer: "No, the loan offering is for a full year (12 months at once).",
    category: "nexford",
  },
  {
    question: "What is teachers training initiative? ",
    answer:
      "This is an online learning platform designed in collaboration with 1Million Teachers to improve teachers’ quality in Nigeria. ",
    category: "tti",
  },
  {
    question: "What is the 1Million Teachers program? ",
    answer:
      "1Million Teachers is an international body that provide teachers with a solid foundation of basic subjects and pedagogical knowledge, ongoing professional development with effective mechanisms in place to mentor, support, and motivate them. This is to increase their professional capacity and enhance the learning outcomes of their students. ",
    category: "tti",
  },
  {
    question: "What is the eligibility of the program? ",
    answer: "Everyone who has the goal of becoming a qualified teacher.",
    category: "tti",
  },
  {
    question: "What learning modes are available on the platform? ",
    answer:
      "Courses are available in two learning paths. Participants can acquire soft skill set or get prepared to acquire TRCN certification. ",
    category: "tti",
  },
  {
    question: "Is 1Million Teachers supported by the government?",
    answer:
      "1MT aim to eventually get an official endorsement of the federal government through the Global Affairs Canada and the high commissioner in Nigeria. They are strongly supported by the Smith School of Business, the Centre for Social Impact at Queens University as well as the faculty Education at Queens University. ",
    category: "tti",
  },
  {
    question:
      "What happens when the learner does not pass a particular module? ",
    answer:
      "The teacher is required to take the quizzes as many times as it takes to pass before moving on. ",
    category: "tti",
  },
  {
    question: "Will there be any examination in the program?",
    answer:
      "Yes, there will be quizzes at the end of each module which will be evaluated for assessment. ",
    category: "tti",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, certificate will be issued upon completion of each module.",
    category: "tti",
  },
  {
    question: "What is Schoolable? ",
    answer:
      "Schoolable is a robust financial management system, specifically crafted for schools to ease reconciliation and accounting processes. ",
    category: "schoolable",
  },
  {
    question: "What information do I need to open family/parents accounts? ",
    answer:
      "All family accounts are sub accounts under the school's main account. All you need is to upload details of the family name, parents’ email and phone number, and the accounts will be opened. ",
    category: "schoolable",
  },
  {
    question: "Can I transact with my Schoolable account? ",
    answer:
      "Yes! you can receive and send money with your Schoolable business account. ",
    category: "schoolable",
  },
  {
    question:
      "Can all inflows be settled into various accounts in other Banks? ",
    answer:
      "Yes, you can. We understand that you may have existing financial obligations with other Banks. You can specify a percentage of inflow you want, and it will be split and settled into nominated bank accounts. ",
    category: "schoolable",
  },
  {
    question: "Can Parents login to see payment history & print receipts? ",
    answer:
      "Yes. However, this feature is optional. Schools can choose to activate this feature which enables Families/Parents have login access to see ONLY their payment history and print receipts. ",
    category: "schoolable",
  },
  {
    question: "How safe is my money? ",
    answer:
      "All deposits held in Schoolable are NDIC insured. Banking services are provided by Sterling Bank Plc. ",
    category: "schoolable",
  },
  {
    question: "What is the access level controls on the account? ",
    answer:
      "Schoolable has a powerful access level control system that only grants access to approved users. All approvals come from the admin user who is typically a director, CFO or the School owner. ",
    category: "schoolable",
  },
  {
    question: "Can I run multiple campuses with one Schoolable account?",
    answer:
      "Yes, you can run and view multiple campus activities from one Schoolable dashboard. ",
    category: "schoolable",
  },
  {
    question: "",
    answer: "",
    category: "",
  },
];

export default faqs;
