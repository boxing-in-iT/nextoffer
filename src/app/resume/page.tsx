"use client";
import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Table } from "@/components/Table/Table";
import { TableBody } from "@/components/Table/TableBody";
import { TableHeader } from "@/components/Table/TableHeader";
import { ALL_RESUMES_COLUMNS } from "@/page-components/resume/constant";
import { UploadCloud } from "lucide-react";

const ResumePage: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
    console.log("Uploaded files:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Table>
        <TableHeader columns={ALL_RESUMES_COLUMNS} />
        <TableBody items={[]} columns={ALL_RESUMES_COLUMNS} />
      </Table>

      <hr className="my-10 h-3" />

      <div className="flex flex-col w-full items-center text-center">
        <h2 className="text-3xl font-bold mb-3">Upload your CV</h2>
        <p className="text-lg text-gray-600 max-w-lg">
          Upload your resume to help generate tailored interview answers.
        </p>

        <div
          {...getRootProps()}
          className={`mt-6 w-full max-w-xl p-6 border-2 border-dashed rounded-lg cursor-pointer transition-all 
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-400 bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <UploadCloud className="w-12 h-12 text-gray-500" />
            <p className="text-gray-700 text-lg font-semibold">
              {isDragActive
                ? "Drop the files here..."
                : "Drag & drop your files here or click to select"}
            </p>
            <p className="text-gray-500 text-sm">
              Supported formats: PDF, DOCX, TXT
            </p>
          </div>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-6 w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Uploaded Files:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="truncate">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
