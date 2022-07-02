import { Link } from "react-router-dom";

export type LoveGraphyDayType = {
  day: string;
  text: string;
  subText: string;
  ps: string;
};

const LoveGraphyDay = ({ day, text, subText, ps }: LoveGraphyDayType) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <div className="love--graphy--div">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          {day}
        </time>
        <Link
          to={`./${day}`}
          className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {/* <img
          className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0"
          src="/docs/images/people/profile-picture-1.jpg"
          alt="Jese Leos image"
        /> */}
          <div className="text-gray-600 dark:text-gray-400">
            <div className="text-base font-normal">
              <span className="font-medium text-gray-900 dark:text-white">
                {text}
              </span>
            </div>
            <div className="text-sm font-normal">{subText}</div>
            <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {ps}
            </span>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default LoveGraphyDay;
