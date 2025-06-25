import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ImagePreviewer from "../JTImageUploader/ImagePreviewer";
import JTImageUploader from "../JTImageUploader";

interface FormValues {
  title: string;
  subTitle: string;
}
interface UpdateModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: (updatedData: FormData) => void;
  defaultValues: FormValues;
}

const UpdateHeroModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onOpenChange,
  onConfirm,
  defaultValues,
}) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
  });
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  // Reset form when defaultValues change
  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("backgroundImage", imageFiles[0]);
    onConfirm(formData);
    onOpenChange(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Hero Section</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Label>Title</Label>
          <Input {...register("title")} placeholder="Title" />
          <Label>SubTitle</Label>
          <Textarea {...register("subTitle")} placeholder="SubTitle" />
          <Label>Hero Image</Label>
          {imagePreview?.length > 0 ? (
            <ImagePreviewer
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
              className="mt-4 w-full"
            />
          ) : (
            <div className="mt-4 w-full">
              <JTImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Image"
              />
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button variant="default" type="submit">
              Update
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateHeroModal;
