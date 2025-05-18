"use client"

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { createPost } from "@/lib/actions/Post";
import { toast } from "sonner";

const UploadPost = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [fileName, setFileName] = useState<string | null>();

  const handlePost = async () => {
    if (!fileRef.current || !textRef.current) return;
    await createPost({
      file: fileRef.current?.files?.[0],
      message: textRef.current?.value,
    });
    fileRef.current.value = "";
    textRef.current.value = "";
    toast("Post Uploaded!")
  }

  return <div className="flex flex-col grow p-10 gap-5">
    <div>
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={() => {
          if (fileRef.current?.files?.[0]) {
            setFileName(fileRef.current?.files?.[0].name as string);
          } else {
            setFileName(null);
          }
        }}
      />

      <div
        className="aspect-[3/1] bg-stone-700 rounded-xl flex flex-col  items-center justify-center font-medium text-base md:text-xl text-white/50 cursor-pointer border border-stone-500/50 relative overflow-clip py-7"
        style={{
          background: fileName
            ? `url('${URL.createObjectURL(fileRef.current?.files?.[0] as File)}') center/cover`
            : "",
        }}
        onClick={() => {
          fileRef.current?.click();
        }}
      >
        <FaUpload className="opacity-50 text-xl md:text-3xl xl:text-4xl mb-1 md:mb-2 xl:mb-4" />
        {!fileName ? (
          <p className="leading-4 md:text-base xl:text-xl text-sm">
            {fileName ? fileName : "Upload an Image "}
          </p>
        ) : (
          <p className="bg-stone-700 text-neutral-200 px-2 py-1 text-xs md:text-base rounded-full ">
            {fileName}
          </p>
        )}
        <p className="text-base font-normal"></p>
      </div>
    </div>

    <div className="flex flex-col gap-3">

      <Textarea placeholder="Enter the content for your post" ref={textRef}></Textarea>
      <Button className="w-fit" onClick={handlePost}>Post</Button>
    </div>

  </div>
}
export default UploadPost;
