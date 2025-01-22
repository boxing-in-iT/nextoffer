"use client";
import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Table } from "@/components/Table/Table";
import { TableBody } from "@/components/Table/TableBody";
import { TableHeader } from "@/components/Table/TableHeader";
import { ALL_RESUMES_COLUMNS } from "@/page-components/resume/constant";

const ResumePage: FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    // Здесь можно обработать загруженные файлы
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <Table>
        <TableHeader columns={ALL_RESUMES_COLUMNS} />
        <TableBody items={[]} columns={ALL_RESUMES_COLUMNS} />
      </Table>

      <hr className="my-10 h-3" />

      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="text-3xl font-bold">Upload your CV</h2>
        <p className="text-l text-center">
          The contents of the CV will be used to
          <br /> generate interview answers.
        </p>

        <div
          {...getRootProps()}
          className="border-dashed border-2 border-gray-400 p-10 text-center cursor-pointer w-1/4 mt-6"
        >
          <input {...getInputProps()} />
          <p>
            Drag &apos;n&apos; drop your files here, or click to select files
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
