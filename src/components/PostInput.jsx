import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

//logic
const textareaRef = useRef(null) 

//const PostInput = () => {defaultvalue = '', userName = 'anonymous', userProfileImage = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y", onChange,

const [value, setValue] = useState(defaultvalue);

const handleChange = (event) => {
  const { value } = event.target;
  setValue(value);
};

useEffect(() => {
  console.log("textareaRef", textareaRef);
  textareaRef.current && textareaRef.current.focus();
  textareaRef.current && textareaRef.current.setSelectionRange(lenght, length);
}, []);

//view
  return (
    <div className="px-6 border-t border-churead-gray-300 border-opacity-15 pt-3">
      <div className="flex items-start gap-3">
        {/* START: 프로필 이미지 영역 */}
        <div className="w-10 rounded-full overflow-hidden mt-1">
          <img src="./images/temp/user.png" alt="사용자 프로필 이미지" />
        </div>
        {/* END: 프로필 이미지 영역 */}
        {/* START: 콘텐츠 영역 */}
        <div className="w-full">
          <div className="flex items-center">
            <span className="font-bold">chutzrit</span>
          </div>
          <div className="pt-1 text-sm">
            <textarea
              rows={4}
              placeholder="문구를 작성하세요"
              className="w-full placeholder-churead-gray-300 placeholder-opacity-60 text-churead-gray-400 bg-transparent outline-none resize-none"
              onChnage={handleChange}
            />
          </div>
        </div>
        {/* END: 콘텐츠 영역 */}
      </div>
    </div>
  );
};

export default PostInput;
