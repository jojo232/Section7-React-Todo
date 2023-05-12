import React, { useState } from "react";
import "./styles.css";

// ループしてレンダリングしている中で何番目の行を判定している場合は。
// mapのindexを使用して関数に渡してあげて
// その関数の中で何番目か判定していろんなn処理をしていく



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// このコードは、入力フォームに入力された文字列をstateのtodoTextに設定するための関数です。
export const App = () => {
  const [todoText, setTodoText] = useState(``); // 空の文字列 ('') が初期値として設定されています。
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setComleteTodos] = useState([`ううう`]);
  
  

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // この関数はonChangeイベントで呼び出され、event.target.valueで取得した値が、setTodoText関数を介してtodoTextに設定されます。
  // つまり、入力された値がリアルタイムで反映されるようになります。
  
// (event)は、Reactでよく使われるイベントハンドラー関数の引数の一つで、イベントが発生した要素に関する情報を取得するために使用されます。
// イベントハンドラー関数とは、特定のイベントが発生したときに呼び出される関数のことです。
// 例えば、ボタンがクリックされたとき、テキストフィールドに入力されたとき、マウスが要素の上に乗ったときなどが挙げられます。これらのイベントに対して、イベントハンドラー関数を定義することで、特定の処理を行うことができます。
// (event.target.value) は、イベントが発生した要素の値を取得するために使用される式です。一般的に、ユーザーの入力値を取得するために使用されます。
// たとえば、フォームのテキスト入力フィールドでテキストを入力すると、そのテキストフィールドがフォーカスを失ったときにイベントが発生します。その後、イベントハンドラー関数内で (event.target.value) を使用して、テキスト入力フィールドに入力されたテキストの値を取得できます。これにより、入力値を処理することができます。

  
  
  const onClickAdd = () => {
    if (todoText === "") return; //追加ボタン押しても追加されない、
    const newTodos = [...incompleteTodos, todoText];
// この行の役割は、現在の incompleteTodos 配列に、新しい todoText 文字列を追加して、新しい配列を作成することです。
// スプレッド演算子（...）は、incompleteTodos 配列のすべての要素を展開し、その後に todoText を追加しています。
// これにより、新しい配列が作成され、その後 setIncompleteTodos を使用して、新しい配列が incompleteTodos ステート変数に設定されます。
    
    
    setIncompleteTodos(newTodos);
// この行は、「incompleteTodos」配列に「newTodos」配列を追加するためのものです。
    
    
    setTodoText(""); //入力欄も文字を入れなくする
  };
  // この関数は「追加」ボタンがクリックされた時に実行される処理を定義しています。まず、入力欄に入力されたテキストを取得し、その値が空の場合は何もせずに処理を終了します。

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------


  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // onClickDelete関数は、与えられたインデックスの要素を未完了のTODOリストから削除するための処理を行います。
  // incompleteTodosの配列をコピーし、spliceメソッドを使用して指定されたインデックスの要素を削除します。
  // setIncompleteTodosを使用して削除後の新しい配列をincompleteTodosの状態として設定します
  // onClickDelete関数が呼ばれたときに指定されたインデックスの要素が削除され、未完了のTODOリストが更新されます。
  // .splice = 配列newIncompleteTodosから指定されたインデックスの要素を削除するためのメソッドです。
  
  

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setComleteTodos(newCompleteTodos);
  };
 // onClickComplete関数は、与えられたインデックスの要素を未完了のTODOリストから完了のTODOリストに移動させる処理を行います。
　// 　onClickComplete関数が実行されたときに、指定されたインデックスの要素が未完了のTODOリストから削除され、完了のTODOリストに追加されます。
// そして、setIncompleteTodosとsetCompleteTodosを使用して、それぞれの状態を更新します。  
  

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setComleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};










------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import "./styles.css";

// ループしてレンダリングしている中で何番目の行を判定している場合は。
// mapのindexを使用して関数に渡してあげて
// その関数の中で何番目か判定していろんなn処理をしていく

export const App = () => {
  const [todoText, setTodoText] = useState(``);
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setComleteTodos] = useState([`ううう`]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; //追加ボタン押しても追加されない
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText(""); //入力欄も文字を入れなくする
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setComleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setComleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};



