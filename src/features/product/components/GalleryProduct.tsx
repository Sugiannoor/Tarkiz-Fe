
type param = {
    data: string[] | undefined
}
export function GalleryProduct({data}: param) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data?.map(( imageLink , index) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
              
            />
          </div>
        ))}
      </div>
    );
  }
   