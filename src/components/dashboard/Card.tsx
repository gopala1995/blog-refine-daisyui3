import { PencilIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const Card = ({ props }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg py-3 px-5 w-[450px] hover:bg-gray-100 mt-2 ml-2">
      <div className="flex justify-between">
        <div>
          <p className="text-[#3c3c3c]">{props.title}</p>
          <hr className="border-t-[1px dashed red] mt-1" />
        </div>
        <div className="">
          <PencilIcon className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-col-2 mt-5 ">
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#3c3c3c]">
            {props.profit}
          </h3>
        </div>
        <div className="flex ml-7">
          <p className="text-gray-700">^ {props.grow}</p>
        </div>
      </div>
    </div>
  );
};
