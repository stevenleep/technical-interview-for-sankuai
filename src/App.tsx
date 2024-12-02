import MyComponent from "./components/MyComponent";
import { transform } from "./user/transform";
import { confirm } from "./lib";

const users = [
  { id: 1, name: "jack", disabled: false },
  { id: 2, name: "admin", disabled: true },
];

const feUsers = transform(users);

export default function App() {
  async function handleClick() {
    const result = await confirm({
      title: "Are you sure delete this task?",
      content: "Some descriptions",
    });
    if (result) {
      console.log("OK");
    } else {
      console.log("Cancel");
    }
  }

  function handleConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      content: "Some descriptions",
    }).then((result) => {
      if (result) {
        console.log("OK");
      } else {
        console.log("Cancel");
      }
    });
  }

  return (
    <ul>
      <li className="box">
        <pre>转换前的用户数据: {JSON.stringify(users, null, 2)}</pre>
        <pre>转换后的用户模型: {JSON.stringify(feUsers, null, 2)}</pre>
      </li>

      <li className="box">
        <button onClick={handleClick}>Confirm Async/await</button>
        <button onClick={handleConfirm}>Confirm promise then</button>
      </li>

      <li className="box">
        <MyComponent />
      </li>
    </ul>
  );
}
