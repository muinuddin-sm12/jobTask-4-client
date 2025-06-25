/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import UpdateHeroModal from "@/components/ui/core/JTModal/UpdateHeroModal";
import { updateHeroSec } from "@/services/heroSec";
import { IHeroSection } from "@/types/hero";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { toast } from "sonner";

const ManageHero = ({ data }: { data: IHeroSection[] }) => {
  const [selectedService, setSelectedService] = useState<IHeroSection | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (data: IHeroSection) => {
    setSelectedService(data);
    setIsModalOpen(true);
  };
  const handleUpdateConfirm = async (updatedData: FormData) => {
    try {
      if (selectedService?._id) {
        const res = await updateHeroSec(selectedService?._id, updatedData);
        console.log(res);
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
    <div className=" px-6 overflow-hidden md:px-12 lg:px-20 w-full">
      {data.map((service, index) => (
        <div key={index} className="relative border p-5">
          <div className="">
            <div>
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
              <span className="font-bold">SubTitle:</span> {service?.subTitle}
            </p>
          </div>
          <div className="h-[250px] mt-8 w-full overflow-hidden">
            <Image
              className="h-full w-full bg-center object-cover"
              src={service.backgroundImage}
              height={1000}
              width={1000}
              alt="backgroundImg"
            />
          </div>
        </div>
      ))}

      {selectedService && (
        <UpdateHeroModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          onConfirm={handleUpdateConfirm}
          defaultValues={{
            title: selectedService.title,
            subTitle: selectedService.subTitle,
          }}
        />
      )}
    </div>
  );
};

export default ManageHero;
