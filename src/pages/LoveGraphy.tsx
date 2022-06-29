import LoveGraphyDay from "../components/LoveGraphyDay";

const LoveGraphy = () => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <LoveGraphyDay
          day="2022년 3월 21일"
          text="동주가 Slack으로 dm 보낸 날"
          subText='"패스트캠퍼스 수료식 날과 동일"'
          ps="첫 개인 연락"
        />
        <LoveGraphyDay
          day="2022년 3월 23일"
          text="동주와 첫 데이트"
          subText='"인생이 바뀐 날"'
          ps="첫 데이트"
        />
      </ol>
    </div>
  );
};

export default LoveGraphy;
