import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  CameraIcon,
  PhotoIcon,
  ChartBarIcon,
  FaceSmileIcon,
  CalendarDaysIcon,

} from "@heroicons/react/24/outline";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Posts from "../others/Posting";
import Navigation from "./Navigation";


const Home = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleEmojiClick = (emojiChar) => {
    setPostText((prevText) => prevText + emojiChar);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePost = () => {
    // Logic to handle posting the content (postText, selectedImage, selectedDate)
    console.log("Post text:", postText);
    console.log("Selected image:", selectedImage);
    console.log("Selected date:", selectedDate);
    // Reset state after posting (optional)
    setPostText("");
    setSelectedImage(null);
    setSelectedDate(null);
  };

  return (
    <div className="relative m-h-screen bg-black text-white border-l border-r border-gray-700 max-w-[560px] mx-auto">
      <nav className="fixed top-0 sm:left-[325px] sm:w-[550px] w-full bg-black z-10 flex justify-around border-b border-gray-600">
        <Link to="/" className="text-white font-bold border-b-4 border-blue-500">
          For You
        </Link>
        <Link to="/" className="text-white font-bold hover:border-b-4 border-blue-500">
          Following
        </Link>
      </nav>
      <div className="pt-[30px] pb-[20px] overflow-y-auto">
        <div className="bg-black  border-b border-gray-600 p-4  mb-10">
          <div className="flex items-center mb-4">
            <Link to="https://x.com/IrmiyaJeth79445">
              <img
                src="./images/jay.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </Link>
            <textarea
              className="ml-4 w-full p-2 rounded-lg resize-none text-white bg-black placeholder-gray-500 focus:outline-none"
              placeholder="What's happening?!"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
          </div>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full h-auto mb-4 rounded-lg"
            />
          )}
          <div className="flex justify-between items-center">
            <div className="icons flex space-x-4 text-blue-400">
              <CameraIcon
                className="w-5 h-5 cursor-pointer"
                onClick={handleCameraClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <PhotoIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              />
              <ChartBarIcon className="w-5 h-5 cursor-pointer" />
              <FaceSmileIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => handleEmojiClick("🎉")}
              />
              <CalendarDaysIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowDatePicker(!showDatePicker)}
              />
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  inline
                  className="absolute bg-white text-black rounded-md shadow-lg"
                />
              )}
            </div>
            <button
              className="bg-gray-600 text-black px-4 py-1 rounded-[20px] hover:bg-gray-200"
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <Posts/>

      <div className="">
          <Navigation/> 
      </div>
      

    </div>
  );
};

export default Home;