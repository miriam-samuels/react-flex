import { User } from 'iconsax-react';
import React, { useRef, useState } from 'react'
import { BtnSecondary, BtnTertiary } from '../button';
import './index.scss'
interface FileProps {
   defaultVal?: string;
   onImageSelect: (file: any) => void
}
function FileSelector({ onImageSelect, defaultVal }: FileProps) {
   const [previewImage, setPreviewImage] = useState<any>(defaultVal);
   const fileRef = useRef<any>(null)

   const handleImageSelect = (event: any) => {
      const file = event.target.files[0];
      if (!file) {
         return;
      }

      const reader = new FileReader();
      reader.onload = function (event) {
         setPreviewImage(event?.target?.result);
         onImageSelect(file);
      };
      reader.readAsDataURL(file);
   }

   const handleClick = () => {
      fileRef?.current?.click()
   }
   
   return (
      <div id='file-selector' className='file-selector'>
         <div className='preview' >
            {
               previewImage || defaultVal ?
                  <img src={previewImage || defaultVal} alt="Preview" /> :
                  <User />
            }
            <BtnTertiary onClick={handleClick}>Change Image</BtnTertiary>
            <BtnSecondary>Delete Image</BtnSecondary>
         </div>
         <input
            ref={fileRef}
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageSelect}
         />
      </div>
   )
}

export default FileSelector