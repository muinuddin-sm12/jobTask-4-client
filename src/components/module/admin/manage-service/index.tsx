/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import UpdateServiceModal from "@/components/ui/core/JTImageUploader/JTModal/UpdateServiceModal";
import { updateService } from "@/services/serviceSec";
import { IServiceSection } from "@/types/service";
import React, { useState } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { toast } from "sonner";

const ManageService = ({ data }: { data: IServiceSection[] }) => {
  // console.log(data);
  const [selectedService, setSelectedService] =
    useState<IServiceSection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (data: IServiceSection) => {
    setSelectedService(data);
    setIsModalOpen(true);
  };
  const handleUpdateConfirm = async (updatedData: {
    title: string;
    description: string;
  }) => {
    console.log(updatedData)
    try {
      if (selectedService?._id) {
        const res = await updateService(selectedService?._id, updatedData);
        console.log(res)
        if (res.success) {
          toast.success("Service updated successfully");
          setIsModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <div className=" px-6 overflow-hidden md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2">
      {data.map((service, index) => (
        <div key={index} className="relative border p-5">
          <div className="">
            <div>
              <div>Service {index + 1}</div>
              <div className="">
                <AiOutlineSelect
                  onClick={() => handleUpdate(service)}
                  className="text-black cursor-pointer hover:scale-105 absolute top-2 right-2 font-bold"
                />
              </div>
            </div>
            <h2>
              <span className="font-bold">Title:</span> {service?.title}
            </h2>
            <p>
              <span className="font-bold">Description:</span>{" "}
              {service?.description}
            </p>
          </div>
        </div>
      ))}

      {selectedService && (
        <UpdateServiceModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          onConfirm={handleUpdateConfirm}
          defaultValues={{
            title: selectedService.title,
            description: selectedService.description,
          }}
        />
      )}
    </div>
  );
};

export default ManageService;
