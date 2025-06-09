import React from "react";
import Header from "../components/header/Header";
import './Admission.css'

const AdmissionsPage = () => {
  return (
    <div className="bg-teal-200 min-h-screen font-serif px-4 py-6">
      
      <div className="bg-blue-600 text-white text-xl font-bold p-4 flex justify-between items-center rounded-t-lg">
        <span>Vivekanand College</span>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Admissions at <br /> Vivekanand College
        </h1>
        <p className="mb-4">
          Welcome to the Admissions page of Vivekanand College! We are delighted you’re considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.
        </p>
        <p className="mb-6">
          Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.
        </p>

        <h2 className="text-xl font-bold mb-2">Eligibility Criteria for Undergraduate Programs</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Program</th>
                <th className="border p-2">Minimum Qualification</th>
                <th className="border p-2">Required Subjects</th>
                <th className="border p-2">Min. Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">B.Sc. Computer Science</td>
                <td className="border p-2">10+2 (or equivalent)</td>
                <td className="border p-2">Physics, Chemistry, Maths</td>
                <td className="border p-2">50%</td>
              </tr>
              <tr>
                <td className="border p-2">B.Com. Accounting & Finance</td>
                <td className="border p-2">10+2 (or equivalent)</td>
                <td className="border p-2">Commerce Stream</td>
                <td className="border p-2">45%</td>
              </tr>
              <tr>
                <td className="border p-2">B.A. English Literature</td>
                <td className="border p-2">10+2 (or equivalent)</td>
                <td className="border p-2">Any Stream</td>
                <td className="border p-2">40%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">Application Process</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>
          <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
          <li><strong>Entrance Exam (if applicable):</strong> Appear for the college’s entrance examination.</li>
          <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
          <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
        </ol>

        <p className="mt-4">
          For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="#" className="text-blue-600 underline">Courses page</a> or <a href="#" className="text-blue-600 underline">Contact us</a> directly.
        </p>
      </div>
    </div>
  );
}

export default AdmissionsPage;