import Loading from "@/Components/Loading";
import { getProductById } from "@/features/admin/api/product";
import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useQuery } from "react-query";
import { GetProductById } from "../types/product";
import { FaTimes } from "react-icons/fa";

const ModalDetail = ({
  open,
  handleOpen,
  id,
}: {
  open: boolean;
  handleOpen: () => void;
  id: number;
}) => {
  const { data: dataProduct, isLoading: isProductLoading } =
    useQuery<GetProductById>({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
    });
  return (
    <div>
      <Dialog placeholder={""} size="lg" open={open} handler={handleOpen}>
        <DialogHeader
          placeholder={""}
          className="font-poppins flex justify-end"
        >
          <FaTimes
            onClick={handleOpen}
            className="cursor-pointer text-gray-600"
          />
        </DialogHeader>
        <DialogBody className="font-poppins text-gray-500" placeholder={""}>
          {isProductLoading ? (
            <Loading /> // Tampilkan indikator loading jika data sedang dimuat
          ) : (
            <>
              {dataProduct ? (
                <div>
                  <img
                    src={
                      dataProduct.path_files ??
                      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }
                    alt="Product image"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                  {dataProduct.tags ? (
                    <div className="flex gap-2 my-2">
                      {dataProduct.tags.map((tags, index) => (
                        <Chip
                          key={index}
                          variant="outlined"
                          value={tags}
                          className="font-raleway"
                        />
                      ))}
                    </div>
                  ) : (
                    <div>Tidak ada tag</div>
                  )}
                  <div>{dataProduct.description}</div>
                </div>
              ) : (
                <div>Data Tidak Tersedia</div>
              )}
            </>
          )}
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 font-poppins"
          >
            <span>Tutup</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ModalDetail;
