import image from '@/assets/icons/image.svg';

interface InputImageProps {
  label: string;
}

const InputImage = ({ label }: InputImageProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="input-image" className="text-sm">
        {label}
      </label>
      <label
        className={`size-20 bg-slate-200 rounded-lg flex justify-center items-center ring-2 ring-slate-600`}
        htmlFor="input-image"
      >
        <img src={image} />
        <input
          id="input-image"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};

export { InputImage };
