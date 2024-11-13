import './App.css'
import UseCallbackComponent from './components/UseCallbackComponent';
import UseCounterComponent from './components/UseCounterComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent'
import UseStatecomponent from './components/useStateComponent';

/*
  날짜 : 2024/11/12
  이름 : 박서홍
  내용 : ch04. 리액트 훅 hook은 use로 시작

*/

function App() {
  return (
    <>
      <h3>ch04.react hooks</h3>
      <h4>useRef()</h4>
      <UseRefComponent />
      <h4>useState()</h4>
      <UseStatecomponent />
      <h4>useReducer()</h4>
      <UseReducerComponent />
      <h4>useEffect()</h4>
      <UseEffectComponent/>
      <h4>useMemo()</h4>
      <UseMemoComponent/>
      <h4>useCallback()</h4>
      <UseCallbackComponent/>
      <h4>Custom Hook()</h4>
      <UseCounterComponent/>
    </>
  );
}

export default App
