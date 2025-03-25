"use client";

import { useState, useRef } from "react";
import Button from "@/app/_components/button";
import Input from "@/app/_components/input";

export default function Upload() {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        files.forEach(file => {
            formData.append("files", file);
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles(Array.from(event.target.files));
            // eslint-disable-next-line no-param-reassign
            event.target.value = ""; // Reset the input
        }
    };

    const removeSelectedFile = (index: number) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="px-4 py-20 h-screen flex flex-col text-emerald-950 gap-8 justify-center max-w-md">
            <h1 className="text-2xl font-bold">Your contribution matters</h1>
            <p className="text-base">
                Upload your academic work and help other students.
            </p>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-base"
            >
                <Input label="Title" error="Title is required" name="title" />
                <Input
                    label="School"
                    error="School is required"
                    name="school"
                />
                <Input
                    label="Course"
                    error="Course is required"
                    name="course"
                />
                <Input
                    label="Category"
                    error="Category is required"
                    name="category"
                />

                <div>
                    <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="secondary"
                    >
                        Choose Files
                    </Button>
                    <input
                        type="file"
                        multiple
                        name="files"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: "none" }}
                    />
                </div>

                {files.length > 0 && (
                    <ul>
                        {files.map((file, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li key={file.name + index}>
                                {file.name}
                                <button
                                    type="button"
                                    onClick={() => removeSelectedFile(index)}
                                    className="ml-2 text-red-500"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <Button type="submit" disabled={files.length === 0}>
                    Upload
                </Button>
            </form>
        </div>
    );
}
