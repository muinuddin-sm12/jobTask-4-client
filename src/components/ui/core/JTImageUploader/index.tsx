import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";


type TImageUploaderProps = {
    label?: string;
    className?: string;
    setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
    setImagePreview: Dispatch<SetStateAction<[] | string[]>>
}
const JTImageUploader = ({label= "Upload Images", setImageFiles, setImagePreview}: TImageUploaderProps) => {
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file])


    if(file){
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview((prev) => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file); 
    }
    event.target.value = '';
  };
  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label htmlFor="image-uploader" className="w-36 h-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md text-center text-sm text-gray-500 hover:bg-gray-200 cursor-pointer">{label}</label>
    </div>
  );
};

export default JTImageUploader;
