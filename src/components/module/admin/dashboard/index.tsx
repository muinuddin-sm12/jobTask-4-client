import { IContact } from "@/types/contact";
import React from "react";

const ContactList = ({ data }: { data: IContact[] }) => {
  console.log(data);
  return (
    <div className="px-6 md:px-12 lg:px-20 w-full">
      <h2 className="text-xl font-[600] mb-4">Contact Lists</h2>

      <div className="">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">#</th> {/* Serial Number */}
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((singleData, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{singleData.name}</td>
                <td className="px-4 py-2 border">{singleData.email}</td>
                <td className="px-4 py-2 border">
                  {singleData.message || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
