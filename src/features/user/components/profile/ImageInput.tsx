import useAuth from "@/hooks/useAuth";
import { FiEdit } from "react-icons/fi";

type ImageUploadProps = {
  image?: File;
  setImage: (value: File) => void;
};

const ImageUpload = ({ image, setImage }: ImageUploadProps) => {
  const {user} = useAuth();
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      return null;
    }
  };

  return (
    <div className="text-center mb-4">
      <label
        htmlFor="imageProfileUpload"
        className="relative inline-block cursor-pointer"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
          <div className="w-full h-full">
          {image ? (
              <img
                loading="lazy"
                src={URL.createObjectURL(image)}
                alt="user-picture"
                className="object-cover object-center w-full h-full"

              />
            ) : (
              <img
                loading="lazy"
                src={
                  `${import.meta.env.VITE_API_BASE_URL}/${user?.path_files}` ??
                  "/user_default.png"
                }
                alt="user-picture"
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black opacity-0 rounded-full hover:opacity-50 flex items-center justify-center h-48">
            <FiEdit size={30} className="text-white" />
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          id="imageProfileUpload"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
