///　練習用に、セクション7の53.CSSでスタイリングまで終了したので、Reactの勉強に当てる

import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOリスト" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        <ul>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};

//　3つに分かれるのでdivを3つ書いていく
// JSXで学んだように1つのタグで囲んでおく必要がある。




--------------------------------------------------------------------------------------------------------------------------------------------

import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOリスト" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
