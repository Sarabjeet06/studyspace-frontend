import React, { useState } from "react";
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog";
import UploadLinkModal from "./uploadLinkModal";

export default function UpdateAnnouncementModal({ open, setOpen }) {

    const [openUploadLinkModal, setOpenUploadLinkModal] = useState(false);


    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogContent className=''>
                <section className="p-2">
                    <div className="flex items-center gap-4 border-b-2 border-blue-500 pb-3 mb-10">
                        <div className='relative w-10 h-10 rounded-full bg-blue-500'>
                            <Image
                                className='absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'
                                src='/images/announcement-icon.png'
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="font-medium font_poppins_custom">Announcement</div>
                    </div>
                    <div className='flex flex-col items-end py-1 gap-3'>
                        <textarea className={`resize-none bg-gray-100 w-full h-40 text-sm text-left text-black px-5 py-3 rounded outline-none`} name="announcement" id="announcement">
                        </textarea>
                        <div className='flex justify-between w-full'>
                            <div className='flex gap-2 items-center *:w-10 *:h-10 *:border-[1px]'>
                                <button
                                    onClick={() => { setOpenUploadLinkModal(true); }}
                                    className='bg-white hover:bg-gray-100 rounded-full'>
                                    <Image
                                        className='mx-auto my-auto'
                                        src='/images/drive-icon.png'
                                        width={24}
                                        height={24}
                                    />
                                </button>
                                <button
                                    onClick={() => { setOpenUploadLinkModal(true); }}
                                    className='bg-white hover:bg-gray-100 rounded-full'>
                                    <Image
                                        className='mx-auto my-auto'
                                        src='/images/youtube-icon.png'
                                        width={24}
                                        height={24}
                                    />
                                </button>
                                <button
                                    onClick={() => { setOpenUploadLinkModal(true); }}
                                    className='bg-white hover:bg-gray-100 rounded-full'>
                                    <Image
                                        className='mx-auto my-auto'
                                        src='/images/upload-icon.png'
                                        width={24}
                                        height={24}
                                    />
                                </button>
                                <button
                                    onClick={() => { setOpenUploadLinkModal(true); }}
                                    className='bg-white hover:bg-gray-100 rounded-full'>
                                    <Image
                                        className='mx-auto my-auto'
                                        src='/images/link-icon.png'
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                            <div className='flex gap-3 py-2 *:px-4 *:py-1'>
                                <button className='w-fit bg-blue-500 text-white hover:bg-blue-600 rounded'>Post</button>
                                <button className='w-fit bg-gray-100 hover:bg-gray-200 rounded'>cancel</button>
                            </div>
                        </div>
                    </div>
                </section>
                <UploadLinkModal
                    open={openUploadLinkModal}
                    setOpen={setOpenUploadLinkModal}
                />
            </DialogContent>
        </Dialog>
    )
}
