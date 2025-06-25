import React from "react";
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

interface FormValues {
  title: string;
  description: string;
}
interface UpdateModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: (updatedData: FormValues) => void;
  defaultValues: FormValues;
}

const UpdateServiceModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onOpenChange,
  onConfirm,
  defaultValues,
}) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
  });

  // Reset form when defaultValues change
  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = (data: FormValues) => {
    onConfirm(data);
    onOpenChange(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Service</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Label>
                Title 
            </Label>
          <Input {...register("title")} placeholder="Title" />
          <Label>
                Description 
            </Label>
          <Textarea {...register("description")} placeholder="Description" />

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

export default UpdateServiceModal;
