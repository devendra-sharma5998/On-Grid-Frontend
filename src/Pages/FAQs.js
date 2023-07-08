// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../Header/Navbar';
import '../Styles/Faq.css'
import Footer from '../Header/Footer';


const FAQs=()=> {
  return (
    <>
    <Navbar/>

    <div id="faq-header">
        {/* <img src={download} alt='404'/> */}
        <div id="faqPage">
          <h1>Frequrently Asked Questions (FAQs)</h1>
        </div>
      </div>

      <h2 style={{ marginLeft: "5%", display: "flex" }}>
        <b>FAQs by client organizations</b>
      </h2>

    <div style={{marginLeft:'120px',marginRight:'120px',marginBottom:'0',paddingBottom:'0'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography>What is background verification (BGV)?</Typography>
          {/* <h3>What is background verification (BGV)?</h3> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{justifyContent:'flex-start',display:'flex'}}>
          Background verification (BGV), also referred to as Background
                check (BGC) or background screening is a process that validates
                the credentials claimed by an individual going through the BGV
                process. The individual can be an employee, contractor, user,
                loan applicant, merchant, or a candidate requesting to access
                any product or service. The BGV process is a combination of
                checks, and the organization requesting BGV generally selects
                the list of checks. Some common checks include identity
                verification, address verification, criminal record check, prior
                employment verification, highest education verification,
                professional reference checks, credit history checks, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is the potential impact of not doing background verification?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Not running background checks can lead to various risks for an organization such as ending up with a bad hire, non-compliance to ISO requirements, organization brand value, and reputational risk, safety risks, as well as financial liability risks.

In context of employment, not doing Background verification (BGV) can lead to induction of a wrong hire (or a hire with a malicious past), that can in turn adversely impact the team culture, or even result in modern-day threats related to data security.

According to a 2014 survey, a wrong hire can single-handedly bring down the team productivity by 15% and can cause negative financial impact accounting for 10 times the cost to the company (CTC).
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can we start BGV of our employees?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Getting started on OnGrid is a simple 3-step process:
OnGrid team will demonstrate the platform. You can request for a demo here.
Agreement between OnGrid and client organization, indicating the list of checks and mode of secure information exchange.
There are four options of information (data, documents, consent) exchange, and the client can choose one. These options include:
API integration,
Self-registration by the candidate,
Registration and request by authorized user, or
Bulk data format shared by the client
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How much time does it take for BGV process to complete?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Most verifications that are primarily digital in nature, such as ID verification, criminal record verification, credit score check, bank account verification, eLockr reference check (proprietary check only offered by OnGrid) get completed in less than 4hrs. Some of these can even happen instantly.

Verifications that require manual intervention or field operational effort such as field address verification, professional reference check, drug test get completed within 24-48 hours.

Some verifications that are dependent on a third party may take longer, and it can go to 5-10 working days. These include education record (some universities and institutes), prior employment verification, letter-based address verification.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What checks can be conducted under BGV? Do you have fixed packages, or can we customize the checks as per our requirement?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          OnGrid clients can choose from over 30 checks, that can be added in a package. The package can be customized as per client requirement.

The checks include ID verification (National IDs such as Aadhaar, PAN, Driving License, Voter ID, Passport), Court/criminal record verification, Address verification (physical visit), Address verification (postal method), Education record verification, Employment record verification, Professional reference checks, Police verification through law firm, Police verification through State department, Global database check, Credit check, Drug test, Traffic violation check, Curriculum Vitae (CV) validation, Vehicle registration check, Directorship check, Bank account verification, GST verification, Vendor due diligence, Medical registration checks.

Your point of contact from OnGrid would also suggest the right set of checks for you, depending on industry and candidate profile, that will help you with both risk mitigation as well as compliance.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can the candidate register directly and upload data, documents and consent for BGV?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Yes. OnGrid offers a unique feature that allows the candidate to sign-up and provide information, documents, and consent to initiate background checks. All we need in such case from the clients is the email ID of the candidate, using which we can email the candidate a self-registration link. This modern approach saves a lot of time and effort of executives running the BGV program in an organization (Eg. HR managers, talent acquisition leaders), and minimizes manual interventions.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Are documents required for BGV? Are scans good enough? How are documents collected for BGV?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Documents are required for conducting some checks. However, many digital verifications (eg. ID verification, court record verification, credit score check, bank account verification) can be initiated without any document.

For checks where documents are required, scanned(soft) copy is not only recommended but also preferred, as OnGrid offers a completely paperless platform.

Documents can be collected using any of the following means:
Upload during self-registration by the candidate,
API integrations between OnGrid and client systems (eg. HRMS / ATS),
Upload by client user on OnGrid portal, or
Email from client user to OnGrid operations team.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Candidate has not submitted complete information or documents. How can you help us?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          OnGrid platform allows to send system-generated periodic reminders to the candidates to complete registration on time, and/or to provide any missing information or document(s). We also provide our clients to choose an option in which we follow-up with the candidates directly, so that they can outsource the complete process to us, and not have to worry about "insufficiency resolution".
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>We want to verify our customers? Can we do that?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Yes, you can verify your users. This can be particularly critical if you trust your users with money (eg. loan) or assets (eg. car on rent, furniture on rent). Some common verifications would include instant ID verification, electronic KYC, instant credit check, instant face match (between ID uploaded and selfie taken). We would be keen to discuss other checks that may be relevant, depending on the user and risk profile.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the information security and privacy measures that OnGrid has in place?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          OnGrid is an ISO 27001:2013 certified organization, that uses highly secure state-of-the-art cloud infrastructure for information security. OnGrid platform's community and sub-community structure allows for strong access control provisions. Hypersensitive data such as some national IDs are stored using SHA-256 encryption and stored in secure data vaults. Private information such as ID numbers, mobile numbers, etc. are masked in the status and consolidated reports. OnGrid also follows a practice of annual third party audits by a CERT-IN certified auditor, on all the front end and backend systems. No information on OnGrid can be shared with anyone without explicit consent (authorization) of the individual to whom such data or document belongs.

At OnGrid, our ambition is to follow the most stringent and modern data privacy and security principles (eg. GDPR) and respect the choice of the individual, who is the real owner of her/his data. We want to follow this not just on paper, but in spirit. In this regard, we have the provision where any individual with information or document(s) on OnGrid can request for edit or deletion of any/all information or document(s) by sending an email to contact@ongrid.in, with the subject "My data, my privacy".

While enhancing data security and privacy is always a work in progress, we do welcome your suggestions on the same. Please write to us at partner@ongrid.in if you would like to help us enhance our data security and privacy policies, procedures and technical controls.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can we take consent from the candidates who go through BGV?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Consent is the key aspect in the background verification (BGV) process. Consent can be captured via:
Digital Interface - When the candidate is submitting the information and documents during self-registration on a web portal or an app.
Physical Interface - When the candidate signs a document such (eg. An appointment letter). The consent language can be included in the same.
Consent is key to privacy adherence, and we recommend that the consent must be wilful, and follow the principles of purpose limitation. If possible, take the consent in the local language as well, in addition to English.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I have a question which is not mentioned here. How do I reach out?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          To know more about BGV and related concepts, or to learn more about OnGrid's BGV offerings and methodologies, please send us an email at contact@ongrid.in.

          </Typography>
          <hr/>
        
      </Accordion>

        </div>

      <h2 style={{ marginLeft: "5%", display: "flex",marginTop:'5%' }}>
        <b>FAQs by individuals or BGV candidates</b>
      </h2>

      <div style={{marginLeft:'120px',marginRight:'120px',marginBottom:'0',paddingBottom:'0'}}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I got a registration link from OnGrid, what needs to be done?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          OnGrid triggers a self-registration link when either your current or prospective employer (or possibly a service provider) wishes to initiate a background verification to validate the personal and/or professional claims. Kindly complete the registration process at the earliest by clicking on the link. If you face any issues in completing your registration process or in uploading documents, please send us an email at support@ongrid.in.

          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I got a digital address verification link from OnGrid, what needs to be done?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          The link is provided to complete your address verification as part of the ongoing background verification process. Use your smartphone to click on the link, verify your details, and complete the process (this will include the capture of relevant images and a short video from your smartphone). If you face any issues in completing the process, please send us an email at support@ongrid.in.

          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I got an address verification letter from OnGrid, what needs to be done?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Getting started on OnGrid is a simple 3-step process:
OnGrid team will demonstrate the platform. You can request for a demo here.
Agreement between OnGrid and client organization, indicating the list of checks and mode of secure information exchange.
There are four options of information (data, documents, consent) exchange, and the client can choose one. These options include:
API integration,
Self-registration by the candidate,
Registration and request by authorized user, or
Bulk data format shared by the client
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How does OnGrid protect my data and documents?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          OnGrid is an ISO 27001:2013 certified organization, that uses highly secure state-of-the-art cloud infrastructure for information security. OnGrid platform's community and sub-community structure allows for strong access control provisions. Hypersensitive data such as some national IDs are stored in an encrypted using SHA-256 encryption and stored in secure data vaults. Private information such as ID numbers, mobile numbers, etc. is masked in the status and consolidated reports. OnGrid also follows a practice of annual third party audits by a CERT-IN certified auditor, on all the front end and backend systems. No information on OnGrid can be shared with anyone without explicit consent (authorization) of the individual to whom such data or document belongs.

At OnGrid, our ambition is to follow the most stringent and modern data privacy and security principles (eg. GDPR), and respect the choice of the individual, who is the real owner of her/his data. We want to follow this not just on paper, but in spirit.

While enhancing data security and privacy is always a work in progress, we do welcome your suggestions on the same. Please write to us at partner@ongrid.in if you would like to help us enhance our data security and privacy policies, procedures, and technical controls.
          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>My record is on OnGrid. I want to edit or delete it. How do I go about doing it?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          At OnGrid, we have the provision where any individual with information or document(s) on OnGrid can request for edit or deletion of any/all information or document(s) by sending an email to contact@ongrid.in, with the subject "My data, my privacy".

          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I have a question which is not mentioned here. How do I reach out?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          Please write to contact@ongrid.in, and we will get back to you. We are available during working hours from Monday to Friday, 0900 hours to 1800 hours, except on public holidays. Request your patience in case there is a delay in response. Each individual and each query is important for us, and we will definitely get back!   

          </Typography>
          <hr/>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How does OnGrid protect my data and documents?</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
          <Typography>
          To know more about BGV and related concepts, or to learn more about OnGrid's BGV offerings and methodologies, please send us an email at contact@ongrid.in.

          </Typography>
          <hr/>
        
      </Accordion>
      </div>
    <Footer/>
    </>
  );
}


export default FAQs