import useAuth from '@/hooks/useAuth';
import { FiEdit } from 'react-icons/fi';

type ImageUploadProps = {
  image?: File;
  setImage: (value: File) => void;
};

const ImageUpload = ({ image, setImage }: ImageUploadProps) => {
  const auth = useAuth();

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
                src={URL.createObjectURL(image)}
                alt="user-picture"
                className="object-cover object-center w-full h-full"
              />
            ) : (
              <img
                src={auth.user?.image_path ?? "/user_default.png"}
                alt="user-picture"
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black opacity-0 rounded-full hover:opacity-50 flex items-center justify-center">
            <FiEdit size={32} className="text-white" />
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
