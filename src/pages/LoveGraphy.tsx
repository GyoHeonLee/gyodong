import LoveGraphyDay from "../components/LoveGraphyDay";
import { LoveGraphyDayType } from "../components/LoveGraphyDay";

const day1 = {
  day: "2022년 3월 21일",
  text: "동주가 Slack으로 dm 보낸 날",
  subText: '"패스트캠퍼스 수료식 날과 동일"',
  ps: "첫 개인 연락",
};
const day2 = {
  day: "2022년 3월 23일",
  text: "동주와 첫 데이트",
  subText: '"익선동에서"',
  ps: "첫 데이트",
};
const day3 = {
  day: "2022년 3월 23일",
  text: "동주와 연애 시작",
  subText: '"경희대에서"',
  ps: "1일",
};
const days = [day1, day2, day3];

const LoveGraphy = () => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {days.map((day) => (
          <LoveGraphyDay key={day.day} {...day} />
        ))}
      </ol>
    </div>
  );
};

export default LoveGraphy;
