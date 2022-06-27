import { memo } from "react";

const dongju: Array<string> = [
  "나 이동주는 평생 이교헌을 질려하지 않겠습니다.",
  "나 이동주는 이교헌과 결혼하겠습니다.",
  "나 이동주는 평생 이교헌을 사랑하겠습니다.",
];
const gyoheon: Array<string> = [
  "나 이교헌은 평생 이동주를 질려하지 않겠습니다.",
  "나 이교헌은 이동주와 결혼하겠습니다.",
  "나 이교헌은 평생 이동주를 사랑하겠습니다.",
  "나 이교헌은 이동주에게 겨드랑이와 정수리를 주겠습니다.",
  "나 이교헌은 이동주가 괴롭혀도 가만히 있겠습니다.",
  "그렇지만 나 이교헌은 이동주를 괴롭히지 않겠습니다.",
];

const Memorandum = () => {
  const memorandumList = (items: Array<string>) => (
    <ol className="momorandum--ol">
      {items.map((item: string) => (
        <li className="momorandum--li">{item}</li>
      ))}
    </ol>
  );

  return (
    <div>
      <div className="momorandum--div">
        <h1 className="momorandum--h1">-각서-</h1>
        {memorandumList(dongju)}
        <h1 className="momorandum--h1">-이동주-</h1>
      </div>
      <div className="momorandum--div">
        <h1 className="momorandum--h1">-각서-</h1>
        {memorandumList(gyoheon)}
        <h1 className="momorandum--h1">-이교헌-</h1>
      </div>
    </div>
  );
};

export default Memorandum;
