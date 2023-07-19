import { ILoadingSpinnerProps } from "@/interfaces/ILoadingSpinner-Interface";
import { Oval } from "react-loader-spinner";

function LoadingSpinner({ title = "Loading..." }: ILoadingSpinnerProps) {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center justify-center">
        <Oval
          height={80}
          width={80}
          color="#344153"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#C3A370"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <h2 className="text-xl font-bold leading-tight mt-5">{title}</h2>
      </div>
    </div>
  );
}

export default LoadingSpinner;
