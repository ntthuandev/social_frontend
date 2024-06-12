import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import Button from "@/components/ui/Button";
import fileUpload from "@/assets/images/file-upload.svg";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
};

const FileUploader = ({ fieldChange }: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      fieldChange(newFiles);
    },
    [files, fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" multiple />

      <div className="flex-center flex-col p-7">
        <img src={fileUpload} width={96} height={77} alt="file upload" />

        <h3 className="base-medium text-light-2 mb-2 mt-6">Thả ảnh vào đây</h3>
        <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

        <Button type="button" className="capitalize">
          Chọn từ thiết bị
        </Button>
      </div>
    </div>
  );
};

export default FileUploader;
